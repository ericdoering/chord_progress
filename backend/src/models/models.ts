import { Schema, model } from 'mongoose';


const User = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
        },
        chordProgressions: [{
            key: {
                type: String,
                required: true
            },
            style: {
                type: String,
                required: true
            }

        }],
    }
);

export { User };