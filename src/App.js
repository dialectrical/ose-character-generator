import { CharacterClasses } from "./components/CharacterClasses";
import { CharacterSheet } from "./components/CharacterSheet";
import { StatRoller } from "./components/StatRoller";
import { ClassPicker } from "./components/ClassPicker";

export function App() {
  let stats = StatRoller();
  let characterClass = ClassPicker(stats, CharacterClasses);
  let character = new CharacterSheet(stats, "Neutral", characterClass);

  console.log(character);

  return (
    <div>
      <h2>{character.class}</h2>
      <h3>{character.alignment}</h3>
      <h3>
        {character.HP} / {character.HP} HP
      </h3>
      <h4>Strength: {character.stats[0]}</h4>
      <h4>Strength: {character.stats[1]}</h4>
      <h4>Strength: {character.stats[2]}</h4>
      <h4>Strength: {character.stats[3]}</h4>
      <h4>Strength: {character.stats[4]}</h4>
      <h4>Strength: {character.stats[5]}</h4>
    </div>
  );
}

console.log(App());
