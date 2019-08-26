import React from 'react';

const Candy = props => {
  return (
    <div className="candy-list" onClick={() => props()}>
      <a>
        <img className="candy-img" src={props.imageUrl} />
        <h1 className="candy-name">{props.name}</h1>
        <p className="candy-description">{props.description}</p>
      </a>
    </div>
  );
};

export default Candy;
