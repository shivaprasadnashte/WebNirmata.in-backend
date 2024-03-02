import mongoose from "mongoose";

const componentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

const Component = mongoose.model("Component", componentSchema);

export default Component;