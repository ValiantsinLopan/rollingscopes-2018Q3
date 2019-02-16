 //import XLSX from 'xlsx';
// eslint-disable-next-line global-require
const _ = require('lodash');
const XLSX = require('xlsx');

// Tasks
const tasksWorkbook = XLSX.readFile('./data/Tasks.xlsx');

const taskSheet = tasksWorkbook.Sheets.Sheet1;
const taskHeader = ['name', 'link', 'status'];

const tasks = XLSX.utils.sheet_to_json(taskSheet, { header: taskHeader });
console.log(tasks);

// Mentor/student
const mentorStudentWorkbook = XLSX.readFile('data/Mentor-students pairs.xlsx');

const pairsSheet = mentorStudentWorkbook.Sheets.pairs;
const mentorsSheet = mentorStudentWorkbook.Sheets['second_name-to_github_account'];

const studentsHeader = ['mentor', 'student'];
const mentorsHeader = ['name', 'surname', 'city', 'countOfStudents', 'github'];

const students = XLSX.utils.sheet_to_json(pairsSheet, { header: studentsHeader });
const mentors = XLSX.utils.sheet_to_json(mentorsSheet, { header: mentorsHeader });

console.log(students);
console.log(mentors);

// Score

const scoreWorkbook = XLSX.readFile('data/Mentor score.xlsx');

const scoreSheet = scoreWorkbook.Sheets['Form Responses 1'];
const scoreHeader = ['timestamp', 'mentorGithub', 'studentGithub', 'task', 'prLink', 'score', 'comment'];

const score = XLSX.utils.sheet_to_json(scoreSheet, { header: scoreHeader });

console.log(score);
