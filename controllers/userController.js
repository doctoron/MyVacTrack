const Users = require('../models/Users');
// Defining methods for the userController
module.exports = {
    findUser: (req, res) => {
        console.log('Direct body coming in', req.body);
        Users.find({
            email: req.body.email,
            password: req.body.password
        }).then((data) => {
            console.log('This is what was returned', data);
            if (!Array.isArray(data) || !data.length) {
                return res.status(422).json({ msg: "Email/Password combination not found" })
            } else {
                res.json(data);
            }
        });
    },
    findById: (req, res) => {
        Users
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        console.log('res.body', req.body);
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
