import { CharacterClasses } from "./components/CharacterClasses";
import { CharacterSheet } from "./components/CharacterSheet";
import { StatRoller } from "./components/StatRoller";
import { ClassPicker } from "./components/ClassPicker";
import { AlignmentRoller } from "./components/AlignmentRoller";

export const Generator = () => {
  let stats = StatRoller();
  let characterClass = ClassPicker(stats, CharacterClasses);
  let character = new CharacterSheet(stats, AlignmentRoller(), characterClass);
};
