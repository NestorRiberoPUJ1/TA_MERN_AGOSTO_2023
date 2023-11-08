const express = require('express');
const router = express.Router();
const projectController = require("../controllers/project.controllers")


router.post("", projectController.createProject);
router.get("", projectController.getProjects);


router.get("/:id", projectController.getProjectById);

router.put("/:id", projectController.updateProject);
router.delete("/:id", projectController.deleteProject);

/* Actividad */




module.exports = router;