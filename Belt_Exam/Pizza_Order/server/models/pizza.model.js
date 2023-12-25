const mongoose = require('mongoose');

const PizzaSchema = new mongoose.Schema({
    pizzaName: {
        type: String,
        enum: ['Pepperoni', 'Cheese', 'Combination', 'Philly Cheese Steak', 'Hawaiian', 'Veggie']
    },
    size: {
        type: String,
        enum: ['Single', 'Small', 'Medium', 'Large']
    },
    notes: {
        type: String,
        maxLength: [25, 'Notes must contain max of 25 characters']
    },
    deliveryTime: {
        type: String,
        required: [true, 'Delivery date is required']
    }
}, {timestamps: true});

const Pizza = mongoose.model('Pizza', PizzaSchema);

module.exports = Pizza;
