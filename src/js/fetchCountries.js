export function fetchCountries(name) {
  const API_URL = 'https://restcountries.com/v3.1/name/';
  const SEARCH_PARAMETERS = '?fields=name,capital,population,flags,languages';
  return fetch(`${API_URL}${name}${SEARCH_PARAMETERS}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.status);
    }
    return resp.json();
  });
}
