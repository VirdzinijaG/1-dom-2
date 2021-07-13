let rezultatas = 0;

const minusDOM = document.querySelector(".minus");
const plusDOM = document.querySelector(".plus");
const numberDOM = document.querySelector(".number");
const resetDOM = document.querySelector(".reset");
const ulDOM = document.querySelector('ul');

ulDOM.innerHTML = "Tu pasileidai zaidima - sekmes!";

function minusClick() {
    numberDOM.innerText = --rezultatas;
    ulDOM.innerHTML = "Paspaudei minusa ir dabartinis rezultatas yra " + rezultatas;
}

function plusCick() {
    numberDOM.innerText = ++rezultatas;
    ulDOM.innerHTML = "Paspaudei pliusa ir dabartinis rezultatas yra " + rezultatas;
}

function resetClick() {
    rezultatas = 0;
    numberDOM.innerText = rezultatas;
    ulDOM.innerHTML = "Paspaudei reset ir dabartinis rezultatas yra " + rezultatas;
}

minusDOM.addEventListener('click', minusClick);
plusDOM.addEventListener('click', plusCick);
resetDOM.addEventListener('click', resetClick);