import React, { useEffect, useState } from "react";

const PokeCard = ({ name, url }) => {
  const initialState = [
    {
      sprites: {
        front_default: "aa"
      }
    }
  ];
  const [caracter, setCaracter] = useState(initialState);

  useEffect(() => {
    const callApi = () => {
      try {
        fetch(url)
          .then(res => res.json())
          .then(res => {
            console.log("caracter ", res.sprites.back_default);
            setCaracter(res.sprites.front_default);
          });
      } catch (error) {
        console.error("error callApi", error);
      }
    };
    callApi();
  }, [url]);

  useEffect(() => {
    console.log("caracter: ", caracter);
  }, [caracter]);
  // caracter.sprites.front_default
  return (
    <div className="pokeCard">
      <img src={caracter} alt={caracter}></img>
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default PokeCard;
