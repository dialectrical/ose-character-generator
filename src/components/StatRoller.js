export const StatRoller = () => {
  let statArr = new Array(6);

  const roll3D6 = (times) => {
    let result = 0;
    for (let i = 0; i < times; i++) {
      result = Math.max(result, Math.floor(Math.random() * (18 - 3) + 3));
    }
    return result;
  };

  for (let i = 0; i < statArr.length; i++) {
    statArr[i] = roll3D6(3);
  }

  return statArr;
};
