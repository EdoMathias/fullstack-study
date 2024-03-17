import UserModel from '../Models/UserModel';

function useUserLetters(user: UserModel) {
  const firstLetter = user.firstName.charAt(0).toUpperCase();
  const lastLetter = user.lastName.charAt(0).toUpperCase();
  return firstLetter + lastLetter;
}

export default useUserLetters;
