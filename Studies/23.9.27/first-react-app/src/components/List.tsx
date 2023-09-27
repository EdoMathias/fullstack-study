export function List() {
  const list = ['aa', 'bb', 'cc'];
  return (
    <ul>
      {list.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}
