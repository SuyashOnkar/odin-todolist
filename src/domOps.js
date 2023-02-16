/**
 * This file will be used to create functions and
 * shit for dom manipulation so as to keep it seperate from
 * the application logic
 */

export function createElem(name, className) {
  const elem = document.createElement(name);
  if (className) elem.classList.add(className);

  return elem;
}

export function getElem(name) {
  return document.querySelector(name);
}

// Should I take input the projectList and generate using
// [.length-1] to generate the last element or should I
// directly get the name from the button

export function addProjectToDom(projectName) {
  const elem = createElem('div', 'project');
  elem.textContent = projectName;

  const projectList = getElem('.projectList');
  projectList.append(elem);
}

export function addTaskToDom(taskName) {
  const taskTemplate = getElem('#taskTemplate');
  const clone = taskTemplate.content.cloneNode(true);
  clone.querySelector('p').textContent = taskName;

  const taskList = getElem('.taskList');
  taskList.append(clone);
}

export function generateTasks(taskList) {
  const taskListDom = getElem('.taskList');
  taskListDom.replaceChildren('');
  taskList.forEach((task) => {
    addTaskToDom(task);
  });
}

export function removeAddProjectForm() {
  const projectList = getElem('.projectList');
  projectList.removeChild(document.querySelector('.newProjectForm'));
}

export function createAddProjectForm() {
  const newProjectTemplate = document.querySelector('#newProjectTemplate');
  const clone = newProjectTemplate.content.cloneNode(true);

  const projectList = getElem('.projectList');

  projectList.append(clone);
}

export function removeAddTaskForm() {
  const projectList = getElem('.taskList');
  projectList.removeChild(document.querySelector('.newTaskForm'));
}

export function createAddTaskForm() {
  const newTaskTemplate = document.querySelector('#newTaskTemplate');
  const clone = newTaskTemplate.content.cloneNode(true);

  const taskList = getElem('.taskList');
  taskList.append(clone);
}
