import { Schema, model } from 'mongoose';

interface IUser {
    email: string;
    password: string;
    name: string;
    handle: string;
}

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    handle: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
}, {
    timestamps: true
});

export const User = model<IUser>('User', userSchema);

