import { CharacterClasses } from "./components/CharacterClasses";
import { CharacterSheet } from "./components/CharacterSheet";
import { StatRoller } from "./components/StatRoller";
import { ClassPicker } from "./components/ClassPicker";

export function App() {
  let stats = StatRoller();
  let characterClass = ClassPicker(stats, CharacterClasses);
  let character = new CharacterSheet(stats, "Neutral", characterClass);

  console.log(character);

  return <div>hello world</div>;
}

console.log(App());
