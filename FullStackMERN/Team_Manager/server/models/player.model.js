const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    playerName: { 
        type: String,
        minLength: [2, 'Name must be at least 2 characters in length']
    },
    position: { 
        type: String,
        enum: ['forward', 'midfielder', 'defender', 'goalkeeper']
    }
}, { timestamps: true });
module.exports = mongoose.model('Player', PlayerSchema);

