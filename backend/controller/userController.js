import User from '../model/userModal.js';



export const create = async (req, res) => {
    try {
        const { name, email, address } = req.body;

        if (!name || !email || !address) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new User({ name, email, address });
        const saveData = await newUser.save();

        res.status(201).json(saveData);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();

        if (!users.length) {
            return res.status(404).json({ message: "No users found" });
        }

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};

export const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};


export const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const updatedData = await User.findByIdAndUpdate(id, req.body, {
            new: true
        })

        res.status(200).json(updatedData);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }

};

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const deletedUser = await User.findByIdAndDelete(id);
        res.status(200).json({ message: "User Deleted Successfully" })
    }
    catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}
