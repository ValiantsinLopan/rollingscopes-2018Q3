export default class SearchBar {
  constructor() {
    this.innerHtml = `<div id="searchBar">
                        <input type="search" id="search" placeholder="Search">
                        <button id="searchButton"><i class="fas fa-search"></i></button>
                      </div>`;
  }

  render() {
    const container = document.createElement('div');
    container.setAttribute('id', 'container');
    document.body.appendChild(container);
    container.insertAdjacentHTML('beforeend', this.innerHtml);
  }
}
