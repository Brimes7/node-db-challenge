const express = require("express");

const Projects = require("./projectModel.js");

const router = express.Router();

// get projects
router.get("/", async (req, res) => {
    try {
        const projects = await Projects.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: "Sorry, can't find any projects." });
    }
});

// get resources
router.get("/resources", async (req, res) => {
    try {
        const resources = await Projects.findResources();
        res.json(resources);
    } catch (err) {
        res.status(500).json({ message: "Sorry no resources for youuuu :(" });
    }
});

// get all tasks
router.get("/tasks", async (req, res) => {
    try {
        const tasks = await Projects.findTasks();

        if (tasks.length) {
        res.json(tasks);
        } else {
        res.status(404).json({ message: "No tasks found" });
        }
    } catch (err) {
        res.status(500).json({ message: "No tasks found enjoy your vacation!" });
    }
});

// add project
router.post("/", async (req, res) => {
    const projectData = req.body;

    try {
        const project = await Projects.add(projectData);
        res.status(201).json(project);
    } catch (err) {
        res.status(500).json({ message: "Looks like that project wasn't created, wanna try again?" });
    }
});

// add resource
router.post("/resources", async (req, res) => {
    const resourceData = req.body;

    try {
        const resource = await Projects.addResource(resourceData);
        res.status(201).json(resource);
    } catch (err) {
        res.status(500).json({ message: "You must have forgotten something. No Resource found." });
    }
});

// add task
router.post("/tasks", async (req, res) => {
    const taskData = req.body;

    try {
        const task = await Projects.addTask(taskData);
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json({ message: "We regret to inform you this task could not be created." });
    }
});

module.exports = router;