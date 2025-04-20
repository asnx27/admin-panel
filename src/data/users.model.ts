export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'banned';
  createdAt: string;
  lastLogin: string | null;
  isEmailVerified: boolean;
  avatarUrl: string;
}
