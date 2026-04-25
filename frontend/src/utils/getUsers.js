import { fetchUsers } from '../api/user';

export const getUsersData = async () => {
  try {
    const users = await fetchUsers();
    return users;
  } catch (error) {
    console.error('Failed to get users:', error);
    return [];
  }
};