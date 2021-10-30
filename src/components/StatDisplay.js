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
            <h3>Strength</h3>
            <h3>{character.stats[0]}</h3>
          </div>
        </AbilityScoreObject>
        <AbilityScoreObject>
          <div>
            <h3>Dexterity</h3>
            <h3>{character.stats[1]}</h3>
          </div>
        </AbilityScoreObject>
        <AbilityScoreObject>
          <div>
            <h3>Constitution</h3>
            <h3>{character.stats[2]}</h3>
          </div>
        </AbilityScoreObject>
        <AbilityScoreObject>
          <div>
            <h3>Intelligence</h3>
            <h3>{character.stats[3]}</h3>
          </div>
        </AbilityScoreObject>
        <AbilityScoreObject>
          <div>
            <h3>Wisdom</h3>
            <h3>{character.stats[4]}</h3>
          </div>
        </AbilityScoreObject>
        <AbilityScoreObject>
          <div>
            <h3>Charisma</h3>
            <h3>{character.stats[5]}</h3>
          </div>
        </AbilityScoreObject>
      </StatContainer>
    </AbilityScoreContainer>
  );
};
