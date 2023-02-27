export default class Project {
  constructor(name, taskList = []) {
    this.name = name;
    this.taskList = taskList;
  }

  get Name() {
    return this.name;
  }

  addTask(task) {
    this.taskList.push(task);
  }

  get TaskList() {
    return this.taskList;
  }

  searchTask(taskName) {
    return this.taskList.find((x) => x.getName === taskName);
  }

  removeTask(taskName) {
    this.taskList = this.taskList.filter((t) => t.getName !== taskName);
  }
}
