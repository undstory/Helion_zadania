import drawHeader from "./helpers/drawHeader.js";
import drawContent from "./helpers/drawContent.js";

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');
const button = document.querySelector('button');


const drawTable = (books) => {
    tbody.textContent = '';
    thead.textContent = '';
    thead.appendChild(drawHeader());
    books.forEach(book => {
        tbody.appendChild(drawContent(book))
    });
   
}



const getList = (data) => {
    const books = data;
    drawTable(books);
}



button.addEventListener('click', function(){
    fetch("data.json")
    .then(res => res.json())
    .then(json => getList(json))
})
