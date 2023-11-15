import User from './User';
import { UserType } from './types';

interface TableProps {
  headers: string[];
  data: UserType[];
}

export const Table = ({ headers, data }: TableProps) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {headers.map((user) => (
                <td key={user}>{row[user as keyof UserType]}</td>
              ))}
              {/* <td>{person.name}</td>
              <td>{person.email}</td>
              <td>{person.age}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
