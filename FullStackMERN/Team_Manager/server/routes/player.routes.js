const PlayerController = require('../controllers/player.controller');

module.exports = app => {
    app.get('/api/players', PlayerController.findAllPlayers);
    app.get('/api/players/:id', PlayerController.findOneSinglePlayer);
    app.put('/api/players/:id', PlayerController.updateExistingPlayer);
    app.post('/api/players', PlayerController.createNewPlayer);
    app.delete('/api/players/:id', PlayerController.deleteAnExistingPlayer);
}
