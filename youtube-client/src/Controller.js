import Model from './Model';
import View from './View';
import Carousel from './components/Carousel';

export default class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.searchQuery = '';
  }

  handleSeachInput(e) {
    if (e.target.value === '') return;
    const key = e.which || e.keyCode;
    if (key === 13) {
      this.processSearch(e.target.value);
    }
  }

  handleSearchButton() {
    if (this.view.search.input.value === '') return;
    this.processSearch(this.view.search.input.value);
  }

  processSearch(query) {
    this.view.results.clear();
    this.view.results.render();
    this.searchQuery = query;
    this.model.getResults(query, true,
      (data) => {
        this.view.results.renderResultsItems(data.items);
        this.carousel = null;
        this.carousel = new Carousel();
        this.carousel.init();
      });

    window.addEventListener('loadMore', () => { this.handleLoadMore(); });
    window.addEventListener('resize', () => { this.handleResize(); });
  }

  handleLoadMore() {
    this.model.getResults(this.searchQuery, false,
      (data) => {
        this.view.results.renderResultsItems(data.items);
        this.carousel.update();
      });
  }

  handleResize() {
    this.carousel.destroyHandlers();
    this.carousel = new Carousel();
    this.carousel.resize();
  }

  start() {
    this.view.search.input.addEventListener('keypress', e => this.handleSeachInput(e));
    this.view.search.button.addEventListener('click', () => { this.handleSearchButton(); });
  }
}
