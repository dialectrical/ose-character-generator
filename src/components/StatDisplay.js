import React from "react";
import {
  AbilityScoreContainer,
  StatContainer,
} from "./styles/AbilityScoreContainer";
import { AbilityScoreObject } from "./styles/AbilityScoreObject";

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
        <AbilityScoreObject>
          <div>
            <h3>Strength</h3> <h3>{character.stats[0]}</h3>
          </div>
        </AbilityScoreObject>
        <AbilityScoreObject>
          Dexterity <br /> {character.stats[1]}
        </AbilityScoreObject>
        <AbilityScoreObject>
          Constitution <br /> {character.stats[2]}
        </AbilityScoreObject>
        <AbilityScoreObject>
          Intelligence <br /> {character.stats[3]}
        </AbilityScoreObject>
        <AbilityScoreObject>
          Wisdom <br /> {character.stats[4]}
        </AbilityScoreObject>
        <AbilityScoreObject>
          Charisma <br /> {character.stats[5]}
        </AbilityScoreObject>
      </StatContainer>
    </AbilityScoreContainer>
  );
};
