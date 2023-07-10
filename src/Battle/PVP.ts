import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(protected char1: Fighter, protected char2: Fighter) {
    super(char1);
    super.fight();
  }

  fight(): number {
    while (this.char1.lifePoints >= 0 && this.char2.lifePoints >= 0) {
      this.char1.attack(this.char2);
      if (this.char2.lifePoints <= 0) break;
      this.char2.attack(this.char1);
    }
    return this.char1.lifePoints === -1 ? -1 : 1;
  }
}