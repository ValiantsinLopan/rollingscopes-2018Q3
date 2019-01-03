import sessions from '../data/sessions';
import Table from './Table';

window.onload = () => new Table(sessions[1]);

document.querySelector('#switch').addEventListener('click', (e) => {
  document.querySelector('table').remove();
  if (e.target.value === 'rsschool') {
    return new Table(sessions[1]);
  } return new Table(sessions[0]);
});
