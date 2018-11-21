export default class ResultsGrid {
  constructor() {
    const listContainer = document.createElement('div');
    listContainer.setAttribute('id', 'items');
    this.parentNode = document.getElementById('container');
    this.element = listContainer;
  }

  render() {
    this.parentNode.appendChild(this.element);
  }

  clear() {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild);
    }
  }
}
