const inputMessageDOM = document.querySelector('input');
const buttonDOM = document.querySelector('button');
const spanDOM = document.querySelector('span');
const bgColorDOM = document.querySelector('#bg-color'); // elementas surastas pagal id 
const textColorDOM = document.querySelector('#text-color');

inputMessageDOM.style.backgroundColor = "red"; // uzdedama spalva input laukelyje

function submitClick(event) {
    event.preventDefault(); // neperkrauna puslapio paspaudus submit
    spanDOM.innerText = inputMessageDOM.value;
    inputMessageDOM.value = '';
    spanDOM.style.backgroundColor = bgColorDOM.value;
    spanDOM.style.color = textColorDOM.value;
}


buttonDOM.addEventListener('click', submitClick) ;