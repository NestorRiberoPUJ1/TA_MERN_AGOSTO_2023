const Joke = require("../models/jokes.model");


module.exports.createJoke = async (req, res) => {
    const { joke, } = req.body;
    console.log(req.body);
    const newJoke = new Joke({
        joke: joke,
    });
    try {
        const result = await newJoke.save();
        res.json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports.getJokes = async (req, res) => {
    try {
        const jokes = await Joke.find();
        res.json(jokes);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports.getJokeById = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const joke = await Joke.findById(id);
        console.log(joke);
        if (!joke) {
            res.status(404).json({ error: 'Joke not found.' });
            return;
        }
        res.json(joke);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports.updateJoke = async (req, res) => {
    const { id } = req.params;
    try {
        const joke = await Joke.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!joke) {
            res.status(404).json({ error: 'Joke not found.' });
            return;
        }

        res.json(joke);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports.deleteJoke = async (req, res) => {
    const { id } = req.params;
    try {
        const joke = await Joke.findByIdAndDelete(id);
        if (!joke) {
            res.status(404).json({ error: 'Joke not found.' });
            return;
        }
        res.json({ message: 'Joke deleted successfully.' });
    } catch (error) {
        res.status(500).json(error);
    }
}