//statArr= [str, dex, con, int, wis, cha]

export function CharacterSheet(statArr, alignment, charClass) {
  this.stats = statArr;
  this.alignment = alignment;
  this.class = charClass.name;
  this.savingThrows = charClass.savingThrows;
  this.pointBuy = 0;

  this.reduceStat = (stat) => {
    if (stat >= 11) {
      pointBuy++;
      return (stat -= 2);
    }
    return undefined;
  };

  this.increaseStat = (stat) => {
    if (pointBuy) {
      pointBuy--;
      return stat++;
    }
    return undefined;
  };

  this.getBonus = function (stat, bonusMod) {
    let statBonus = 0;
    if (stat === 3) {
      statBonus = -3;
    } else if (stat <= 5) {
      statBonus = -2;
    } else if (stat <= 8) {
      statBonus = -1;
    } else if (stat <= 12) {
      this.statBonus = 0;
    } else if (stat <= 15) {
      statBonus = 1;
    } else if (stat <= 17) {
      statBonus = 2;
    } else {
      statBonus = 3;
    }
    return statBonus + bonusMod;
  };

  this.getXPBonus = () => {
    let workingBonus = 0;
    for (let i = 0; i < statArr.length; i++) {
      if (charClass.requisite[i] === 1) {
        if (statArr[i] <= 5) {
          workingBonus -= 20;
        } else if (statArr[i] <= 8) {
          workingBonus -= 10;
        } else if (12 < statArr[i] && statArr[i] <= 15) {
          workingbonus += 5;
        } else {
          workingbonus += 10;
        }
      }
    }
    return workingBonus;
  };

  this.meleeBonus = this.getBonus(this.stats[0], 0, 0);
  this.openDoors = Math.max(1, this.getBonus(this.stats[0], 0, -1));
  this.acBonus = this.getBonus(this.stats[1], 0, 0);
  this.rangedBonus = this.getBonus(this.stats[1], 0, 0);
  this.hpBonus = this.getBonus(this.stats[2], 0, 0);
  this.magicSavesBonus = this.getBonus(this.stats[4], 0, 0);
  this.HP =
    Math.max(1, Math.floor(Math.random() * (charClass.hitDie - 1) + 1)) +
    Math.max(0, this.hpBonus);
  this.meleeTHAC0 = charClass.baseTHAC0 - this.meleeBonus;
  this.rangedTHAC0 = charClass.baseTHAC0 - this.rangedBonus;
  this.xpBonus = this.getXPBonus();
}
