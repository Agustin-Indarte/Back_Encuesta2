import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim: true
    },createdAt:{
        type:Date,
        default: Date.now
    }
},{

    versionKey:false
})

export default mongoose.model('Category', categorySchema);