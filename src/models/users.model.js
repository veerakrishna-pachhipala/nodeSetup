import mongoose, { Schema } from 'mongoose';

let userSchema = new Schema(
    {
        name: {
            type: String,
            minlength: 4,
            maxlength: 1024,
            required: [true, "Name of user is Required"]
        },
        email:{
            type:String,
            required: [true, "Email is  Required"],
            unique:true
        },
        password: {
            type: String,
            minlength: 10,
            required: [true, "Password is Required"]
        },
        access_level: {
            type: Number,
            enum: [1, 2],
            default: 1
        },
        status: {
            type: Number,
            enum: [1, 2, 3, 4, 5, 6],
            default: 1
        },
        active: {
            type: Boolean,
            default: true
        },
        phone:{
            type:Number,
            required:true
        }
    },
    {
       timestamps:{
           createdAt:'created_at',
           updatedAt:'updated_at'
       }
    }
);


let User = mongoose.model('user', userSchema);

export default User;