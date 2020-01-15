export const urlBase = `https://pokeapi.co/api/v2/pokemon`;
export const fetchPokemon = limit => {
  const callApi = (limit = 999) => {
    try {
      fetch(urlBase + `?limit=${limit}`).then(res => res.json());
    } catch (error) {
      console.error('error callApi', error);
    }
  };
  callApi(limit);
};
export default fetchPokemon;
