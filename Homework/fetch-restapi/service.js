'use strict';

const service = (() => {
  const baseUrl = 'https://fakestoreapi.com';

  async function getAllUsers() {
    const response = await fetch(`${baseUrl}/users`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error('Failed to fetch Users');
  }

  async function deleteUser(userId) {
    const response = await fetch(`${baseUrl}/users/${userId}`, {
      method: 'DELETE',
    });
  }

  async function getUserInfo(userId) {
    const response = await fetch(`${baseUrl}/users/${userId}`);
  }

  return {
    getAllUsers,
  };
})();
