import Race from './Race';

export default class Halfling extends Race {
  protected _maxLifePoints = 60;
  private static raceInstances = 0;
  constructor(n:string, d: number) {
    super(n, d);
    Halfling.raceInstances += 1;
  }
  
  static createdRacesInstances(): number {
    return Halfling.raceInstances;
  }

  get maxLifePoints(): number { 
    return this._maxLifePoints;
  }
}