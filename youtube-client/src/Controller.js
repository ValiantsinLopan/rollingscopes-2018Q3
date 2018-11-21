import Model from './Model';
import View from './View';

export default class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
  }

  handleSeachInput(e) {
    const key = e.which || e.keyCode;
    if (key === 13) {
      this.view.results.clear();
      this.model.getResults(e.target.value, data => data.map(i => this.view.renderResultItem(i)));
    }
    console.log(this.model);
  }

  handleSearchButton() {
    this.view.results.clear();
    this.model.getResults(this.view.search.input.value,
      data => data.map(i => this.view.renderResultItem(i)));
  }

  start() {
    this.view.renderBaseView();
    this.view.search.input.addEventListener('keypress', e => this.handleSeachInput(e));
    this.view.search.button.addEventListener('click', () => { this.handleSearchButton(); });
  }
}
