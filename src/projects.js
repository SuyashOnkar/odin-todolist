const projectList = [];

export function searchProject(projectName) {
  return projectList.filter((x) => x.getName === projectName);
}

export class Project {
  constructor(name) {
    this.name = name;
  }

  addToProjectList() {
    projectList.push(this);
  }

  get getName() {
    return this.name;
  }

  taskList = [];

  addTask(task) {
    this.taskList.push(task);
  }

  get getTaskList() {
    return this.taskList;
  }
}
