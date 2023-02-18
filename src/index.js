import './reset.css';
import './style.css';

import { searchProject, Project } from './projects';
import Task from './tasks';
import dom from './domOps';

// Event for when I click the add project button

const addProjectButton = dom.getElem('#addProjectButton');
addProjectButton.addEventListener('click', () => {
  // Check if already form exists, and remove if it exists
  // and generate new only if it does not exist.
  if (dom.getElem('.projectList').querySelector('form')) {
    dom.removeAddProjectForm();
  } else {
    dom.createAddProjectForm();
    submitProjectForm();
  }
});

// Event for when I submit Project Name ->
// create a Project object add Project to dom and List
// Executes whenever addProjectButton is clicked
function submitProjectForm() {
  const newProjectForm = dom.getElem('.newProjectForm');
  newProjectForm.addEventListener('submit', (e) => {
    const project = new Project(dom.getElem('#newProjectName').value);
    dom.addProjectToDom(project.getName);
    e.preventDefault();
    dom.removeAddProjectForm();
    selectProjectForm();
  });
}

// Add Event Listener to latest (last) project so when we click project ->
// It makes it the selected project and generates the task list for it.
// Executes whenever a new project is submitted
function selectProjectForm() {
  const latestProject = dom.getElem('.projectList').lastChild;
  latestProject.addEventListener('click', (e) => {
    console.log(selectedProject);
    selectedProject = searchProject(e.target.innerText);
    console.log(selectedProject);
    generateTasks();
  });
}

const addTaskButton = dom.getElem('#addTaskButton');
addTaskButton.addEventListener('click', () => {
  if (dom.getElem('.taskContainer').querySelector('form')) {
    dom.removeAddTaskForm();
  } else {
    dom.createAddTaskForm();
    submitTaskForm();
  }
});

function submitTaskForm() {
  const newTaskForm = dom.getElem('.newTaskForm');
  newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = dom.getElem('#taskName').value;
    const description = dom.getElem('#taskDescription').value;
    const dueDate = dom.getElem('#dueDate').value;
    const priority = dom.getElem('.taskPriority').value;

    const task = new Task(title, description, dueDate, priority);
    selectedProject.addTask(task);

    generateTasks();
    dom.removeAddTaskForm();
  });
}

// Generating Task functions and shit
function generateTasks() {
  dom.clearTasks();
  const taskList = selectedProject.getTaskList;
  console.log(taskList);
  taskList.forEach((task) => {
    dom.addTaskToDom(task.getName);
  });
}

// Selected project variable - - Create defaults
const defaultProject = new Project('default');
dom.addProjectToDom(defaultProject.getName);
selectProjectForm();
let selectedProject = defaultProject;
selectedProject.addTask('lida');
console.log(selectedProject.getTaskList);
