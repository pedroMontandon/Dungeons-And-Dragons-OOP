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
}