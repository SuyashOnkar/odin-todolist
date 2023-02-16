// Main file

// I have to seperate the application logic from DOM stuff

// 1 file to deal with todos? 1 file to deal with projects?
// with different functions and all for application logic and dom
import './reset.css';
import './style.css';

import { projectList, searchProject, Project } from './projects';
import Task from './tasks';

const task1 = new Task();

const project1 = new Project('project1');
const project2 = new Project('project2');

project1.addTask(task1);

console.log(projectList);

console.log(searchProject('project1'));
