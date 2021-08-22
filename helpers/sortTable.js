const sortTable = (dir, index, array) => { // sortowanie w zależności od kierunku 
    if (dir) {
        array.sort(function (a, b) {
          const tdA = a.children[index].textContent; // zawartość "dzieci" w komórce td tabeli  
          const tdB = b.children[index].textContent;
    
         return  tdA<tdB ? -1 : tdA>tdB ? 1 : 0
        });
      } else {
        array.sort(function (a, b) {
          const tdA = a.children[index].textContent;
          const tdB = b.children[index].textContent;
     
          return tdA>tdB ? -1 : tdA<tdB ? 1 : 0
        });
      }
}

export default sortTable;