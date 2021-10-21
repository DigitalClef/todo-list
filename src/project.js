function Project(name) {
    this.name = name;
}

let userInput = prompt('Enter task name');

const addProject = new Project(userInput);
console.log(addProject);

export {Project};