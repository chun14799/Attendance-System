import mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const RolesSchema = new Schema({
    roleName: String,
    note: String,
    description: String,
    createAt: { type: Date, default: Date.now },
    isDisable: {
        type: Boolean,
        default: false
    }
});