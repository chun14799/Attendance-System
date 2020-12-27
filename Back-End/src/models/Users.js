import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UsersSchema = new Schema({
    fullname: String,
    image: {
        type:String,
        default:"https://i.ibb.co/T1ZFNt4/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
    },
    pin: String,
    email:{
        type:String
    },
    phone:{
        type:String
    },
    dob: Date,
    job:{
        default:"SINH VIEN",
        type:String
    },
    homeAddress: String,
    grossSalary: Number,
    netSalary: Number,
    note: String,
    department: {
        type:String
    },
    password:{
        type:String,
        default:"admin"
    },
    roleId: {
        type:Number,
        default:0
    },
    isDisable: {
        type: Boolean,
        default: false
    }
},{timestamps:true});