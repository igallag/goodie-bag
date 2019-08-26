import React from 'react';

const SingleCandy = props => {
  return (
    <div>
      <img src={props.imageUrl} />
      <div>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
};


export default SingleCandy
