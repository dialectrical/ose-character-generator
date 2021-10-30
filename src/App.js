import React, { useState } from "react";
import { Generator } from "./components/Generator";
import {
  StatDisplay,
  SavingThrowDisplay,
  CombatStatDisplay,
} from "./components/StatDisplay";
import { HeaderContainer } from "./components/styles/HeaderContainer";
import {
  HeaderObject,
  HeaderObjectSmall,
} from "./components/styles/HeaderObject";
import { StyledButton } from "./components/styles/StyledButton";

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
      {SavingThrowDisplay(character)}
      {CombatStatDisplay(character)}
      <div>
        <StyledButton onClick={() => setCharacter(Generator())}>Generate</StyledButton>
      </div>
    </div>
  );
};

export default App;