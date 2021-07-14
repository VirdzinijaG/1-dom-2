const klientasDOM = document.querySelector('#customer');
const sriubaDOM = document.querySelector('sriuba');
const patiekalasDOM = document.querySelector('patiekalas');
const desertasDOM = document.querySelector('desertas');
const gerimasDOM = document.querySelectorAll('input[name="gerimas"]');
const buttonDOM = document.querySelector('button');
const uzsakymasDOM = document.querySelector('.order');

console.log(gerimasDOM);

function pasirinkimas(pazymeta) {
    if (pazymeta.checked) { // checked - checkbox tikrinimas
        return 'Nori: ';
    }
    return 'Nenori:'
}

function gerimoPasirnkimas() {
    for (let i = 0; i < gerimasDOM.length; i++) {
        if (gerimasDOM[i].checked === true)
        return gerimasDOM[i].value + ' pasirinktas gerimas';
    }
    // if (gerimasDOM[i].checked === false)
        return 'Gerimas nepasirinktas'
}

function klientas() {
    if (klientasDOM.value === '') {
        return Math.floor(Math.random() * 10) + ' klientas';
    } 
        return 'Klientas vardu: ' + klientasDOM.value;
}



function submitClick(event) {
    event.preventDefault(); // puslapio neperkrauna paspaudus submit
    uzsakymasDOM.innerText = ` ${klientas(klientasDOM)},  ${pasirinkimas(sriuba)} sriubos, ${pasirinkimas(patiekalas)} pagrindinio patiekalo,
    ${pasirinkimas(desertas)} deserto, ${gerimoPasirnkimas(gerimasDOM)}`;
    klientasDOM.value = '';
}

buttonDOM.addEventListener('click', submitClick);