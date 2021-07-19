const namuRezultatasDOM = document.querySelector('[data-komanda="namu"]');
const sveciuRezultatasDOM = document.querySelector('[data-komanda="sveciu"]');
const aiksteleDOM = document.querySelector('.aikstele');
const aiskteleNamuDOM = aiksteleDOM.querySelector('[data-komanda="namu"]');
const aiksteleSveciuDOM = aiksteleDOM.querySelector('[data-komanda="sveciu"]');
const taskaiNamuDOM = aiskteleNamuDOM.querySelectorAll('[type="button"]');
const taskaiSveciuDOm = aiksteleSveciuDOM.querySelectorAll('[type="button"]');

// console.log(namuRezultatasDOM);
// console.log(sveciuRezultatasDOM);
// console.log(aiksteleDOM);
// console.log(aiskteleNamuDOM);
// console.log(aiksteleSveciuDOM);
// console.log(taskaiNamuDOM);

let namuRezultatas = 0;


// function namuTaskai () {
//     for (let i = 0; i < taskaiNamuDOM.length; i++) {
//         namuRezultatas += i;
//         namuRezultatasDOM.innerText = namuRezultatas;
//     }
// }
// taskaiNamuDOM[i].addEventListener('click', namuTaskai);

for (let i = 0; i < taskaiNamuDOM.length; i++) {
    taskaiNamuDOM[i].addEventListener('click', function namuTaskai() {
        namuRezultatas += i + 1;
        namuRezultatasDOM.innerText = namuRezultatas;
    })
}

let sveciuRezultatas = 0;

for (let i = 0; i < taskaiSveciuDOm.length; i++) {
    taskaiSveciuDOm[i].addEventListener('click', function sveciuTaskai() {
        sveciuRezultatas += i + 1;
        sveciuRezultatasDOM.innerText = sveciuRezultatas;
    })
}



