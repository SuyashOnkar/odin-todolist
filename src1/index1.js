// // Main file

// // I have to seperate the application logic from DOM stuff

// // 1 file to deal with todos? 1 file to deal with projects?
// // with different functions and all for application logic and dom
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
  removeAddTaskForm,
} from './domOps';

// // const task1 = new Task();

// // const project1 = new Project('project1');
// // const project2 = new Project('project2');

// // project1.addTask(task1);

// // addProject('l');
// // addTask('r');
// // createAddProjectForm();
// // createAddTaskForm();

// // console.log(projectList);

// // console.log(searchProject('project1'));

// // Adding the default project manually
// // (I need to fix this code)

// const defaultProject = new Project('Default');
// defaultProject.addToProjectList();
// addProjectToDom(defaultProject.getName);

// let selectedProject = defaultProject;

// const projectSelectEvent = () => {
//   const project = getElem('.projectList').lastChild;
//   project.addEventListener('click', (e) => {
//     console.log(e.target.innerText);
//     selectedProject = searchProject(e.target.innerText);
//     console.log(selectedProject);
//     generateTasks(selectedProject.getTaskList);
//     project.classList.add('selected');
//   });
// };

// projectSelectEvent();

// const submitProjectNameEvent = () => {
//   const addProjectForm = getElem('.newProjectForm');
//   addProjectForm.addEventListener('submit', (e) => {
//     const projectName = getElem('#newProjectName').value;
//     // I need to group these functions together
//     const project = new Project(projectName);
//     project.addToProjectList();
//     addProjectToDom(projectName);
//     // ^^
//     projectSelectEvent();
//     removeAddProjectForm();
//     e.preventDefault();
//   });
// };

// const addProjectEvent = () => {
//   const addProjectButton = getElem('#addProjectButton');
//   addProjectButton.addEventListener('click', () => {
//     const projectListDom = getElem('.projectList');
//     if (projectListDom.querySelector('form')) {
//       removeAddProjectForm();
//     } else {
//       createAddProjectForm();
//       /**
//        * Currently running the submit project Event only when
//        * add Project event is called
//        */
//       submitProjectNameEvent();
//     }
//   });
// };
// // I cant figure a way to run this other than this.
// addProjectEvent();
// // ************************** //

// const submitTaskEvent = () => {
//   const addTaskForm = getElem('.newTaskForm');
//   addTaskForm.addEventListener('submit', (e) => {
//     // I need to group these functions together
//     const title = getElem('#taskName').value;
//     const description = getElem('#taskDescription').value;
//     const dueDate = getElem('#dueDate').value;
//     const priority = getElem('.taskPriority').value;
//     const task = new Task(title, description, dueDate, priority);
//     console.log(task);
//     addTaskToDom(task.getName);
//     selectedProject.addTask(task);
//     console.log(selectedProject);
//     // ^^
//     // taskSelectEvent();
//     removeAddTaskForm();
//     e.preventDefault();
//   });
// };

// const addTaskEvent = () => {
//   const addTaskButton = getElem('#addTaskButton');
//   addTaskButton.addEventListener('click', () => {
//     const taskColumnDom = getElem('.taskColumn');
//     if (taskColumnDom.querySelector('form')) {
//       removeAddTaskForm();
//     } else {
//       createAddTaskForm();
//       /**
//        * Currently running the submit project Event only when
//        * add Project event is called
//        */

//       submitTaskEvent();
//     }
//   });
// };

// addTaskEvent();

// /**
//  * Time for some messy code I think because:
//  *  1. I need to implement a selected project function
//  *      so we can select a project and then generate its
//  *      todo's appropriately.
//  *  2. Then only can i add the task listeners because tasks
//  *      are supposed to be added to the SELECTED PROJECT.
//  */

const addProjectEvent = () => {
  const addProjectButton = getElem('#addProjectButton');
  addProjectButton.addEventListener('click', () => {
    const projectListDom = getElem('.projectList');
    if (projectListDom.querySelector('form')) {
      removeAddProjectForm();
    } else {
      createAddProjectForm();

      const addProjectForm = getElem('.newProjectForm');
      addProjectForm.addEventListener('submit', (e) => {
        const projectName = getElem('#newProjectName').value;
        const project = new Project(projectName);
        addProjectToDom(project.getName);

        const lastProject = getElem('.projectList').lastChild;
        lastProject.addEventListener('click', (e1) => {
          const selectedProject = searchProject(e1.target.innerText);
          console.log(selectedProject);
          const taskList = selectedProject.getTaskList;
          console.log(selectedProject.getTaskList);
          const taskListDom = getElem('.taskList');
          taskListDom.replaceChildren('');
          taskList.forEach((task) => {
            addTaskToDom(task);
          });

          e1.classList.add('selected');
        });

        removeAddProjectForm();
        e.preventDefault();
      });
    }
  });
};

addProjectEvent();
