import React from "react";
import {
  AbilityScoreContainer,
  AbilityScoreContainerSmall,
  StatContainer,
} from "./styles/AbilityScoreContainer";
import {
  AbilityScoreObject,
  AbilityScoreObjectSmall,
} from "./styles/AbilityScoreObject";

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

export const SavingThrowDisplay = (character) => {
  return (
    <AbilityScoreContainerSmall>
      <h3>Saving Throws</h3>
      <StatContainer>
        <AbilityScoreObjectSmall>
          <div>
            <h3>Death</h3>
            <h3>{character.savingThrows[0]}</h3>
          </div>
        </AbilityScoreObjectSmall>
        <AbilityScoreObjectSmall>
          <div>
            <h3>Wands</h3>
            <h3>{character.savingThrows[1]}</h3>
          </div>
        </AbilityScoreObjectSmall>
        <AbilityScoreObjectSmall>
          <div>
            <h3>Petrify</h3>
            <h3>{character.savingThrows[2]}</h3>
          </div>
        </AbilityScoreObjectSmall>
        <AbilityScoreObjectSmall>
          <div>
            <h3>Breath</h3>
            <h3>{character.savingThrows[3]}</h3>
          </div>
        </AbilityScoreObjectSmall>
        <AbilityScoreObjectSmall>
          <div>
            <h3>Spells</h3>
            <h3>{character.savingThrows[4]}</h3>
          </div>
        </AbilityScoreObjectSmall>
      </StatContainer>
    </AbilityScoreContainerSmall>
  );
};

export const CombatStatDisplay = (character) => {
  return (
    <AbilityScoreContainerSmall>
      <h3>Combat</h3>
      <StatContainer>
        <AbilityScoreObjectSmall>
          <div>
            <h3>Melee</h3>
            <h3>{character.meleeTHAC0}</h3>
          </div>
        </AbilityScoreObjectSmall>
        <AbilityScoreObjectSmall>
          <div>
            <h3>Ranged</h3>
            <h3>{character.rangedTHAC0}</h3>
          </div>
        </AbilityScoreObjectSmall>
        <AbilityScoreObjectSmall>
          <div>
            <h3>AC</h3>
            <h3>{10 - character.acBonus}</h3>
          </div>
        </AbilityScoreObjectSmall>
      </StatContainer>
    </AbilityScoreContainerSmall>
  );
};
