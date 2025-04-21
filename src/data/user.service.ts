import { Injectable, signal } from '@angular/core';
import { USERS } from './users';
import { computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  private users = signal(USERS);

  allUsers = computed(() => this.users());
  activeUsers = computed(() =>
    this.users().filter((u) => u.status === 'active')
  );

  getUser(id: number) {
    return this.users().find((user) => user.id === id);
  }

  addUser(user: any) {
    const updated = [...this.users(), user];
    this.users.set(updated);
  }

  updateUser(id: number, updatedUser: any) {
    this.users.set(
      this.users().map((user) =>
        user.id === id ? { ...user, ...updatedUser } : user
      )
    );
  }

  softDeleteUser(id: number) {
    this.updateUser(id, { status: 'inactive' });
  }
}
