import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AttendancesSchema = new Schema({
    dateCheck: {
        type:Date,
        default:Date.now
    },
    status: {
        type:Boolean,
        default:true
    },
    note: String,
    workingHours: Number,
    shift:{
        type:Number,
        default:1
    },
    checkIn: {
        type:Date,
        default:Date.now
    },
    checkOut: Date,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
    },
    isDisable: {
        type: Boolean,
        default: false
    }
},{timestamps:true});