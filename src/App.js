import { CharacterClasses } from "./components/CharacterClasses";
import { CharacterSheet } from "./components/CharacterSheet";
import { StatRoller } from "./components/StatRoller";

export function App() {
  let character = new CharacterSheet(
    StatRoller(),
    "Neutral",
    CharacterClasses[0]
  );

  console.log(character);

  return <div>hello world</div>;
}
console.log(CharacterClasses.length);
console.log(App());
