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
      {/*{" "}
      <div>
<<<<<<< HEAD
        <button onClick={() => setCharacter(Generator())}>Generate</button>
        <button onclick={() => setStorage(character)}>Save</button>
      </div>{" "}
      */}
=======
        <StyledButton onClick={() => setCharacter(Generator())}>Generate</StyledButton>
        <StyledButton onClick={() => setStorage(character)}>Save</StyledButton>
        <StyledButton onClick={() => setCharacter(storage)}>Recover</StyledButton>
      </div>
>>>>>>> 069624c0d457593ee25903d0fcdbff74738f3a7a
    </div>
  );
};

export default App;