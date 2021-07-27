function generuotiLenta(selector, skaicius) {
    const lenta = document.querySelector(selector);
    if (skaicius < 0 || skaicius % 1 !== 0) {
      console.error('ERROR: Priimamas skaicius gali buti tik teigiamas sveikasis skaicius (jokiu begalybiu)');
      return false;
    }
  
    let HTML = '';
    for (let i = 1; i <= skaicius; i++) {
        console.log(i);
      HTML += `<div>${i}</div>`;
    }
    lenta.innerHTML = HTML;
  }
  
  generuotiLenta('div', 5);
  generuotiLenta('div', -5);
  generuotiLenta('div', 98);