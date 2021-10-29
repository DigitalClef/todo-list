const projectName = document.querySelector('#project-name');
const projectSubmit = document.querySelector('#project-submit');
const newProject = document.querySelector('#new-project');

projectSubmit.onclick = function() {
    console.log(projectName.value);
    newProject.reset();
};

export {Project};