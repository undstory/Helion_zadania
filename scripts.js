import drawContent from "./helpers/drawContent.js";
import sortTable from "./helpers/sortTable.js";
import filter from "./helpers/filter.js";

const tbody = document.querySelector("tbody");
const input = document.querySelector("input");
const button = document.querySelector("button");
const ths = [...document.querySelectorAll("thead th")];
const error2 = document.querySelector(".error2");

let direction = true;

input.addEventListener("keyup", (e) => {
  e.preventDefault();
  const inputValue = input.value.toLowerCase();
  const trs = [...document.querySelectorAll("tbody tr")];
  if (inputValue == "") {
    error2.style.display = "block";
    return false;
  }
  error2.style.display = "none";
  filter(inputValue, trs);
});

const sortBy = (e) => {
  let target = e.target;
  const trs = [...document.querySelectorAll("tbody tr")];
  let index = ths.indexOf(target); // indeks klikniętego elementu th tabeli
  const df = document.createDocumentFragment();

  sortTable(direction, index, trs);
  direction = !direction; // odwracamy kierunek sortowania 

  trs.forEach(function (tr) {
    df.appendChild(tr);
  });

  tbody.appendChild(df);
};

for (let i = 0; i < ths.length; i++) {
  ths[i].addEventListener("click", sortBy); // na każdym elemencie th wywołuję funkcję sortBy
}


const drawTable = (myData) => {
  const { books } = myData;  // destrukturyzacja wyciąga potrzebne dane z pliku json

  books.forEach((book) => {
    tbody.appendChild(drawContent(book)); // do każdego obiektu funkcja drawContent z helpers rysuje rząd tabeli
  });
  button.setAttribute('disabled', 'disabled')
};

button.addEventListener("click", function () { // funkcja fetch pobiera dane z pliku json
  fetch("data.json")
    .then((res) => res.json())
    .then((json) => drawTable(json))
    .catch((error) => console.log("Błąd: ", error.message));
});
