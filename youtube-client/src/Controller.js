import Model from './Model';
import View from './View';
import Carousel from './components/Carousel';

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
      if (e.target.value === this.searchQuery) {
        console.log('update!');
        this.model.getResults(e.target.value,
          (data) => {
            this.view.results.renderResultsItems(data.items);
            this.carousel.update();
            this.searchResults.push(...data.items);
          });
        return;
      }
      this.searchQuery = e.target.value;
      this.view.results.clear();
      this.view.results.render();
      this.model.getResults(e.target.value,
        (data) => {
          this.view.results.renderResultsItems(data.items);
          this.carousel = new Carousel();
          this.carousel.init();
          this.searchResults.push(...data.items);
        });
      window.addEventListener('resize',
        () => {
          console.log('resize');
          this.carousel = new Carousel();
          this.carousel.init();
        });
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
