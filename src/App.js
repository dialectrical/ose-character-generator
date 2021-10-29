import React, { useState } from "react";
import { Generator } from "./components/Generator";
import { StatDisplay } from "./components/StatDisplay";

export const App = () => {
  const [character, setCharacter] = useState(Generator());
  const [pointBuy, setPointBuy] = useState(0);

  return (
    <div>
      <h2>{character.class}</h2>
      <h3>{character.alignment}</h3>
      <h3>
        {character.HP} / {character.HP} HP
      </h3>
      <h3>{character.xpBonus}% bonus experience</h3>
      <div>Saving Throws</div>
      <div>
        {" "}
        D {character.savingThrows[0]} W {character.savingThrows[1]} P{" "}
        {character.savingThrows[2]} B {character.savingThrows[3]} S{" "}
        {character.savingThrows[4]}
      </div>
      {StatDisplay(character, setPointBuy)}
      <div>
        <button onClick={() => setCharacter(Generator())}>Generate</button>
      </div>
    </div>
  );
};
