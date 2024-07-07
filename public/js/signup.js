/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alert.js';
export const signup = async (
  name,
  email,
  password,
  passwordConfirmation,
  role = 'user',
) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirmation,
        role, // přidání role do dat odesílaných na server
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Registered successfully! Logging you in...');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
