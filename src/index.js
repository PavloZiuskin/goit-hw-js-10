import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix';
import { refs } from './js/helpers/getRefs';
import {
  createCountriesList,
  clearCountryCard,
  clearCountriesList,
  createCountryCard,
} from './js/helpers/renderFunction';

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));
function onInputSearch(e) {
  const inputValue = e.target.value.trim();

  if (!inputValue) {
    //   delete Cantries and countryCard
    clearCountriesList();
    clearCountryCard();
    return;
  }

  fetchCountries(inputValue)
    .then(data => {
      if (data.length > 10) {
        clearCountriesList();
        clearCountryCard();
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
      if (data.length >= 2 && data.length <= 10) {
        clearCountryCard();
        createCountriesList(data);
      }
      if (data.length === 1) {
        clearCountriesList();
        createCountryCard(data);
      }
    })
    .catch(err => {
      clearCountriesList();
      clearCountryCard();
      Notify.failure(`Oops, there is no country with that name ${err}`);
    });
}
