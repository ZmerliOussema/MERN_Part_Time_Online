const JokeController = require('../controllers/jokes.controller')

module.exports = app => {
    app.get('/api/jokes', JokeController.getAllJokes);
    app.get('/api/jokes/:id', JokeController.getOneSingleJoke);
    app.put('/api/jokes/:id', JokeController.updateExistingJoke);
    app.post('/api/jokes', JokeController.createNewJoke);
    app.delete('/api/jokes/:id', JokeController.deleteAnExistingJoke);
}