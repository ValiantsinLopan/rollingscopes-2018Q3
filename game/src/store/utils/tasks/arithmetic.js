import { random } from 'lodash';

export default class ArithmeticTask {
  constructor(min, max) {
    this.min = min;
    this.max = max;
    this.operators = ['+', '-', '*', '/'];
    this.description = 'Calculate the result of the expression';
    this.note = 'For a fractional result, enter the nearest integer';
  }

  getTask() {
    const task = `${random(this.min, this.max)} ${this.operators[random(this.operators.length - 1)]} ${random(this.min, this.max)}`;
    const expectedAnswer = Math.round(eval(task)).toString();
    return {
      description: this.description,
      note: this.note,
      task,
      expectedAnswer,
    };
  }
}
