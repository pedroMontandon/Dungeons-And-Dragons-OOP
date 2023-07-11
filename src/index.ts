import { Mage, Necromancer, Warrior } from './Archetypes';
import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';
import { Dwarf, Halfling, Orc } from './Races';
import getRandomInt from './utils';

const player1 = new Character(
  'Michel', 
  new Halfling('Michel', getRandomInt(1, 10)),
  new Necromancer('Michel'),
);

const player2 = new Character(
  'Bruno',
  new Dwarf('Bruno', getRandomInt(1, 10)),
  new Mage('Bruno'),
);

const player3 = new Character(
  'Thrall',
  new Orc('Thrall', getRandomInt(1, 10)),
  new Warrior('Thrall'),
);

for (let i = 0; i <= getRandomInt(1, 10); i += 1) {
  player1.levelUp();
}

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]) {
  battles.forEach((battle) => {
    battle.fight();
  });
}

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };