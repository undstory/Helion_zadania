
const drawContent = (book) => {
  const { id, ident, tytul, liczba_stron, data_wydania } = book;
  const tr = document.createElement("tr");
 
  tr.innerHTML = `
  		<td>${id}</td>
          <td>${ident}</td>
          <td>${tytul}</td>
          <td>${liczba_stron}</td>
          <td>${data_wydania}</td>
  `;

  return tr;
}
export default drawContent;