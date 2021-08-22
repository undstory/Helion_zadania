import drawContent from "./helpers/drawContent.js";
import sortTable from "./helpers/sortTable.js";

const tbody = document.querySelector("tbody");
const input = document.querySelector("input");
const button = document.querySelector("button");
const ths = [...document.querySelectorAll("thead th")];
const error1 = document.querySelector(".error1");
const error2 = document.querySelector(".error2");

let direction = true;

const filter = () => {
  const inputValue = input.value.toLowerCase();

  const trs = document.querySelectorAll("tbody tr");
  let flag = true;

  trs.forEach(function (tr) {
    const arr = [...tr.textContent.toLowerCase().split(/\s+/)];
    tr.style.display = "none";

    arr.forEach((el) => {
      if (el.includes(inputValue)) {
        tr.style.display = "";
        flag = false;
        return flag;
      }
    });
  });

  if (flag) {
    error1.style.display = "block";
  } else {
    error1.style.display = "none";
  }
};

input.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (input.value == "") {
    error2.style.display = "block";
    return false;
  }
  error2.style.display = "none";
  filter();
});

const sortBy = (e) => {
  let target = e.target;
  const trs = [...document.querySelectorAll("tbody tr")];
  let index = ths.indexOf(target);
  const df = document.createDocumentFragment();

  sortTable(direction, index, trs);
  direction = !direction;

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
    .then((json) => getList(json))
    .catch((error) => console.log("Błąd: ", error.message));
});
