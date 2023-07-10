import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static archetypeInstances = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Mage.archetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.archetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}