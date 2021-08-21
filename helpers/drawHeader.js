const drawHeader = () => {
    const trHeader = document.createElement("tr");
    trHeader.innerHTML = `
      <th>Id</th>
      <th>Ident</th>
      <th>Tytul</th>
      <th>Liczba stron</th>
      <th>Data wydania</th>
    `
    return trHeader;
  }
  
  export default drawHeader;
  