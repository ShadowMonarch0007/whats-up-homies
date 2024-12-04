import mongoose from "mongoose";

const userMessageSchema = new mongoose.Schema(
    {
        fname: {
            type: String,
            required: true, 
        },
        lname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        mobileNumber: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true, 
    }
);

const Message = mongoose.models.Message || mongoose.model("Message", userMessageSchema);

export default Message;
