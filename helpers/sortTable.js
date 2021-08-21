const sortTable = (dir, index, array) => {
    if (dir) {
        array.sort(function (a, b) {
          const tdA = a.children[index].textContent;
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