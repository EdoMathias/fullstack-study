interface ListProps {
  data: string[];
  title: string;
}

export const List = ({ data, title }: ListProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
