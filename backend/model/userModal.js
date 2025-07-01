import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
    },
    address: {
        type: String,
        required: [true, "Address is required"]
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);
export default User;