import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Customer name is mandatory'],
        maxlength:[20,'The maximum length is 20 charachters']
    },
    email:{
        type:String,
        required:[true,'Customer email is required']

    },
    phoneNumber:{
        type:String,
        required:[true,'Phone Number is mandatory'],
        maxlength:[10,'The maximum length is 10 charachters']
    }
});

const Customer = mongoose.model('Customer',customerSchema);

export default Customer;