export class tasks {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  get getName() {
    return this.title;
  }
  get getDescription() {
    return this.description;
  }
  get getDueDate() {
    return this.dueDate;
  }
  get getPriority() {
    return this.priority;
  }
}

export const project_list = [];

export class projects {
  constructor(name) {
    this.name = name;
    project_list.push(this);
  }

  get getName() {
    return this.name;
  }

  get getTaskList() {
    return this.taskList;
  }

  taskList = [];

  addTasks(task) {
    this.taskList.push(task);
  }
}