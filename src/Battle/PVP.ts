import Fighter from '../Fighter';
import { fightAgainstOne } from '../utils';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(protected char1: Fighter, protected char2: Fighter) {
    super(char1);
    super.fight();
  }

  fight(): number {
    return fightAgainstOne(this.char1, this.char2);
  }
}