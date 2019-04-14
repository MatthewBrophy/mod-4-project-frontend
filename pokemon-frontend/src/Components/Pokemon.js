import React from "react";

const Pokemon = props => {
  return (
    <div className="pokemon-card container">
      <div>
        <h4>{props.pokemon.name}</h4>
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
