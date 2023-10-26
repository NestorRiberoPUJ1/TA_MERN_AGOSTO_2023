const express = require('express');
const router = express.Router();
const companyController = require("../Controllers/company.controllers")


router.post("", companyController.createCompany);
router.get("", companyController.getCompanies);

router.get("/new", companyController.returnNewCompany);

router.get("/:id", companyController.getCompanyById);

router.put("", companyController.updateCompany);
router.delete("", companyController.deleteCompany);

/* Actividad */




module.exports = router;