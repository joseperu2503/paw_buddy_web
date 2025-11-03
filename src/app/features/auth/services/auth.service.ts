import api from '@src/app/core/network/api';
import { SignUpRequest } from '../interfaces/sign-up-request';

export const signUp = (data: SignUpRequest) => {
  return api.post('/auth/register', {
    ...data,
    phone: null,
    type: 'email',
  });
};
