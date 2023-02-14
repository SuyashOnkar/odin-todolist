import './style.css';
import './reset.css';
import { tasks, projects, project_list } from './logic.js';

console.log('hello randi');

// IFEE to create the dom
(function indexPage() {
  const titleDiv = document.createElement('div');
  titleDiv.classList.add('title');
  titleDiv.innerHTML = '<h1> ToDo List </h1>';
  document.body.appendChild(titleDiv);

  const heroDiv = document.createElement('div');
  heroDiv.classList.add('hero');
  document.body.appendChild(heroDiv);

  //SIDEBAR

  const sidebarDiv = document.createElement('div');
  sidebarDiv.classList.add('sidebar');
  heroDiv.appendChild(sidebarDiv);

  const sidebarTitle = document.createElement('div');
  sidebarTitle.classList.add('sidebarTitle');
  sidebarTitle.textContent = 'Projects';
  sidebarDiv.appendChild(sidebarTitle);

  const sidebarProjectsDiv = document.createElement('div');
  sidebarProjectsDiv.classList.add('sidebarProjectsDiv');
  sidebarDiv.appendChild(sidebarProjectsDiv);

  //   const defaultList = document.createElement('div');
  //   defaultList.classList.add('projects');
  //   defaultList.innerHTML = '<p> Default </p>';
  //   sidebarProjectsDiv.appendChild(defaultList);

  const addProjects = document.createElement('div');
  addProjects.classList.add('projects');
  addProjects.innerHTML = '<buttom class="addButton"> + </>';
  sidebarProjectsDiv.appendChild(addProjects);

  function addProject(project) {
    const addProjects = document.createElement('div');
    addProjects.classList.add('projects', 'actualProjects');
    console.log(project.getName);
    addProjects.innerHTML = `<p> ${project.getName} </p>`;
    sidebarProjectsDiv.appendChild(addProjects);

    //Change task list when clicking on a project
    const actualProjects = document.querySelectorAll('.actualProjects');
    actualProjects[actualProjects.length - 1].addEventListener('click', (e) => {
      console.log(e.target.innerText);
      console.log(project_list);
      for (let i of project_list) {
        if (i.getName == e.target.innerText) {
          console.log(i);
          generateTasksandAddtoDom(i);
          selectedProject = i;
        }
      }
      //
    });
  }

  //ADD A DEFAULT PROJECT
  const default_project = new projects('Default');
  addProject(default_project);

  addProjects.addEventListener('click', () => {
    //Create an input box to take input
    const projectInputDiv = document.createElement('div');
    projectInputDiv.setAttribute('id', 'projectInputDiv');
    projectInputDiv.innerHTML =
      '<form id="submitProject"><p>Name</p><input id="projectName"><input  type="submit"></form>';
    document.body.appendChild(projectInputDiv);

    // Add Project on submit
    const submitProject = document.getElementById('submitProject');
    submitProject.addEventListener('submit', (e) => {
      const new_project = new projects(
        document.getElementById('projectName').value
      );
      addProject(new_project);
      document.body.removeChild(projectInputDiv);
      e.preventDefault();
    });
  });

  //Tasks
  const tasksDiv = document.createElement('div');
  tasksDiv.classList.add('tasksDiv');
  heroDiv.appendChild(tasksDiv);

  const taskDisplayDiv = document.createElement('div');
  taskDisplayDiv.classList.add('taskDisplayDiv');

  //   const d = new Date('2023-02-12');
  //   const task1 = new tasks('hello', 'this is a task', d, 'high');
  //   const task2 = new tasks('hello1', 'description', d, 'low');
  //   default_project.addTasks(task1);
  //   default_project.addTasks(task2);

  console.log(default_project.getTaskList);

  function generateTasksandAddtoDom(project) {
    taskDisplayDiv.replaceChildren();
    project.getTaskList.forEach((p) => {
      console.log(p.getName);
      const task = document.createElement('div');
      const taskTitle = document.createElement('p');
      taskTitle.innerText = p.getName;
      task.appendChild(taskTitle);
      taskDisplayDiv.appendChild(task);
    });
  }

  generateTasksandAddtoDom(default_project);

  tasksDiv.appendChild(taskDisplayDiv);

  const taskInputDiv = document.createElement('div');
  taskInputDiv.classList.add('taskInputDiv');
  taskInputDiv.innerHTML =
    '<form id="submitForm"><input class="textBox" required></input><input type="submit"></input></form>';
  tasksDiv.appendChild(taskInputDiv);

  let selectedProject = default_project;

  const submitForm = document.getElementById('submitForm');
  submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskTitle = document.querySelector('.textBox').value;
    const newTask = new tasks(taskTitle);
    selectedProject.addTasks(newTask);
    generateTasksandAddtoDom(selectedProject);
    submitForm.reset();
  });
})();

// const d = new Date('2023-02-12');
// const task1 = new tasks('hello', 'this is a task', d, 'high');
// const task2 = new tasks('hello1', 'description', d, 'low');

// console.log(task1.getDueDate);

// const project1 = new projects('project1');

// project1.addTasks(task1);
// project1.addTasks(task2);

// console.log(project1.getTaskList);
