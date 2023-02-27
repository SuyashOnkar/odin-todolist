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

  function addTaskToDom(taskName, taskDate) {
    const taskTemplate = getElem('#taskTemplate');
    taskTemplate.content.querySelector('p').textContent = taskName;
    taskTemplate.content.querySelector('span').textContent = taskDate;
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

  function createTaskDetails(
    taskName,
    taskDescription,
    taskDate,
    taskPriority
  ) {
    const taskDetailsTemplate = getElem('#taskDetails').content;
    taskDetailsTemplate.querySelector('h2').innerText = taskName;
    taskDetailsTemplate.querySelector('p').innerText = taskDescription;
    taskDetailsTemplate.querySelector('span').innerText = taskDate;
    taskDetailsTemplate.querySelector('.priorityValue').innerText =
      taskPriority;
    if (taskPriority === 'high') {
      taskDetailsTemplate.querySelector('.priorityValue').style.color = 'red';
    } else if (taskPriority === 'medium') {
      taskDetailsTemplate.querySelector('.priorityValue').style.color = 'green';
    } else if (taskPriority === 'low') {
      taskDetailsTemplate.querySelector('.priorityValue').style.color =
        'yellow';
    } else {
      taskDetailsTemplate.querySelector('.priorityValue').style.color = 'white';
    }

    const clone = taskDetailsTemplate.cloneNode(true);

    const taskContainer = getElem('.taskContainer');
    taskContainer.append(clone);
  }

  function removeTaskDetails() {
    const taskContainer = getElem('.taskContainer');
    taskContainer.removeChild(document.querySelector('.taskDetails'));
  }

  function removeClass() {
    const projectList = getElem('.projectList').querySelectorAll('div');
    projectList.forEach((p) => {
      p.classList.remove('selected');
    });
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
    createTaskDetails,
    removeTaskDetails,
    removeClass,
  };
})();

export default dom;
