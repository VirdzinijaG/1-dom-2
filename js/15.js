function generuotiSocials(selector, iconsList) {
    // validation
    if (typeof selector !== 'string' || selector === '') {
      console.error(
        'ERROR: selector turi buti ne tuscias stringas',
        selector,
        iconsList
      );
      return false;
    }
  
    const DOM = document.querySelector(selector);
    if (!DOM) {
      console.error(
        'ERROR: pagal pateikta selector nepavyko rasti jokio DOM elemento'
      );
      return false;
    }
  
    if (!Array.isArray(iconsList) || iconsList.length === 0) {
      console.error('ERROR: iconsList turi buti ne tuscias array');
      return false;
    }
  
    // logic
    let HTML = '';
    const availableIcons = [
      'facebook',
      'twitter',
      'linkedin',
      'instagram',
      'pinterest',
      'amazon'
    ];
  
    for (const icon of iconsList) {
      if (
        typeof icon === 'string' &&
        icon !== '' &&
        availableIcons.includes(icon)
      ) {
        HTML += `<i class="fa fa-${icon}"></i>`;
      }
    }
  
    // post-logic validation
    if (HTML === '') {
      console.error(
        'ERROR: iconsList turi tureti bent viena elementa kuris buti ne tuscias tekstas'
      );
      return false;
    }
  
    // result return
    DOM.innerHTML = HTML;
  }
  
  const icons = ['facebook', 'instagram', 'twitter', 'linkedin', 'pinterest', 'amazon'];
  
  generuotiSocials('.socials', icons);
  