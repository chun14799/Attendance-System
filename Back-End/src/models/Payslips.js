import mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const PayslipsSchema = new Schema({
    payDate: Date,
    workingSalary: Number,
    publicSalary: Number,
    otherSalary: Number,
    anualLeaveSalary: Number,
    overtimeSalary: Number,
    allowance: Number,
    bonus: Number,
    tax: Number,
    deductionSalary: Number,
    createAt: { type: Date, default: Date.now },
    isDisable: {
        type: Boolean,
        default: false
    }
});