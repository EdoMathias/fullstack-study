type UserProps = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
};

export default function User({ firstName, lastName, email, age }: UserProps) {
  return (
    <div>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
}
