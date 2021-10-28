import { CharacterClasses } from "./components/CharacterClasses";
import { CharacterSheet } from "./components/CharacterSheet";
import { StatRoller } from "./components/StatRoller";
import { ClassPicker } from "./components/ClassPicker";
import { AlignmentRoller } from "./components/AlignmentRoller";

export function App() {
  let stats = StatRoller();
  let characterClass = ClassPicker(stats, CharacterClasses);
  let character = new CharacterSheet(stats, AlignmentRoller(), characterClass);

  console.log(character);

  return (
    <div>
      <h2>{character.class}</h2>
      <h3>{character.alignment}</h3>
      <h3>
        {character.HP} / {character.HP} HP
      </h3>
      <div>Saving Throws</div>
      <div>
        {" "}
        D {character.savingThrows[0]} W {character.savingThrows[1]} P{" "}
        {character.savingThrows[2]} B {character.savingThrows[3]} S{" "}
        {character.savingThrows[4]}
      </div>
      <h4>Strength: {character.stats[0]}</h4>
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
}

console.log(App());
