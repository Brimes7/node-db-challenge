const db = require("../data/dbConfig.js");

module.exports = {
    find,
    findTasks,
    findResources,
    add,
    addResource,
    addTask
};

function find() {
    return db("projects");
}

function findResources() {
    return db("resources");
}

function findTasks() {
    return db("tasks as t")
        .join("projects as p", "p.id", "t.project_id")
        .select(
        "p.project_name",
        "p.description",
        "t.id",
        "t.description",
        "t.completed",
        "t.notes"
    )
    .orderBy("p.id");
}
//Adds the project

function add(project) {
    const [newProjectId] = db("projects").insert(project);
    return newProjectID;
}
//Adds The Resources

function addResource(resource) {
    const [newResourceId] = db("resources").insert(resource);
    return newResourceId;
}
//Adds the Task

function addTask(task) {
    const [newTaskId] = db("tasks").insert(task);
    return newTaskId;
}

//needs A `project` is what needs to be done. We want to store the following data about a `project`:

// - [ ] a unique Id.
// - [ ] a name. This column is required.
// - [ ] a description.
// - [ ] a boolean that indicates if the project has been completed. This column cannot be NULL, the default value should be `false`.

