import React from 'react';

const PokeCard = ({ name, url }) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={url} alt={url} />
    </div>
  );
};

export default PokeCard;
