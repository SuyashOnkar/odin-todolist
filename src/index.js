import './reset.css';
import './style.css';

import { format } from 'date-fns';

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

    // window.localStorage.setItem(project.getName, project.getTaskList);

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
    selectedProject = searchProject(e.target.innerText);
    generateTasks();

    // Add selected class to the one clicked
    dom.removeClass();
    e.target.classList.add('selected');
  });
}

const addTaskButton = dom.getElem('#addTaskButton');
addTaskButton.addEventListener('click', () => {
  if (dom.getElem('.taskContainer').querySelector('form')) {
    dom.removeAddTaskForm();
  } else {
    dom.createAddTaskForm();
    const today = new Date();
    dom.getElem('#dueDate').value = format(today, 'yyyy-MM-dd');
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
    let priority = 'none';
    const priorityRadios = dom
      .getElem('.taskPriority')
      .querySelectorAll('input[type="radio"]');
    priorityRadios.forEach((e1) => {
      if (e1.checked) {
        priority = e1.value;
      }
    });

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
  taskList.forEach((task) => {
    const date = new Date(task.dueDate);
    const formattedDate = format(date, 'cccc do');
    dom.addTaskToDom(task.getName, formattedDate);
    selectTaskEvent();
    taskCompleteEvent();
  });
}

// Event when we click a task -> generate task details
function selectTaskEvent() {
  // adding event listener to last task everytime a new task is created
  const lastTask = dom.getElem('.taskList').lastElementChild;
  lastTask.addEventListener('click', (e) => {
    if (document.querySelector('.taskDetails') != null) {
      dom.removeTaskDetails();
    } else {
      const taskName = e.currentTarget.querySelector('.taskName p').innerText;
      const task = selectedProject.searchTask(taskName);
      const date = new Date(task.dueDate);
      const formattedDate = format(date, 'do MMM, yyyy');

      dom.createTaskDetails(
        task.getName,
        task.getDescription,
        formattedDate,
        task.priority
      );
    }
  });
}

// Event when I complete a task and click
function taskCompleteEvent() {
  const checkboxList = document.querySelectorAll('.checkbox');
  const lastCheckbox = checkboxList[checkboxList.length - 1];
  lastCheckbox.addEventListener('click', (e) => {
    e.stopPropagation();
    const taskList = dom.getElem('.taskList');
    const taskDiv = e.target.parentElement.parentElement.parentElement;
    const taskName = taskDiv.querySelector('.taskName p').innerText;
    selectedProject.removeTask(taskName);
    taskList.removeChild(e.target.parentElement.parentElement.parentElement);
  });
}

let selectedProject;
if (localStorage.length === 0) {
  const defaultProject = new Project('Default');
  dom.addProjectToDom(defaultProject.getName);
  selectProjectForm();
  selectedProject = defaultProject;
  generateTasks();
} else {
  for (let i = 0; i < localStorage.length; i += 1) {
    const key = window.localStorage.key(i);

    const projectObj = JSON.parse(window.localStorage.getItem(key));
    const project = new Project(key);

    projectObj.forEach((t) => {
      const task = new Task(t.title, t.description, t.dueDate, t.priority);
      project.addTask(task);
    });
    dom.addProjectToDom(project.getName);

    selectedProject = project;
    selectProjectForm();
    generateTasks();
  }
}
document.querySelector('.project').classList.add('selected');
// Reset local storage button
const resetButton = document.getElementById('resetLocalStorage');
resetButton.addEventListener('click', () => {
  localStorage.clear();
});
