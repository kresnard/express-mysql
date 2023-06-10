import UsersModel from '../models/users.js'

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();
    
        res.json({
            message: 'GET all users success!',
            data: data
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error
        })
    }

}

const createNewUser = (req, res) => {
    console.log(req.body)
    res.json({
        message: 'CREATE new user success!',
        data: req.body
    })
}

const updateUser = (req, res) => {
    const {id} = req.params;
    console.log("id: ", id);
    res.json({
        message: 'Update user success!',
        data: req.body
    })
}

const deleteUser = (req, res) => {
    const {id} = req.params;
    console.log("id: ", id);
    res.json({
        message: 'Update user success!',
        data: {
            id: id,
            name: "Kresna",
            email: "kresna@mail.com"
        }
    })
}
export default {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}