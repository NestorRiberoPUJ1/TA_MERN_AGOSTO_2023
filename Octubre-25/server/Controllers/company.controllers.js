

module.exports.createCompany = (req, res) => {

    res.json({ message: "created company" });
}

module.exports.getCompanies = (req, res) => {

    res.json({ message: "got all companies" });
}

module.exports.getCompanyById = (req, res) => {
    const { id } = req.params
    res.json({ message: `Got company #${id}` });
}

module.exports.updateCompany = (req, res) => {

    res.json({ message: "updated company" });
}

module.exports.deleteCompany = (req, res) => {

    res.json({ message: "deleted company" });
}


module.exports.returnNewCompany = (req, res) => {

    res.json({ name: "IBM", email: "gerencia@ibm.com" });
}