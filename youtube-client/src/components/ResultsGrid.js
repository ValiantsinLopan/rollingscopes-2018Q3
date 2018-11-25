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
    this.list = document.querySelector('.carousel');
    if (this.list === null) {
      return;
    }
    while (this.list.firstChild) {
      this.list.removeChild(this.list.firstChild);
    }
  }

  initCarousel(data) {
    data.map(item => new ResultItem(item));
    this.carousel = document.querySelector('.carousel');
    this.viewport = document.querySelector('.viewport');
    this.card = document.querySelector('.card');
    this.cards = [...document.getElementsByClassName('card')];
    this.items = document.querySelector('#items');
    this.animateCarousel(this.items.offsetLeft, 0);

    this.nextButton = document.querySelector('.next');
    this.previousButton = document.querySelector('.previous');
    this.nextButton.removeEventListener('click', e => this.handleNavButtonClick(e));
    this.previousButton.removeEventListener('click', e => this.handleNavButtonClick(e));

    this.paginationContainer = document.querySelector('.pagination-container');

    this.viewportWidth = this.viewport.offsetWidth;
    this.cardWidth = this.card.offsetWidth;
    this.cardsCount = this.cards.length;
    this.currentPage = 0;
    this.animationDuration = 500;
    this.columnsPerPage = this.getColumnsCount();
    this.pageCount = Math.ceil(this.cardsCount / this.columnsPerPage);

    this.setDimensions();
    this.hideAndDisplayButtons();
    this.generatePagination();

    this.nextButton.addEventListener('click', e => this.handleNavButtonClick(e));
    this.previousButton.addEventListener('click', e => this.handleNavButtonClick(e));

    window.addEventListener('resize', this.resizeThrottler(), false);
  }

  setDimensions() {
    const cardsWidh = this.card.offsetWidth * this.columnsPerPage;
    this.cardMargin = ((this.viewport.offsetWidth - cardsWidh) / (2 * this.columnsPerPage));
    this.cards.forEach((e) => {
      e.style.margin = `${this.cardMargin}px`;
    });
    this.items.style.width = `${this.pageCount * this.viewportWidth}px`;
  }

  getColumnsCount() {
    const count = Math.floor(this.viewportWidth / this.cardWidth);
    if ((this.viewportWidth - this.cardWidth * count) < 4 * count) {
      return count - 1;
    }
    return count;
  }

  hideAndDisplayButtons() {
    if (this.currentPage === 0) this.previousButton.classList.add('hidden');
    if (this.currentPage >= this.pageCount - 1) this.nextButton.classList.add('hidden');

    if (this.currentPage > 0) this.previousButton.classList.remove('hidden');
    if (this.currentPage < this.pageCount - 1) this.nextButton.classList.remove('hidden');
  }

  generatePagination() {
    while (this.paginationContainer.firstChild) {
      this.paginationContainer.removeChild(this.paginationContainer.firstChild);
    }

    const arr = new Array(this.pageCount).fill();
    arr.forEach((value, index) => {
      const indicator = document.createElement('div');
      indicator.className = 'indicator';
      if (index === 0) indicator.classList.add('active');
      indicator.setAttribute('page-index', `${index}`);
      indicator.addEventListener('click', (e) => { this.handleIndicatorClick(e); });
      this.paginationContainer.appendChild(indicator);
    });

    this.updatePagination();
  }

  resizeThrottler() {
    let resizeTimeout;
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(() => {
        resizeTimeout = null;
        this.actualResizeHandler();
      }, 200);
    }
  }

  actualResizeHandler() {
    console.log('resize');
    this.viewportWidth = document.querySelector('.viewport').offsetWidth;
    console.log(this.viewportWidth);
    this.cardWidth = document.querySelector('.card').offsetWidth;
    this.columnsPerPage = this.getColumnsCount();

    this.setDimensions();
    this.generatePagination();
  }

  handleIndicatorClick(e) {
    const clickedIndicator = e.target;
    const activeIndicator = document.querySelector('.indicator.active');
    const activeCard = document.querySelector('.card.active');
    this.currentPage = Number(clickedIndicator.getAttribute('page-index'));

    const fromX = this.items.getBoundingClientRect().left;
    activeIndicator.classList.remove('active');
    clickedIndicator.classList.add('active');
    activeCard.classList.remove('active');
    this.cards[this.currentPage * this.columnsPerPage].classList.add('active');
    const leftStyle = document.querySelector('.card.active').offsetLeft;

    this.animateCarousel(fromX, -(leftStyle - this.cardMargin));

    this.hideAndDisplayButtons();
  }

  animateCarousel(from, to) {
    this.items.animate({
      left: [`${from}px`, `${to}px`],
    },
    {
      duration: this.animationDuration,
      fill: 'forwards',
    });
  }

  updatePagination() {
    const indicators = document.getElementsByClassName('indicator');
    const activeIndicator = document.querySelector('.indicator.active');

    activeIndicator.classList.remove('active');
    indicators[this.currentPage].classList.add('active');
    this.cards[this.currentPage * this.columnsPerPage].classList.add('active');

    this.hideAndDisplayButtons();
  }

  handleNavButtonClick(e) {
    console.log('handle click');
    const clickedButton = e.target;
    const fromX = this.items.getBoundingClientRect().left;
    console.log(this.currentPage);
    this.cards[this.currentPage * this.columnsPerPage].classList.remove('active');
    if (clickedButton.classList.contains('next')) {
      this.currentPage = this.currentPage + 1 >= this.pageCount
        ? this.pageCount - 1
        : this.currentPage + 1;
    }

    if (clickedButton.classList.contains('previous')) {
      this.currentPage = this.currentPage - 1 < 0
        ? 0
        : this.currentPage - 1;
    }
    console.log(this.currentPage);
    this.cards[this.currentPage * this.columnsPerPage].classList.add('active');
    const leftStyle = document.querySelector('.card.active').offsetLeft;

    this.animateCarousel(fromX, -(leftStyle - this.cardMargin));

    this.hideAndDisplayButtons();
    this.updatePagination();
  }

  setToCurrentCard() {
    this.columnsPerPage = this.getColumnsCount();
  }
}
