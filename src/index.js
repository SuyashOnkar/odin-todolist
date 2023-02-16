// Main file

// I have to seperate the application logic from DOM stuff

// 1 file to deal with todos? 1 file to deal with projects?
// with different functions and all for application logic and dom
import './reset.css';
import './style.css';

import { searchProject, Project } from './projects';
import Task from './tasks';
import {
  addProjectToDom,
  addTaskToDom,
  createAddProjectForm,
  createAddTaskForm,
  createElem,
  generateTasks,
  getElem,
  removeAddProjectForm,
} from './domOps';

// const task1 = new Task();

// const project1 = new Project('project1');
// const project2 = new Project('project2');

// project1.addTask(task1);

// addProject('l');
// addTask('r');
// createAddProjectForm();
// createAddTaskForm();

// console.log(projectList);

// console.log(searchProject('project1'));

const submitProjectNameEvent = () => {
  const addProjectForm = getElem('.newProjectForm');
  addProjectForm.addEventListener('submit', (e) => {
    const projectName = getElem('#newProjectName').value;
    // I need to group these functions together
    const project = new Project(projectName);
    project.addToProjectList();
    addProjectToDom(projectName);
    // ^^
    projectSelectEvent();
    removeAddProjectForm();
    e.preventDefault();
  });
};

const addProjectEvent = () => {
  const addProjectButton = getElem('#addProjectButton');
  addProjectButton.addEventListener('click', () => {
    const projectListDom = getElem('.projectList');
    if (projectListDom.querySelector('form')) {
      removeAddProjectForm();
    } else {
      createAddProjectForm();
      /**
       * Currently running the submit project Event only when
       * add Project event is called
       */
      submitProjectNameEvent();
    }
  });
};

// I cant figure a way to run this other than this.

addProjectEvent();

/**
 * Time for some messy code I think because:
 *  1. I need to implement a selected project function
 *      so we can select a project and then generate its
 *      todo's appropriately.
 *  2. Then only can i add the task listeners because tasks
 *      are supposed to be added to the SELECTED PROJECT.
 */

//Adding the default project manually
// (I need to fix this code)

const defaultProject = new Project('Default');
defaultProject.addToProjectList();
addProjectToDom(defaultProject.getName);

let selectedProject = defaultProject;
defaultProject.getTaskList;

const projectSelectEvent = () => {
  project.addEventListener('click', (e) => {
    selectedProject = searchProject(e.target.value);
    generateTasks(selectedProject);
    project.classList.add('selected');
  });
};
