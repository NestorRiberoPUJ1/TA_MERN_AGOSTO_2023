const mongoose = require('mongoose');


const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minLength: [3, 'Min Size is 3']
    },
    due_time: {
        type: Date,
        required: [true, 'Due Time is required'],

    },
    status: {
        type: String,
        required: [true, 'Status is required'],
        enum: ['backlog', 'in progress', 'completed'],
        default: 'backlog'
    },

}, { timestamps: true })

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;