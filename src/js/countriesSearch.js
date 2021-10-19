import fetchCountries from './fetchCountries';
import makeCountriesList from '../templates/countriesList.handlebars'; // шаблон списка
import makeSingleCountry from '../templates/country.handlebars'; // шаблон страны

import { alert, notice, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

import debounce from 'lodash.debounce';

// // Automatically set the type.
// const myNotice = notice({
//   text: "I'm a notice."
// });

const searchInput = document.getElementById('countries-input-js');
const searchOutput = document.getElementById('countries-result-js');

searchInput.addEventListener(
  'input',
  debounce(e => {
    if (e.target.value.length > 0) {
      console.log(fetchCountries(e.target.value));

      searchOutput.innerHTML = ''; // очищает вывод при повторном поииске
      fetchCountries(e.target.value)
        .then(result => addSearchResult(result))
        .catch(err => {
          console.log(err);
        });
    }
  }, 1500), // должно быть 500
);

function addSearchResult(countries) {
  if (countries.length > 10) {
    error({
      text: 'Too many matches. Please enter a more specific querry',
    });
  } else if (countries.length >= 2 && countries.length <= 10) {
    const listMarkup = makeCountriesList(countries);
    // console.log(listMarkup);
    searchOutput.innerHTML = listMarkup;
  } else if (countries.length === 1) {
    const countryMarkup = makeSingleCountry(countries);
    searchOutput.innerHTML = countryMarkup;
  }
}
