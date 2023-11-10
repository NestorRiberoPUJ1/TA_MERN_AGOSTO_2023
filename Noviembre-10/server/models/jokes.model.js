const mongoose = require('mongoose');


const jokeSchema = new mongoose.Schema({
    joke: {
        type: String,
        required: [true, 'Joke is required'],
        trim: true,
        minLength: [10, 'Min Size is 10']
    },

}, { timestamps: true })

const Joke = mongoose.model('Project', jokeSchema);

module.exports = Joke;