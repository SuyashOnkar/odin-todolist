// File for dom manipulations ONLY

const Dom = (() => {
  function createElem(name, className) {
    const elem = document.createElement(name);
    if (className) elem.classList.add(className);

    return elem;
  }

  // Append a new project to the projectList element in dom.
  function addProjectToDom(projectName) {
    const elem = createElem('div', 'project');
    elem.textContent = projectName;
    const projectList = document.querySelector('.projectList');
    projectList.append(elem);
  }

  function addTaskToDom(taskName, taskDate) {
    const taskTemplate = document.querySelector('#taskTemplate');
    taskTemplate.content.querySelector('p').textContent = taskName;
    taskTemplate.content.querySelector('span').textContent = taskDate;
    const clone = taskTemplate.content.cloneNode(true);

    const taskList = document.querySelector('.taskList');
    taskList.append(clone);
  }

  function showProjectForm() {
    const newProjectTemplate = document.querySelector('#newProjectTemplate');
    const clone = newProjectTemplate.content.cloneNode(true);

    const projectList = document.querySelector('.projectList');
    projectList.append(clone);
  }

  function hideProjectForm() {
    const projectList = document.querySelector('.projectList');
    projectList.removeChild(document.querySelector('.newProjectForm'));
  }

  function showTaskForm() {
    const newTaskTemplate = document.querySelector('#newTaskTemplate');
    const clone = newTaskTemplate.content.cloneNode(true);

    const taskContainer = document.querySelector('.taskContainer');
    taskContainer.append(clone);
  }

  function hideTaskForm() {
    const taskContainer = document.querySelector('.taskContainer');
    taskContainer.removeChild(document.querySelector('.newTaskForm'));
  }

  function generateTasks(taskList) {
    const taskListDom = document.querySelector('.taskList');
    taskListDom.replaceChildren('');
    taskList.forEach((task) => {
      addTaskToDom(task);
    });
  }

  function switchProject() {}

  return {
    createElem,
    addProjectToDom,
    addTaskToDom,
    showProjectForm,
    hideProjectForm,
    showTaskForm,
    hideTaskForm,
  };
})();

export default Dom;
