import Race from './Race';

export default class Dwarf extends Race {
  protected _maxLifePoints = 80;
  protected static raceInstances = 0;
  constructor(n:string, d: number) {
    super(n, d);
    Dwarf.raceInstances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.raceInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}