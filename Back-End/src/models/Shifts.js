import mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const ShiftsSchema = new Schema({
    shiftName: String,
    timeStart: Date,
    timeEnd: Date,
    createAt: { type: Date, default: Date.now },
    isDisable: {
        type: Boolean,
        default: false
    }
});