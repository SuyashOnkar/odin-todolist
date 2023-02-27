const projectList = [];

export function searchProject(projectName) {
  return projectList.find((x) => x.getName === projectName);
}

export class Project {
  constructor(name, taskList) {
    this.name = name;
    if (taskList) {
      this.taskList = taskList;
    } else {
      this.taskList = [];
    }
    projectList.push(this);
    window.localStorage.setItem(this.getName, JSON.stringify(this.getTaskList));
  }

  get getName() {
    return this.name;
  }

  addTask(task) {
    this.taskList.push(task);
    window.localStorage.setItem(this.getName, JSON.stringify(this.getTaskList));
  }

  get getTaskList() {
    return this.taskList;
  }

  searchTask(taskName) {
    return this.taskList.find((x) => x.getName === taskName);
  }

  removeTask(taskName) {
    this.taskList = this.taskList.filter((t) => t.getName !== taskName);
    window.localStorage.setItem(this.getName, JSON.stringify(this.getTaskList));
  }
}
