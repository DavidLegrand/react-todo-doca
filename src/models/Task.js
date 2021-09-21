export const priorities = {
  low: "Basse",
  medium: "Moyenne",
  high: "Haute",
};

export default class TaskModel {
  id;
  createdBy = 1;
  assignedTo = 1;
  title;
  description;
  completed;
  created;
  deadline;
  _priority;

  constructor(obj = {}) {
    var defaults = {
      id: this.id,
      createdBy: this.createdBy,
      assignedTo: this.assignedTo,
      title: "",
      description: "",
      completed: false,
      created: new Date(),
      deadline: new Date(new Date().setDate(new Date().getDate() + 7)),
      _priority: priorities.medium,
    };
    if (obj.created) {
      obj.created = new Date(obj.created);
    }
    if (obj.deadline) {
      obj.deadline = new Date(obj.deadline);
    }
    Object.assign(this, { ...defaults, ...obj });
  }

  get priority() { return this._priority }
  set priority(val) { this._priority = priorities[val] ? priorities[val] : priorities.medium }

  getRemaining() {
    return Math.ceil(
      (this.deadline.getTime() - new Date().getTime()) / (1000 * 3600 * 24)
    );
  }
  getStatus() {
    return this.completed ? "Terminée" : this.priority
  }
  getCompleted() { return this.completed ? "Terminée" : "En cours" }
  getVariant() {
    let variant;
    switch (this.priority) {
      case priorities.low:
        variant = "success"; break;
      case priorities.high:
        variant = "danger"; break;
      default:
        variant = "warning"; break;
    }
    variant = this.completed ? "light" : variant
    return variant
  }
}