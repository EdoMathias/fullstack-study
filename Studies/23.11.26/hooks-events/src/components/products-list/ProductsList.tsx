interface ListProps {
  data: { id: string; title: string }[];
}

export const ProductsList = ({ data }: ListProps) => {
  return (
    <div>
      <ul>
        {data.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};
