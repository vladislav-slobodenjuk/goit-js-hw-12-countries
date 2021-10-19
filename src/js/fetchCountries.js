export default function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.com/v2/name/${searchQuery}`)
    .then(result => {
      if (!result.ok) {
        throw new Error(result.status);
      }
      return result.json();
    })
    .catch(error => console.log('fetch error:', error));
}

// console.dir(fetchCountries('peru'));
