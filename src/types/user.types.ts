export interface CreateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  profile_picture?: string | null;
}

export interface User {}
