const projectList = [];

export function searchProject(projectName) {
  return projectList.find((x) => x.getName === projectName);
}

export class Project {
  constructor(name) {
    this.name = name;
    this.taskList = [];
    projectList.push(this);
  }

  get getName() {
    return this.name;
  }

  addTask(task) {
    this.taskList.push(task);
  }

  get getTaskList() {
    return this.taskList;
  }

  searchTask(taskName) {
    return this.taskList.find((x) => x.getName === taskName);
  }

  removeTask(taskName) {
    this.taskList = this.taskList.filter((t) => t.getName !== taskName);
  }
}
