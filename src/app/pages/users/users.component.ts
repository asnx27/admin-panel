import { Component, computed, signal } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ToastService } from '../../services/toasts/toast.services';
import { ModalService } from '../../services/modals/modal.service';
import { UsersService } from '../../services/users/users.service';
import { StatusBadgeComponent } from '../../component/status-badge/status-badge.component';
import { ModalComponent } from '../../component/modal/modal.component';
import { CommonModule } from '@angular/common';
import { User } from '../../../data/users';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StatusBadgeComponent,
    ModalComponent,
  ],
  templateUrl: './users.component.html',
})
export class UsersComponent {
  allUsers = computed(() => this.userService.usersSignal());
  selectedUserId = signal<number | null>(null);
  searchQuery = signal('');
  selectedStatus = signal('all');
  selectedRole = signal('all');
  perPage = signal(5);
  currentPage = signal(1);

  editForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl<'admin' | 'customer' | 'manager'>(
      'customer',
      Validators.required
    ),
  });

  filteredUsers = computed(() => {
    const query = this.searchQuery().toLowerCase();
    const status = this.selectedStatus();
    const role = this.selectedRole();

    return this.allUsers()
      .filter((user) => {
        const matchesQuery =
          user.name.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query);
        const matchesStatus = status === 'all' ? true : user.status === status;
        const matchesRole = role === 'all' ? true : user.role === role;
        return matchesQuery && matchesStatus && matchesRole;
      })
      .slice(
        (this.currentPage() - 1) * this.perPage(),
        this.currentPage() * this.perPage()
      );
  });

  totalPages = computed(() => {
    const total = this.allUsers().filter((user) => {
      const matchesQuery = user.name
        .toLowerCase()
        .includes(this.searchQuery().toLowerCase());
      const matchesStatus =
        this.selectedStatus() === 'all' ||
        user.status === this.selectedStatus();
      const matchesRole =
        this.selectedRole() === 'all' || user.role === this.selectedRole();
      return matchesQuery && matchesStatus && matchesRole;
    }).length;
    return Math.ceil(total / this.perPage());
  });

  pageNumbers = computed(() =>
    Array.from({ length: this.totalPages() }, (_, i) => i + 1)
  );

  constructor(
    public modalService: ModalService,
    private userService: UsersService,
    private toast: ToastService
  ) {}

  confirmSoftDelete(id: number) {
    this.selectedUserId.set(id);
    this.modalService.open('delete');
  }

  softDeleteConfirmed() {
    const id = this.selectedUserId();
    if (id !== null) {
      this.userService.softDelete(id);
      this.toast.success('User status set to inactive.');
      this.selectedUserId.set(null);
    }
    this.modalService.close();
  }

  cancel() {
    this.modalService.close();
    this.selectedUserId.set(null);
    this.editForm.reset();
  }

  updateQuery(query: string) {
    this.searchQuery.set(query);
    this.currentPage.set(1);
  }

  updateStatus(status: string) {
    this.selectedStatus.set(status);
    this.currentPage.set(1);
  }

  updateRole(role: string) {
    this.selectedRole.set(role);
    this.currentPage.set(1);
  }

  setPerPage(value: number) {
    this.perPage.set(+value);
    this.currentPage.set(1);
  }

  setPage(page: number) {
    this.currentPage.set(page);
  }

  startEdit(user: User) {
    this.editForm.setValue({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
    this.modalService.open('edit');
  }

  submitEdit() {
    if (this.editForm.valid) {
      const updated = { ...this.editForm.value } as User;
      this.userService.update(updated);
      this.toast.success('User updated successfully.');
      this.cancel();
    }
  }
}
