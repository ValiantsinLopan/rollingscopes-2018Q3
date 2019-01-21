import { random } from 'lodash';

export default class ArithmeticTask {
  constructor(min, max) {
    this.min = min;
    this.max = max;
    this.operators = [
      {
        sign: '+',
        method(a, b) { return a + b; },
      },
      {
        sign: '-',
        method(a, b) { return a - b; },
      },
      {
        sign: '*',
        method(a, b) { return a * b; },
      },
      {
        sign: '/',
        method(a, b) { return a / b; },
      },
    ];
    this.description = 'Calculate the result of the expression';
    this.note = 'For a fractional result, enter the nearest integer';
  }

  getTask() {
    const firtArg = random(this.min, this.max);
    const secondArg = random(this.min, this.max);
    const operator = this.operators[random(this.operators.length - 1)];
    const task = `${firtArg} ${operator.sign} ${secondArg}`;
    const expectedAnswer = Math.round(operator.method(firtArg, secondArg)).toString();
    return {
      description: this.description,
      note: this.note,
      task,
      expectedAnswer,
    };
  }
}
