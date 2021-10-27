export const ClassPicker = (statArr, CharacterClasses) => {
  let validClass;

  while (!validClass) {
    let possibleClass =
      CharacterClasses[Math.floor(Math.random() * CharacterClasses.length)];
    for (let i = 0; i < statArr.length; i++) {
      if (statArr[i] < possibleClass.requirements[i]) {
        validClass = null;
        break;
      } else {
        validClass = possibleClass;
      }
    }
  }

  return validClass;
};
