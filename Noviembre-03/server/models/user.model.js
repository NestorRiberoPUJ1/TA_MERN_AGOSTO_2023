const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists'],
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
/*     role: {
        type: String,
        enum: ['admin', 'manager', 'user'],
        default: 'user'
    }, */
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    try {
        // Generate a salt
        const salt = await bcrypt.genSalt(10);

        // Hash the password with the salt
        const hash = await bcrypt.hash(this.password, salt);

        // Replace the password with the hash
        this.password = hash;

        next();
    } catch (error) {
        next(error);
    }
});

userSchema.pre(["findOneAndUpdate"], async function (next) {
    const data = this.getUpdate();
    if (data.password) {
        try {
            // Generate a salt
            const salt = await bcrypt.genSalt(10);

            // Hash the password with the salt
            const hash = await bcrypt.hash(data.password, salt);

            // Replace the password with the hash
            data.password = hash;

            next();
        } catch (error) {
            next(error);
        }
    }
    next();

});

const User = mongoose.model('User', userSchema);

module.exports = User;
