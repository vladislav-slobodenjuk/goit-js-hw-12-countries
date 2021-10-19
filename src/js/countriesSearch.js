import fetchCountries from './fetchCountries';
import countriesList from '../templates/countriesList.handlebars'; // шаблон списка
// шаблон страны

import { alert, notice, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

const debounce = require('lodash.debounce');

// // Manually set the type.
// const myAlert = alert({
//   text: "I'm an alert.",
//   type: 'info'
// });

// // Automatically set the type.
// const myNotice = notice({
//   text: "I'm a notice."
// });

const searchInput = document.getElementById('countries-input-js');
const searchOutput = document.getElementById('countries-result-js');
console.log(searchOutput);

searchInput.addEventListener(
  'input',
  debounce(e => {
    if (e.target.value.length > 0) {
      console.log(fetchCountries(e.target.value));

      fetchCountries(e.target.value)
        .then(result => {
          console.log(countriesList(result));
          const mk = countriesList(result);
          searchOutput.innerHTML(mk);
        })
        .catch(err => {});
    }
  }, 1500), // должно быть 500
);
