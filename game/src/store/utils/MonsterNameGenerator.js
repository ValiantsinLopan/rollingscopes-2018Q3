import { random } from 'lodash';

export default class MonsterNameGenerator {
  constructor() {
    this.names = ['Mike', 'Valya', 'Grzegorz', 'Alex', 'Kolyan', 'Sam', 'Mao'];
    this.surnames = ['Malicious', 'Awful', 'Huge', 'Smelly', 'Snotty', 'Wet', 'Fierce', 'Poisonous', 'Barbed', 'Toothy'];
    this.patronymics = ['Orc', 'Dwarf', 'Elf', 'Giant', 'Troll', 'Zomby', 'Trent', 'Centaur', 'Spirit', 'Gnida'];
  }

  generate() {
    return `${this.surnames[random(this.surnames.length - 1)]} ${this.patronymics[random(this.patronymics.length - 1)]} ${this.names[random(this.names.length - 1)]}`;
  }
}
