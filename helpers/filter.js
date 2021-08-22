const filter = (query, array) => {
 
  let flag = true; // flaga wskazująca konieczność (lub nie) wywołania alertu o błędzie 

  array.forEach(function (row) { // array zawiera wszystkie rzędy 
    const arr = [...row.textContent.toLowerCase().split(/\s+/)];  // zbieram zawartość rzędu i upraszczam 
    row.style.display = "none"; 

    arr.forEach((el) => {  // szukanie frazy
      if (el.includes(query)) {
        row.style.display = "";
        flag = false;
        return flag;
      }
    });
  });

  if (flag) {
    document.querySelector(".error1").style.display = "block";
  } else {
    document.querySelector(".error1").style.display = "none";
  }
};

export default filter;
