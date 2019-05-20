const Vaccines = require('../models/Vaccines');
// Defining methods for the vaccineController
module.exports = {
    findUser: (req, res) => {
        console.log('Direct body coming in', req.body);
        Vaccines.find({
            // name: req.body.name,
            needed: req.body.needed,
            age: req.body.age
        }).then((data) => {
            console.log('This is what was returned', data);
            // if (!Array.isArray(data) || !data.length) {
            //     return res.status(422).json({ msg: "Vaccine not found" })
            // } else {
                res.json(data);
            // }
        });
    },
    findById: (req, res) => {
        Vaccines
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        console.log('rea.body', req.body);
        Vaccines
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    update: (req, res) => {
        Vaccines
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: (req, res) => {
        Vaccines
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
