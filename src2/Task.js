export default class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  get Name() {
    return this.title;
  }

  set Title(name) {
    this.title = name;
  }

  get Description() {
    return this.description;
  }

  set Description(name) {
    this.description = name;
  }

  get DueDate() {
    return this.dueDate;
  }

  set DueDate(name) {
    this.dueDate = name;
  }

  get Priority() {
    return this.priority;
  }

  set Priority(name) {
    this.priority = name;
  }
}
