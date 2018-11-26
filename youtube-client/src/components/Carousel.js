export default class Carousel {
  constructor() {
    this.carousel = document.querySelector('.carousel');
    this.viewport = document.querySelector('.viewport');

    this.nextButton = document.querySelector('.next');
    this.previousButton = document.querySelector('.previous');
    this.paginationContainer = document.querySelector('.pagination-container');
    this.card = document.querySelector('.card');

    this.viewportWidth = this.viewport.offsetWidth;
    this.cardWidth = this.card.offsetWidth;

    this.currentPage = 0;
    this.animationDuration = 250;
    this.columnsPerPage = this.getColumnsCount();
  }

  init() {
    this.setDimensions();
    this.hideAndDisplayButtons();
    this.generatePagination();

    this.nextButton.addEventListener('click', e => this.handleNavButtonClick(e));
    this.previousButton.addEventListener('click', e => this.handleNavButtonClick(e));
  }

  update() {
    this.setDimensions();
    this.hideAndDisplayButtons();
    this.generatePagination();
  }

  setDimensions() {
    this.cards = [...document.getElementsByClassName('card')];
    this.slider = document.querySelector('#items');
    this.cardsCount = this.cards.length;
    this.pageCount = Math.ceil(this.cardsCount / this.columnsPerPage);

    const cardsWidh = this.card.offsetWidth * this.columnsPerPage;
    this.cardMargin = ((this.viewport.offsetWidth - cardsWidh) / (2 * this.columnsPerPage));
    this.cards.forEach((e) => {
      e.style.margin = `${this.cardMargin}px`;
    });
    this.slider.style.width = `${this.pageCount * this.viewportWidth}px`;
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
    const activeIndicator = document.querySelector('.indicator.active');
    const arr = new Array(this.pageCount).fill();
    arr.forEach((value, index) => {
      const indicator = document.createElement('div');
      indicator.className = 'indicator';
      if (index === 0 && activeIndicator === null) indicator.classList.add('active');
      indicator.setAttribute('page-index', `${index}`);
      indicator.addEventListener('click', (e) => { this.handleIndicatorClick(e); });
      this.paginationContainer.appendChild(indicator);
    });

    this.updatePagination();
  }

  updatePagination() {
    const indicators = document.getElementsByClassName('indicator');
    const activeIndicator = document.querySelector('.indicator.active');

    activeIndicator.classList.remove('active');
    indicators[this.currentPage].classList.add('active');
    this.cards[this.currentPage * this.columnsPerPage].classList.add('active');

    this.hideAndDisplayButtons();
  }

  getColumnsCount() {
    const count = Math.floor(this.viewportWidth / this.cardWidth);
    if ((this.viewportWidth - this.cardWidth * count) < 2 * count) {
      return count - 1;
    }
    return count;
  }

  handleIndicatorClick(e) {
    const clickedIndicator = e.target;
    const activeIndicator = document.querySelector('.indicator.active');
    const activeCard = document.querySelector('.card.active');
    this.currentPage = Number(clickedIndicator.getAttribute('page-index'));

    const fromX = this.slider.getBoundingClientRect().left;
    activeIndicator.classList.remove('active');
    clickedIndicator.classList.add('active');
    activeCard.classList.remove('active');
    this.cards[this.currentPage * this.columnsPerPage].classList.add('active');
    const leftStyle = document.querySelector('.card.active').offsetLeft;

    this.animateCarousel(fromX, -(leftStyle - this.cardMargin));

    this.hideAndDisplayButtons();
  }

  handleNavButtonClick(e) {
    console.log('handle click');
    const clickedButton = e.target;
    const fromX = this.slider.getBoundingClientRect().left;
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

  animateCarousel(from, to) {
    this.slider.animate({
      left: [`${from}px`, `${to}px`],
    },
    {
      duration: this.animationDuration,
      fill: 'forwards',
    });
  }
}
