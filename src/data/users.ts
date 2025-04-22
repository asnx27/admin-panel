export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'customer' | 'manager';
  status: 'active' | 'banned' | 'inactive';
  createdAt: string;
  lastLogin: string | null;
  isEmailVerified: boolean;
  avatarUrl: string;
}

export const USERS: User[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-15T08:30:00Z',
    lastLogin: '2024-06-01T12:15:00Z',
    isEmailVerified: true,
    avatarUrl:
      'https://ui-avatars.com/api/?name=Alice+Johnson&background=random&size=100',
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@example.com',
    role: 'customer',
    status: 'banned',
    createdAt: '2023-11-10T14:45:00Z',
    lastLogin: null,
    isEmailVerified: false,
    avatarUrl:
      'https://ui-avatars.com/api/?name=Bob+Smith&background=random&size=100',
  },
  {
    id: 3,
    name: 'Sarah Lee',
    email: 'sarah@example.com',
    role: 'manager',
    status: 'inactive',
    createdAt: '2024-03-01T09:00:00Z',
    lastLogin: '2024-06-10T18:40:00Z',
    isEmailVerified: true,
    avatarUrl:
      'https://ui-avatars.com/api/?name=Sarah+Lee&background=random&size=100',
  },
  {
    id: 4,
    name: 'David Miller',
    email: 'david@example.com',
    role: 'customer',
    status: 'active',
    createdAt: '2024-02-10T10:20:00Z',
    lastLogin: '2024-06-05T14:00:00Z',
    isEmailVerified: true,
    avatarUrl:
      'https://ui-avatars.com/api/?name=David+Miller&background=random&size=100',
  },
  {
    id: 5,
    name: 'Emma Brown',
    email: 'emma@example.com',
    role: 'manager',
    status: 'active',
    createdAt: '2023-12-22T16:45:00Z',
    lastLogin: '2024-06-08T11:30:00Z',
    isEmailVerified: true,
    avatarUrl:
      'https://ui-avatars.com/api/?name=Emma+Brown&background=random&size=100',
  },
  {
    id: 6,
    name: 'James Wilson',
    email: 'james@example.com',
    role: 'customer',
    status: 'inactive',
    createdAt: '2024-04-01T13:10:00Z',
    lastLogin: null,
    isEmailVerified: false,
    avatarUrl:
      'https://ui-avatars.com/api/?name=James+Wilson&background=random&size=100',
  },
  {
    id: 7,
    name: 'Olivia Martinez',
    email: 'olivia@example.com',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-05T09:50:00Z',
    lastLogin: '2024-06-09T09:00:00Z',
    isEmailVerified: true,
    avatarUrl:
      'https://ui-avatars.com/api/?name=Olivia+Martinez&background=random&size=100',
  },
  {
    id: 8,
    name: 'Michael Davis',
    email: 'michael@example.com',
    role: 'manager',
    status: 'banned',
    createdAt: '2023-10-30T08:30:00Z',
    lastLogin: '2024-03-15T10:15:00Z',
    isEmailVerified: false,
    avatarUrl:
      'https://ui-avatars.com/api/?name=Michael+Davis&background=random&size=100',
  },
  {
    id: 9,
    name: 'Sophia Garcia',
    email: 'sophia@example.com',
    role: 'customer',
    status: 'active',
    createdAt: '2024-05-12T12:00:00Z',
    lastLogin: '2024-06-11T08:20:00Z',
    isEmailVerified: true,
    avatarUrl:
      'https://ui-avatars.com/api/?name=Sophia+Garcia&background=random&size=100',
  },
  {
    id: 10,
    name: 'William Anderson',
    email: 'william@example.com',
    role: 'admin',
    status: 'inactive',
    createdAt: '2024-03-18T07:40:00Z',
    lastLogin: null,
    isEmailVerified: false,
    avatarUrl:
      'https://ui-avatars.com/api/?name=William+Anderson&background=random&size=100',
  },
  {
    id: 11,
    name: 'Isabella Thomas',
    email: 'isabella@example.com',
    role: 'manager',
    status: 'active',
    createdAt: '2024-02-25T10:30:00Z',
    lastLogin: '2024-06-06T13:45:00Z',
    isEmailVerified: true,
    avatarUrl:
      'https://ui-avatars.com/api/?name=Isabella+Thomas&background=random&size=100',
  },
  {
    id: 12,
    name: 'Ethan Jackson',
    email: 'ethan@example.com',
    role: 'customer',
    status: 'banned',
    createdAt: '2023-11-20T11:55:00Z',
    lastLogin: null,
    isEmailVerified: false,
    avatarUrl:
      'https://ui-avatars.com/api/?name=Ethan+Jackson&background=random&size=100',
  },
  {
    id: 13,
    name: 'Mia White',
    email: 'mia@example.com',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-10T09:25:00Z',
    lastLogin: '2024-06-07T17:30:00Z',
    isEmailVerified: true,
    avatarUrl:
      'https://ui-avatars.com/api/?name=Mia+White&background=random&size=100',
  },
  {
    id: 14,
    name: 'Benjamin Harris',
    email: 'benjamin@example.com',
    role: 'customer',
    status: 'inactive',
    createdAt: '2024-02-08T14:00:00Z',
    lastLogin: null,
    isEmailVerified: false,
    avatarUrl:
      'https://ui-avatars.com/api/?name=Benjamin+Harris&background=random&size=100',
  },
  {
    id: 15,
    name: 'Charlotte Clark',
    email: 'charlotte@example.com',
    role: 'manager',
    status: 'active',
    createdAt: '2024-03-03T08:00:00Z',
    lastLogin: '2024-06-03T10:10:00Z',
    isEmailVerified: true,
    avatarUrl:
      'https://ui-avatars.com/api/?name=Charlotte+Clark&background=random&size=100',
  },
  {
    id: 16,
    name: 'Liam Lewis',
    email: 'liam@example.com',
    role: 'customer',
    status: 'active',
    createdAt: '2024-04-10T13:15:00Z',
    lastLogin: '2024-06-11T15:20:00Z',
    isEmailVerified: true,
    avatarUrl:
      'https://ui-avatars.com/api/?name=Liam+Lewis&background=random&size=100',
  },
  {
    id: 17,
    name: 'Amelia Robinson',
    email: 'amelia@example.com',
    role: 'admin',
    status: 'banned',
    createdAt: '2024-01-25T10:10:00Z',
    lastLogin: '2024-03-20T09:00:00Z',
    isEmailVerified: false,
    avatarUrl:
      'https://ui-avatars.com/api/?name=Amelia+Robinson&background=random&size=100',
  },
  {
    id: 18,
    name: 'Noah Walker',
    email: 'noah@example.com',
    role: 'customer',
    status: 'active',
    createdAt: '2024-02-15T15:30:00Z',
    lastLogin: '2024-06-10T08:45:00Z',
    isEmailVerified: true,
    avatarUrl:
      'https://ui-avatars.com/api/?name=Noah+Walker&background=random&size=100',
  },
  {
    id: 19,
    name: 'Ava Hall',
    email: 'ava@example.com',
    role: 'manager',
    status: 'inactive',
    createdAt: '2024-03-12T09:30:00Z',
    lastLogin: null,
    isEmailVerified: false,
    avatarUrl:
      'https://ui-avatars.com/api/?name=Ava+Hall&background=random&size=100',
  },
  {
    id: 20,
    name: 'Elijah Allen',
    email: 'elijah@example.com',
    role: 'admin',
    status: 'active',
    createdAt: '2024-04-05T12:45:00Z',
    lastLogin: '2024-06-12T11:10:00Z',
    isEmailVerified: true,
    avatarUrl:
      'https://ui-avatars.com/api/?name=Elijah+Allen&background=random&size=100',
  },
];
