import React from "react";

const Pokemon = props => {
  return (
    <div className="container" id="pokemon-card">
      <div>
        <p>{props.pokemon.name}</p>
        <img src={props.pokemon.front_img} alt="" />
        <p>
          HP: {props.pokemon.hp} <br /> Weight: {props.pokemon.weight}
        </p>
        {console.log(props.pokemon)}
      </div>
    </div>
  );
};

export default Pokemon;
