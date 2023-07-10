import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static archetypeInstances = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Warrior.archetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.archetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}