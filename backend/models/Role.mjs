import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// Define the Role schema
const roleSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    permissions: [{
        type: Schema.Types.ObjectId,
        ref: 'Permission'
    }]
}, { timestamps: true });

// Create and export the Role model
const Role = model('Role', roleSchema);

export default Role;
