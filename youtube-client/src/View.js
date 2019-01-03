import SearchBar from './components/SearchBar';
import ResultsGrid from './components/ResultsGrid';

export default class View {
  constructor() {
    this.search = new SearchBar();
    this.results = new ResultsGrid();
  }
}
