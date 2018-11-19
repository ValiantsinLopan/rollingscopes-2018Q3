export default class ResultsGrid {
  constructor(ChildNode, data) {
    this.ChildNode = ChildNode;
    this.data = data;
  }

  render() {
    return `<div id="items">
              ${this.data.map(child => new this.ChildNode(child).render()).join('')}
            </div>`;
  }
}
