import { refs } from './getRefs';

export function createCountriesList(countries) {
  refs.listCountries.innerHTML = countries
    .map(
      ({ flags: { svg }, name: { official } }) => `      
      <li>
        <img src="${svg}" alt="country flag" width='32' height='32'>
        <p>${official}</p>
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
   <img src="${svg}" alt="country" width='32' height='32' >
    <p>${official}</p>
      <ul>
        <li>
          <p>Capital: ${capital}</p>
        </li>
        <li>
          <p>Population: ${population}</p>
        </li>
        <li>
          <p>Languages: ${Object.values(languages).join(', ')}</p>
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
