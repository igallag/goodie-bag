import React from 'react'

const Candy = (props) => {
    return (
        <div>
            <img src={props.imageUrl} />
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Candy