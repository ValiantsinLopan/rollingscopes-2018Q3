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

    this.nextButton.addEventListener('click', e => this.handleNext(e), false);
    this.previousButton.addEventListener('click', e => this.handlePrevious(e), false);

    this.initSwipe();
  }

  update() {
    this.setDimensions();
    this.hideAndDisplayButtons();
    this.generatePagination();
  }

  resize() {
    const activeCardIndex = document.querySelector('.card.active').getAttribute('data-index');
    console.log(`colunns per page : ${this.columnsPerPage}`);
    this.currentPage = Math.ceil((Number(activeCardIndex) + 1) / this.columnsPerPage) - 1;
    console.log(`New page indexs: ${this.currentPage}`);
    this.setDimensions();
    const active = document.querySelector('.card.active');
    active.classList.remove('active');
    this.cards[this.currentPage * this.columnsPerPage].classList.add('active');

    this.hideAndDisplayButtons();
    this.generatePagination();

    const fromX = this.slider.getBoundingClientRect().left;
    const activeCardLeftStyle = document.querySelector('.card.active').offsetLeft;
    this.animateCarousel(fromX, -(activeCardLeftStyle - this.cardMargin));


    this.nextButton.addEventListener('click', e => this.handleNext(e), false);
    this.previousButton.addEventListener('click', e => this.handlePrevious(e), false);

    this.initSwipe();
  }

  setDimensions() {
    this.cards = [...document.getElementsByClassName('card')];
    this.slider = document.querySelector('#items');
    this.cardsCount = this.cards.length;
    this.pageCount = Math.ceil(this.cardsCount / this.columnsPerPage);

    const cardsWidh = this.card.offsetWidth * this.columnsPerPage;
    this.cardMargin = ((this.viewport.offsetWidth - cardsWidh) / (2 * this.columnsPerPage) - 1);
    this.cards.forEach((card, index) => {
      card.setAttribute('data-index', `${index}`);
      card.style.margin = `${this.cardMargin}px`;
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

    const activeCard = document.querySelector('.card.active');
    activeIndicator.classList.remove('active');
    indicators[this.currentPage].classList.add('active');

    if (activeCard === null) this.cards[this.currentPage * this.columnsPerPage].classList.add('active');

    document.getElementById('current-page').textContent = this.currentPage + 1;
    document.getElementById('total-page').textContent = this.pageCount;

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


    document.getElementById('current-page').textContent = this.currentPage + 1;
    document.getElementById('total-page').textContent = this.pageCount;

    this.hideAndDisplayButtons();
    this.checkForLoadMore();
  }

  handleNext() {
    console.log('Handle next');
    const fromX = this.slider.getBoundingClientRect().left;
    console.log(`page: ${this.currentPage} of ${this.pageCount}`);
    document.querySelector('.card.active').classList.remove('active');
    this.currentPage = this.currentPage + 1 >= this.pageCount
      ? this.pageCount - 1
      : this.currentPage + 1;

    this.cards[this.currentPage * this.columnsPerPage].classList.add('active');
    const leftStyle = document.querySelector('.card.active').offsetLeft;

    this.animateCarousel(fromX, -(leftStyle - this.cardMargin));

    this.hideAndDisplayButtons();
    this.updatePagination();
    this.checkForLoadMore();
  }

  handlePrevious() {
    const fromX = this.slider.getBoundingClientRect().left;
    console.log(this.currentPage);
    this.cards[this.currentPage * this.columnsPerPage].classList.remove('active');
    this.currentPage = this.currentPage - 1 < 0
      ? 0
      : this.currentPage - 1;
    this.cards[this.currentPage * this.columnsPerPage].classList.add('active');
    const leftStyle = document.querySelector('.card.active').offsetLeft;

    this.animateCarousel(fromX, -(leftStyle - this.cardMargin));

    this.hideAndDisplayButtons();
    this.updatePagination();
    this.checkForLoadMore();
  }

  initSwipe() {
    const viewport = document.querySelector('.viewport');
    viewport.addEventListener('mousedown', e => this.startSwipe(e), false);
    viewport.addEventListener('touchstart', e => this.startSwipe(e), false);

    viewport.addEventListener('mouseup', e => this.endSwipe(e), false);
    viewport.addEventListener('touchend', e => this.endSwipe(e), false);

    viewport.addEventListener('mousemove', e => this.swipeInProgress(e));
    viewport.addEventListener('touchmove', e => this.swipeInProgress(e));
  }

  startSwipe(e) {
    this.startX = this.unifySwipe(e).pageX;
    this.scrollLeft = this.slider.scrollLeft;
  }

  endSwipe(e) {
    if (this.startX || this.startX === 0) {
      const swipeLenth = this.unifySwipe(e).pageX - this.startX;
      const action = -Math.sign(swipeLenth);
      if (action < 0) {
        this.handlePrevious();
      } else if (action > 0) {
        this.handleNext();
      }
    }

    delete this.startX;
  }

  swipeInProgress(e) {
    e.preventDefault();
    if (this.startX || this.startX === 0) {
      const fromX = this.unifySwipe(e).pageX - this.slider.offsetLeft;
      const swipeLength = fromX - this.startX;
      this.slider.scrollLeft = this.scrollLeft - swipeLength;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  unifySwipe(e) {
    if (e.changedTouches) {
      return e.changedTouches[0];
    }
    return e;
  }

  animateCarousel(from, to) {
    console.log(`fromX: ${from}`);
    console.log(`to: ${to}`);
    this.slider.animate({
      left: [`${from}px`, `${to}px`],
    },
    {
      duration: this.animationDuration,
      fill: 'forwards',
    });
  }

  checkForLoadMore() {
    console.log(`Page ${this.currentPage} of ${this.pageCount}`);
    if (this.currentPage > this.pageCount - 3) window.dispatchEvent(new Event('loadMore'));
  }

  destroyHandlers() {
    console.log('remove handlers');
    const old = this.viewport;
    const newNode = old.cloneNode(true);
    old.parentNode.replaceChild(newNode, old);
  }
}
