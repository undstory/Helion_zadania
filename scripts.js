import drawContent from "./helpers/drawContent.js";
import sortTable from "./helpers/sortTable.js";
const tbody = document.querySelector("tbody");
const input = document.querySelector("input");
const button = document.querySelector("button");
const ths = [...document.querySelectorAll("thead th")];

let direction = true;

const filter = () => {
    const inputValue = input.value;
   
    const trs = document.querySelectorAll("tbody tr");
    // for(let i=0; i < trs.length; i++) {
    //  const arr = [...trs[i].textContent.toLowerCase().split(/\s+/)]
    //  console.log(arr)
    //     if(arr.includes(inputValue)){
    //         console.log("Jest!")
            
    //         return 
    //     }
    // }
    trs.forEach(function(tr) {
        const arr = [...tr.textContent.toLowerCase().split(/\s+/)];
        if(arr.includes(inputValue)){
            tr.style.display = "";
            return 
        }
        tr.style.display = "none";
    })
}


input.addEventListener('change', filter);




const sortBy = (e) => {
  let target = e.target;
  const trs = [...document.querySelectorAll("tbody tr")];
  let index = ths.indexOf(target);
  const df = document.createDocumentFragment();

  sortTable(direction, index, trs)
  direction = !direction

  trs.forEach(function (tr) {
    df.appendChild(tr);
  });

  tbody.appendChild(df);
};

for (let i = 0; i < ths.length; i++) {
  ths[i].addEventListener("click", sortBy); // na kazdym elemencie th wywołaj funkcje sortBy, jest to zdarzenie więc można przechwycić event e
}

const drawTable = (books) => {
  tbody.textContent = "";
  books.forEach((book) => {
    tbody.appendChild(drawContent(book));
  });
};

const getList = (myData) => {
  const { books } = myData;

  drawTable(books);
};

button.addEventListener("click", function () {
  fetch("data.json")
    .then((res) => res.json())
    .then((json) => getList(json));
});
