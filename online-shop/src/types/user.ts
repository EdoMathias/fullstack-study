export type User = {
  firstName: string;
  lastName: string;
  email?: string;
  password?: string;
};

export type SignedUser = {
  email: string;
  password: string;
};
