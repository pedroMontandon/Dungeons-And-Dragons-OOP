import Race from './Race';

export default class Orc extends Race {
  protected _maxLifePoints = 74;
  private static raceInstances = 0;
  constructor(n:string, d: number) {
    super(n, d);
    Orc.raceInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc.raceInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}