import drawContent from "./helpers/drawContent.js";
import sortTable from "./helpers/sortTable.js";
const tbody = document.querySelector("tbody");
// const thead = document.querySelector('thead');
const button = document.querySelector("button");
const ths = [...document.querySelectorAll("thead th")];

let direction = true;

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
