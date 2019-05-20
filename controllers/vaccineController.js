const Vaccines = require('../models/Vaccines');
// Defining methods for the vaccineController
module.exports = {
    find: (req, res) => {
        console.log('Direct body coming in', req.body);
        Vaccine.find({
            name: req.body.name,
            dose: req.body.dose
        }).then((data) => {
            console.log('This is what was returned', data);
            if (!Array.isArray(data) || !data.length) {
                return res.status(422).json({ msg: "Vaccine not found" })
            } else {
                res.json(data);
            }
        });
    },
    findById: (req, res) => {
        Vaccine
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        console.log('rea.body', req.body);
        Users
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    update: (req, res) => {
        Users
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: (req, res) => {
        Users
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
