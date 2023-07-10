import Race from './Race';

export default class Elf extends Race {
  protected _maxLifePoints = 99;
  private static raceInstances = 0;
  constructor(n:string, d: number) {
    super(n, d);
    Elf.raceInstances += 1;
  }

  static createdRacesInstances(): number {
    return Elf.raceInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}