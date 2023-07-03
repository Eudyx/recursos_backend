const User = require('../models/userModel');
const Source = require('../models/sourceModel');

const getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await User.find().exec();
        if(!allUsers) return res.status(204).json({ 'message': 'No content' });

        console.log(allUsers);

        res.json(allUsers);
    } catch (err) {
        console.error(err);
    }
}

const getUserById = async (req, res, next) => {
    const { id } = req.params;
    if(!id) return res.status(400).json({ 'message': 'ID param is required' });

    try {
        const foundUser = await User.findById(id).exec();
        if(!foundUser) return res.status(204).json({ 'message': 'User does not exist' });
        console.log(foundUser);
        res.json(foundUser);
    } catch (err) {
        console.error(err);
    }
}

const createUser = async (req, res, next) => {
    const { user, password } = req.body;
    if(!user) return res.status(400).json({ 'message': 'All the fields are required' });

    const foundUser = await User.findOne({ user: user });
    if(foundUser) return  res.sendStatus(409).json({ "message": "User taken" });

    try {
        
        let response = {};

        if(password) {
            const result = await User.create({
                user,
                password
            });

            response = { 
                message: 'User created',
                result
            }
        } else {
            const result = await User.create({
                user
            });

            response = { 
                message: 'User created',
                result
            }

        }

        console.log(response);
        res.json(response);
    } catch (err) {
        console.error(err);
    }
}

const deleteUser = async (req, res) => {
    const { name } = req.params;

    if(!name) return res.status(400).json({ "message": "User is required" });

    const foundUser = await User.findOne({ user: name }).exec();

    console.log(foundUser);

    if(!foundUser) return res.sendStatus(204);

    try {
        //Deltes all the items of the user is being delete
        await Source.deleteMany({ owner: foundUser.user });
        await User.deleteOne({ user: foundUser.user });

        res.json({ "message": `User ${foundUser.user} deleted` })
    } catch (err) {
        console.error(err);
    }

}

module.exports = { 
    getAllUsers,
    getUserById,
    createUser,
    deleteUser
};