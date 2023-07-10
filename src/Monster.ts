import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  constructor(private _lifepoints = 85, private _strength = 63) {}

  get lifePoints() {
    return this._lifepoints;
  }
  
  get strength() {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    this._lifepoints -= attackPoints;
    if (this._lifepoints <= 0) {
      this._lifepoints = -1;
    }
    return this._lifepoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }
}