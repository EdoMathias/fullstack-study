const m1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const arrForList = ['item1', 'item2', 'item3'];

document.write(
  `<table border=1>
    <thead>
        <tr>
            <th>col1</th>
            <th>col2</th>
            <th>col3</th>
        </tr>
    </thead>
    <tbody>`
);

for (line of m1) {
  document.write(`<tr>`);
  for (data of line) {
    document.write(`<td>${data}</td>`);
  }
  document.write(`</tr>`);
}

document.write(
  `</tbody>
    </table>`
);

document.write(`<hr>`);

document.write(`<ul>`);
for (item of arrForList) {
  document.write(`<li>${item}</li>`);
}
document.write(`</ul>`);
