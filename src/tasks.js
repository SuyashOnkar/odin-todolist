export default class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  get getName() {
    return this.title;
  }

  set setTitle(name) {
    this.title = name;
  }

  get getDescription() {
    return this.description;
  }

  set setDescription(name) {
    this.description = name;
  }

  get getDueDate() {
    return this.dueDate;
  }

  set setDueDate(name) {
    this.dueDate = name;
  }

  get getPriority() {
    return this.priority;
  }

  set setPriority(name) {
    this.priority = name;
  }
}
