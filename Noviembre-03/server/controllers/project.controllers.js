const Project = require("../models/project.model");


module.exports.createProject = async (req, res) => {
    const { name, due_time } = req.body;
    console.log(req.body);
    const project = new Project({
        name: name,
        due_time: due_time,
    });
    try {
        const result = await project.save();
        res.json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ due_time: 1 });
        res.json(projects);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports.getProjectById = (req, res) => {
    const { id } = req.params;
    try {
        const project = Project.findById(id);
        if (!project) {
            res.status(404).json({ error: 'Project not found.' });
            return;
        }
        res.json(project);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports.updateProject = async (req, res) => {
    const { id } = req.params;
    try {
        const project = await Project.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!project) {
            res.status(404).json({ error: 'Project not found.' });
            return;
        }

        res.json(project);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports.deleteProject = async (req, res) => {
    const { id } = req.params;
    try {
        const project = await Project.findByIdAndDelete(id);
        if (!project) {
            res.status(404).json({ error: 'Project not found.' });
            return;
        }
        res.json({ message: 'Project deleted successfully.' });
    } catch (error) {
        res.status(500).json(error);
    }
}