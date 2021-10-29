import React from "react";

export const StatDisplay = (character, hook) => {
  const pointBuy = (input) => {
    if (input) {
      character.increaseStat(0);
    } else {
      character.reduceStat(0);
    }
    return hook(character.pointBuy);
  };

  return (
    <div>
      <h4>Strength: {character.stats[0]}</h4>
      <div>
        <button onClick={() => pointBuy(1)}>+</button>{" "}
        <button onClick={() => pointBuy(0)}>-</button>
      </div>
      <div>Melee Bonus: {character.meleeBonus}</div>{" "}
      <div>{character.openDoors} in 6 chance to open doors</div>
    </div>
  );
};
