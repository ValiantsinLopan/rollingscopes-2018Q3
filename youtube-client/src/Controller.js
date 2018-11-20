import Model from './Model';
import View from './View';

export default class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
  }

  start() {
    this.view.renderBaseView();
    this.model.getResults('stilov', data => data.map(i => this.view.renderResultItem(i)));
  }
}
