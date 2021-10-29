import React from "react";
import {
  AbilityScoreContainer,
  StatContainer,
} from "./styles/AbilityScoreContainer";

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
    <AbilityScoreContainer>
      <h3>Ability Scores</h3>
      <StatContainer>
        <div>
          Strength <br /> {character.stats[0]}
        </div>
        <div>
          Dexterity <br /> {character.stats[1]}
        </div>
        <div>
          Constitution <br /> {character.stats[2]}
        </div>
        <div>
          Intelligence <br /> {character.stats[3]}
        </div>
        <div>
          Wisdom <br /> {character.stats[4]}
        </div>
        <div>
          Charisma <br /> {character.stats[5]}
        </div>
      </StatContainer>
    </AbilityScoreContainer>
  );
};
