import Model from './Model';
import View from './View';

export default class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.searchResults = [];
    this.searchQuery = '';
  }

  handleSeachInput(e) {
    const key = e.which || e.keyCode;
    if (key === 13) {
      this.view.results.clear();
      this.view.results.render();
      this.model.getResults(e.target.value,
        (data) => {
          this.view.results.initCarousel(data.items);
          this.searchResults.push(...data.items);
        });
      document.getElementById('items').addEventListener('animationend', () => console.log('animation end'));
      console.log(this.searchResults);
    }
  }

  handleSearchButton() {
    this.model.getResults(this.view.search.input.value,
      data => this.view.results.initCarousel(data.items));
  }

  start() {
    this.view.search.input.addEventListener('keypress', e => this.handleSeachInput(e));
    this.view.search.button.addEventListener('click', () => { this.handleSearchButton(); });
  }
}
