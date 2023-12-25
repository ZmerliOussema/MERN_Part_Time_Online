const Pizza = require('../models/pizza.model');

module.exports.findAllPizzas = (req, res) => {
    Pizza.find()
        .then((allDaPizzas) => {
            res.json({ pizzas: allDaPizzas })
        })
        .catch((err) => {
            res.status(500).json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneSinglePizza = (req, res) => {
    Pizza.findOne({ _id: req.params.id })
        .then(oneSinglePizza => {
            res.json({ pizza: oneSinglePizza })
        })
        .catch((err) => {
            res.status(500).json({ message: 'Something went wrong', error: err })
        });}

module.exports.createNewPizza = (req, res) => {
    Pizza.create(req.body)
        .then(newlyCreatedPizza => {
            res.json({ pizza: newlyCreatedPizza })
        })
        .catch((err) => {
            res.status(500).json({ message: 'Something went wrong', error: err })
        });}

module.exports.updateExistingPizza = (req, res) => {
    Pizza.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPizza => {
            res.json({ pizza: updatedPizza })
        })
        .catch((err) => {
            res.status(500).json({ message: 'Something went wrong', error: err })
        });}

module.exports.deleteAnExistingPizza = (req, res) => {
    Pizza.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
