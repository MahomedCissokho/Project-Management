import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// Define the Permission schema
const permissionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Create and export the Permission model
const Permission = model('Permission', permissionSchema);

export default Permission;
