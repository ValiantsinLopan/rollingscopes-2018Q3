import ResultItem from './ResultItem';

export default class ResultsGrid {
  constructor() {
    this.parentNode = document.getElementById('container');
    this.innerHtml = `<div class="carousel">
                        <div class="pagination-container">
                        </div>
                        <div class="viewport">
                            <div class="button next hidden"></div>
                            <div class="button previous hidden"></div>
                            <div id="items"></div>
                        </div>
                      </div>`;
  }

  render() {
    this.parentNode.insertAdjacentHTML('beforeend', this.innerHtml);
  }

  clear() {
    this.container = document.getElementById('container');
    this.carousel = document.querySelector('.carousel');
    if (this.carousel === null) {
      return;
    }
    this.container.removeChild(this.container.lastChild);
  }

  // eslint-disable-next-line class-methods-use-this
  renderResultsItems(data) {
    data.map(item => new ResultItem(item));
  }
}
