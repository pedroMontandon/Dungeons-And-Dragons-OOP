import Fighter, { SimpleFighter } from '../Fighter';
import { fightAgainstOne } from '../utils';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(protected char: Fighter, protected monsters: SimpleFighter[]) {
    super(char);
    super.fight();
  }

  fight(): number {
    return this.monsters.reduce((acc, curr) => {
      if (this.char.lifePoints === -1) return -1;
      return fightAgainstOne(this.char, curr);
    }, 1);
  }

  // fight(): number {
  //   this.monsters.reduce((monster: SimpleFighter) => {
  //     if (this.char.lifePoints === -1) return -1;
  //     this.char.attack(monster);
  //     if (monster.lifePoints === -1) return 1;
  //   }, 1);
  //   return this.char.lifePoints === -1 ? -1 : 1;
  // }
}