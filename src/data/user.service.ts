import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './users.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private users = new BehaviorSubject<User[]>(this.users);
  users$ = this.users.asObservable();

  getAll() {
    return this.users$;
  }

  getById(id: number): User | undefined {
    return this.users.getValue().find((u) => u.id === id);
  }

  add(user: User) {
    const current = this.users.getValue();
    this.users.next([...current, { ...user, id: Date.now() }]);
  }

  update(updatedUser: User) {
    const current = this.users
      .getValue()
      .map((user) => (user.id === updatedUser.id ? updatedUser : user));
    this.users.next(current);
  }

  softDelete(id: number) {
    const current = this.users
      .getValue()
      .map((user) => (user.id === id ? { ...user, status: 'inactive' } : user));
    this.users.next(current);
  }
}
