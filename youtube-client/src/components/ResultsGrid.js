export default class ResultsGrid {
  render() {
    const listContainer = document.createElement('div');
    listContainer.setAttribute('id', 'items');
    this.element = listContainer;
    document.getElementById('container').appendChild(listContainer);
  }
}
