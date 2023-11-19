import { Product } from './types';

interface TableProps {
  headers: string[];
  data: Product[];
}

export const Table = ({ headers, data }: TableProps) => {
  console.log(headers);
  console.log(data);

  return (
    <main>
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
              <tr key={row.productId}>
                {headers.map((user) => (
                  <td key={user}>{row[user as keyof Product]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};
