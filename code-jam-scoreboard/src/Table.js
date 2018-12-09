/* eslint-disable class-methods-use-this */
import users from '../data/users';

export default class Table {
  constructor(session) {
    this.session = session;
    this.baseTableInnerHtml = `<table>
                              <thead>
                                  <tr class="header">
                                      <th>Player name</th>
                                  </tr>
                              </thead>
                              <tbody>
                              </tbody>
                            </table>`;
    this.render();
  }

  render() {
    document.body.insertAdjacentHTML('beforeend', this.baseTableInnerHtml);
    this.renderHeader();
    this.renderRows();
  }

  renderHeader() {
    const header = document.querySelector('.header');
    this.session.puzzles.forEach((puzzele) => {
      const column = document.createElement('th');
      column.innerText = puzzele.name;
      header.appendChild(column);
    });

    const column = document.createElement('th');
    column.innerText = 'Total Time';
    header.appendChild(column);
  }

  renderRows() {
    if (this.session.rounds.length === 0) {
      document.querySelector('table').innerText = 'There no played rounds in selected session!';
      return;
    }
    Object.keys(this.session.rounds[0].solutions).forEach((p) => {
      const tableBody = document.querySelector('tbody');
      const row = document.createElement('tr');
      const playerNameTd = document.createElement('td');
      playerNameTd.innerText = this.getUserName(p);
      row.appendChild(playerNameTd);
      let totalTime = 0;
      this.session.rounds.forEach((round) => {
        const solution = round.solutions[p];
        const cell = document.createElement('td');
        const time = this.getTime(solution);
        totalTime += Number(time);
        cell.classList.add(this.getColor(solution));
        cell.classList.add('tooltip');
        cell.setAttribute('data-tooltip', this.getTooltipValue(solution));
        cell.innerText = time;
        row.appendChild(cell);
      });
      const totalTimeCell = document.createElement('td');
      totalTimeCell.innerText = totalTime;
      row.appendChild(totalTimeCell);
      tableBody.appendChild(row);
    });
  }

  getUserName(key) {
    const user = users.find(u => u.uid === key);
    if (user === undefined) {
      return 'Unknown player';
    } return user.displayName;
  }

  getTime(solution) {
    if (solution === undefined) {
      return '150';
    } return solution.time.$numberLong;
  }

  getColor(solution) {
    if (solution === undefined) { return 'incorrect'; }
    if (solution.correct === 'Correct') { return 'correct'; }
    return 'incorrect';
  }

  getTooltipValue(solution) {
    if (solution === undefined) { return ''; }
    return solution.code;
  }
}
