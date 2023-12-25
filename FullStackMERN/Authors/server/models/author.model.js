const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, 'The name is required'],
        minLength: [3, 'The name must be at least 3 characters']
    }
    
}, { timestamps: true });
module.exports = mongoose.model('Person', PersonSchema);

