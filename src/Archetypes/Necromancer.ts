import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static archetypeInstances = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Necromancer.archetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.archetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}