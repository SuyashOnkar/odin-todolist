/**
 * This file will be used to create functions and
 * shit for dom manipulation so as to keep it seperate from
 * the application logic
 */

const dom = (() => {
  function createElem(name, className) {
    const elem = document.createElement(name);
    if (className) elem.classList.add(className);

    return elem;
  }

  function getElem(name) {
    return document.querySelector(name);
  }

  // Should I take input the projectList and generate using
  // [.length-1] to generate the last element or should I
  // directly get the name from the button

  function addProjectToDom(projectName) {
    const elem = createElem('div', 'project');
    elem.textContent = projectName;

    const projectList = getElem('.projectList');
    projectList.append(elem);
  }

  function addTaskToDom(taskName) {
    const taskTemplate = getElem('#taskTemplate');
    taskTemplate.content.querySelector('p').textContent = taskName;
    const clone = taskTemplate.content.cloneNode(true);

    const taskList = getElem('.taskList');
    taskList.append(clone);
  }

  function clearTasks() {
    const taskListDom = getElem('.taskList');
    taskListDom.replaceChildren('');
  }

  function generateTasks(taskList) {
    const taskListDom = getElem('.taskList');
    taskListDom.replaceChildren('');
    taskList.forEach((task) => {
      addTaskToDom(task);
    });
  }

  function removeAddProjectForm() {
    const projectList = getElem('.projectList');
    projectList.removeChild(document.querySelector('.newProjectForm'));
  }

  function createAddProjectForm() {
    const newProjectTemplate = document.querySelector('#newProjectTemplate');
    const clone = newProjectTemplate.content.cloneNode(true);

    const projectList = getElem('.projectList');

    projectList.append(clone);
  }

  function removeAddTaskForm() {
    const taskContainer = getElem('.taskContainer');
    taskContainer.removeChild(document.querySelector('.newTaskForm'));
  }

  function createAddTaskForm() {
    const newTaskTemplate = document.querySelector('#newTaskTemplate');
    const clone = newTaskTemplate.content.cloneNode(true);

    const taskContainer = getElem('.taskContainer');
    taskContainer.append(clone);
  }

  return {
    addProjectToDom,
    addTaskToDom,
    createAddProjectForm,
    createAddTaskForm,
    createElem,
    generateTasks,
    getElem,
    removeAddProjectForm,
    removeAddTaskForm,
    clearTasks,
  };
})();

export default dom;
