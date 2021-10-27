//statArr= [str, dex, con, int, wis, cha]

export function CharacterSheet(statArr, alignment, charClass) {
  this.stats = statArr;
  this.alignment = alignment;
  this.class = charClass.name;
  this.savingThrows = charClass.savingThrows;

  this.getBonus = function (stat, bonusMod) {
    let statBonus = 0;
    if (stat === 3) {
      statBonus = -3;
    } else if (stat >= 5) {
      statBonus = -2;
    } else if (stat >= 8) {
      statBonus = -1;
    } else if (stat >= 12) {
      this.statBonus = 0;
    } else if (stat >= 15) {
      statBonus = 1;
    } else if (stat >= 17) {
      statBonus = 2;
    } else {
      statBonus = 3;
    }
    return statBonus + bonusMod;
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
}
