import { refs } from './getRefs';

export function createCountriesList(countries) {
  refs.listCountries.innerHTML = countries
    .map(
      ({ flags: { svg }, name: { official } }) => `      
      <li class="js-countries-list">
        <img src="${svg}" alt="country flag" width='40' height='40'>
        <p class="countries-name">${official}</p>
      </li>`
    )
    .join('');
}

export function createCountryCard(country) {
  refs.cardCountry.innerHTML = country
    .map(
      ({
        flags: { svg },
        name: { official },
        capital,
        population,
        languages,
      }) => `    
      <div class="js-flag-container">
        <img src="${svg}" alt="country" width='40' height='40' >
        <p class="country-name">${official}</p>
      </div>   
      <ul class="js-country-list>
        <li>
          <p class="js-country-tags">Capital: <span class="js-counrty-information">${capital}</span></p>
        </li>
        <li>
          <p class="js-country-tags">Population: <span class="js-counrty-information">${population}</span></p>
        </li>
        <li>
          <p class="js-country-tags">Languages: <span class="js-counrty-information">${Object.values(
            languages
          ).join(', ')}</span></p>
        </li>
      </ul>`
    )
    .join('');
}
export function clearCountriesList() {
  refs.listCountries.innerHTML = '';
}
export function clearCountryCard() {
  refs.cardCountry.innerHTML = '';
}
