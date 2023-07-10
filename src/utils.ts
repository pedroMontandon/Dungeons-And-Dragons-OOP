import { SimpleFighter } from './Fighter';

function getRandomInt(min: number, max: number) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin)) + newMin;
}

export function fightAgainstOne(char: SimpleFighter, enemy: SimpleFighter) {
  while (char.lifePoints >= 0 && enemy.lifePoints >= 0) {
    char.attack(enemy);
    if (enemy.lifePoints <= 0) break;
    enemy.attack(char);
  }
  return char.lifePoints === -1 ? -1 : 1;
}

export default getRandomInt;
