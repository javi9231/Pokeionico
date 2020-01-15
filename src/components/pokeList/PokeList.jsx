import React, { useEffect, useState } from 'react';
import PokeCard from '../pokeCard';
// import fetchPokemon from '../../api/pokemon';

const PokeList = () => {
  // const listPok = fetchPokemon();
  // console.log('listPok: ', listPok);
  const initialState = [
    { name: 'as', url: 'https://pokeapi.co/api/v2/pokemon/1/' }
  ];

  const [listPok, setListPok] = useState(initialState);

  useEffect(() => {
    const fetchCall = () => {
      const urlBase = `https://pokeapi.co/api/v2/pokemon`;
      const callApi = (limit = 999) => {
        try {
          fetch(urlBase + `?limit=${limit}`)
            .then(res => res.json())
            .then(res => setListPok(res.results));
        } catch (error) {
          console.error('error callApi', error);
        }
      };
      callApi();
      // let res = fetchPokemon();
      // console.log('useEffect res: ', res);

      // setListPok(res);
    };
    fetchCall();
  }, []);

  useEffect(() => {
    console.log('listPok: ', listPok);
  }, [listPok]);

  return (
    <div>
      {listPok.map(element => (
        <div>
          <PokeCard name={element.name} url={element.url} />
        </div>
      ))}
    </div>
  );
};

export default PokeList;
