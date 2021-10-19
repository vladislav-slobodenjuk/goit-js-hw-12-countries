// import '@pnotify/core/dist/BrightTheme.css';
// куда-то вставить импорт стилей pnotify

export default function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.com/v2/name/${searchQuery}`)
    .then(result => {
      // if (result.status === 404) {
      //   throw new Error(result.status);
      // }
      if (!result.ok) {
        throw new Error(result.status);
      }
      return result.json();
    })
    .catch(error => console.log('fetch error:', error));
}

// console.dir(fetchCountries('peru'));
