import SearchBar from './components/SearchBar';
import ResultsGrid from './components/ResultsGrid';
import ResultItem from './components/ResultItem';

export default class View {
  constructor() {
    this.search = new SearchBar();
    this.results = new ResultsGrid();
    this.result = new ResultItem();
  }

  renderBaseView() {
    this.search.render();
    this.results.render();
  }

  renderResultItem(data) {
    this.result.render(data);
  }
}
