 //import XLSX from 'xlsx';
// eslint-disable-next-line global-require
const _ = require('lodash');
const XLSX = require('xlsx');

const getRows = (sheet) => {
  const rowsInfo = XLSX.utils.decode_range(sheet['!ref']);
  return _.range((rowsInfo.s.c + 1), (rowsInfo.e.r + 1));
};

const tasksWorkbook = XLSX.readFile('./data/Tasks.xlsx');
const taskSheet = tasksWorkbook.Sheets.Sheet1;
const taskMapping = {
  name: 'A',
  link: 'B',
  status: 'C',
};

const getTask = (sheet, currentRow) => {
  const task = {
    name: sheet[taskMapping.name + currentRow].v,
    link: sheet[taskMapping.link + currentRow].v,
    status: sheet[taskMapping.status + currentRow].v,
  };

  return task;
};

const getTasks = (sheet) => {
  const rows = getRows(sheet);
  return rows.map(row => getTask(sheet, row));
};

const tasks = getTasks(taskSheet);
console.log(tasks);
