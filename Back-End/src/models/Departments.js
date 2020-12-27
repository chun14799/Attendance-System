import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const DepartmentsSchema = new Schema({
    departmentName: String,
    shiftId: Number,
    createAt: { type: Date, default: Date.now },
    isDisable: {
        type: Boolean,
        default: false
    }
});