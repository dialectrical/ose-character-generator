import React, { useState } from "react";
import { Generator } from "./components/Generator";
import { StatDisplay, DerivedStatDisplay } from "./components/StatDisplay";
import { HeaderContainer } from "./components/styles/HeaderContainer";
import {
  HeaderObject,
  HeaderObjectSmall,
} from "./components/styles/HeaderObject";

export const App = () => {
  const [character, setCharacter] = useState(Generator());
  const [pointBuy, setPointBuy] = useState(0);
  const [storage, setStorage] = useState();

  return (
    <div>
      <HeaderContainer>
        <HeaderObject>{character.class.name}</HeaderObject>
        <HeaderObjectSmall>
          {character.HP} / {character.HP} HP
        </HeaderObjectSmall>
        <HeaderObjectSmall>{character.alignment}</HeaderObjectSmall>
      </HeaderContainer>
      {StatDisplay(character, setPointBuy)}
      {DerivedStatDisplay(character)}
      <div>
        <button onClick={() => setCharacter(Generator())}>Generate</button>
        <button onclick={() => setStorage(character)}>Save</button>
      </div>
    </div>
  );
};
