import { apiRequest } from './client';
import type { CreateUserRequest, User } from '../types/user.types';

export function createUser(data: CreateUserRequest) {
  return apiRequest<User>('/users', { method: 'POST', body: data });
}
