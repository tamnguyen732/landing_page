export interface Employee {
  readonly id: string;
  firstName: string;
  lastName: string;
  occupation: 'student' | 'graduate' | 'working';
  position: string;
  resume: string;
  avatar: string;
  createdAt: string;
  experience?: number;
}
