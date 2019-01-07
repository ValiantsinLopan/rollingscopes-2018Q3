import { random } from 'lodash';
import { dictionary } from './dictionary';

export default class TranslationTask {
  constructor() {
    this.description = 'Enter russian translation of this word';
    this.note = '';
    this.words = dictionary.words;
  }

  getTask() {
    const word = this.words[random(this.words.length - 1)];
    return {
      description: this.description,
      note: this.note,
      task: word.word,
      expectedAnswer: word.trans[0],
    };
  }
}
