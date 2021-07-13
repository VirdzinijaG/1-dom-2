const labelDOM = document.querySelector('label');
const inputDOM = document.querySelector('input');
const buttonDOM = document.querySelector('button');
const spanDOM = document.querySelector('span');

function submitClick(event) {
    event.preventDefault(); // neperkrauna puslapio paspaudus submit
    spanDOM.innerText = inputDOM.value;
    inputDOM.value = ''
}


buttonDOM.addEventListener('click', submitClick) ;
