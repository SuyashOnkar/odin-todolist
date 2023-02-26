import './reset.css';
import './style.css';
import Project from './Project';
import Task from './Task';
import Dom from './dom';

// Add project
document.querySelector('#addProjectButton').addEventListener('click', () => {
  Dom.showProjectForm();
  document.querySelector('.newProjectForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const newProject = new Project(
      document.querySelector('#newProjectName'.value)
    );
    Dom.addProjectToDom(newProject.Name);
  });
});
