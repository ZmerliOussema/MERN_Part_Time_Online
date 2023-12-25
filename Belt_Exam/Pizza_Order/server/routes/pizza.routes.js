const PizzaController = require('../controllers/pizza.controller');

module.exports = app => {
    app.get('/api/pizzas', PizzaController.findAllPizzas);
    app.get('/api/pizzas/:id', PizzaController.findOneSinglePizza);
    app.put('/api/pizzas/:id', PizzaController.updateExistingPizza);
    app.post('/api/pizzas', PizzaController.createNewPizza);
    app.delete('/api/pizzas/:id', PizzaController.deleteAnExistingPizza);
}
