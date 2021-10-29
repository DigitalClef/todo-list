function Task(name, description, priority) {
    this.name = name;
    this.description = description;
    this.priority = priority;
}

const addTask = new Task('Homework', 'Finish math problems 1-33 odd', 'HIGH');

export {Task};