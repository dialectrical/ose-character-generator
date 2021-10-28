import { CharacterClasses } from "./CharacterClasses";
import { CharacterSheet } from "./CharacterSheet";
import { StatRoller } from "./StatRoller";
import { ClassPicker } from "./ClassPicker";
import { AlignmentRoller } from "./AlignmentRoller";

export const Generator = () => {
  let stats = StatRoller();
  let characterClass = ClassPicker(stats, CharacterClasses);
  let character = new CharacterSheet(stats, AlignmentRoller(), characterClass);

  return character;
};
