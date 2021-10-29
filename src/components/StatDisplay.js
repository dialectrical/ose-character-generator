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
        {character.stats[0] >= 11 ? (
          <button onClick={() => pointBuy(0)}>-</button>
        ) : (
          ""
        )}
      </div>
      <div>Melee Bonus: {character.meleeBonus}</div>{" "}
      <div>{character.openDoors} in 6 chance to open doors</div>
      <h4>Dexterity: {character.stats[1]}</h4>
      <div>Ranged Bonus: {character.rangedBonus}</div>
      <div>AC bonus: {character.acBonus}</div>
      <h4>Constitution: {character.stats[2]}</h4>
      <div>HP Bonus: {character.hpBonus}</div>
      <h4>Intelligence: {character.stats[3]}</h4>
      <h4>Wisdom: {character.stats[4]}</h4>
      <div>Save against Magic Bonus: {character.magicSavesBonus}</div>
      <h4>Charisma: {character.stats[5]}</h4>
    </div>
  );
};
