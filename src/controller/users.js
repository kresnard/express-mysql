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

const createNewUser = async (req, res) => {
    const {body}= req;

    try {

        await UsersModel.createNewUser(body);

        res.json({
            message: 'CREATE new user success!',
            data: req.body
        })

    } catch (error) {

        res.status(500).json({
            message: 'server error',
            serverMessage: error
        })

    }

}

const updateUser = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    try {

        await UsersModel.updateUser(body, id);

        res.json({
            message: 'Update user success!',
            data: {
                id: id,
                ...body
            },
        })

    } catch (error) { 

        res.status(500).json({
            message: 'server error',
            serverMessage: error
        })

    }

}

const deleteUser = async (req, res) => {
    const {id} = req.params;

    try {

        await UsersModel.deleteUser(id);

        res.json({
            message: 'Update user success!',
            data: {
                id: id
            }
        })
        
    } catch (error) { 

        res.status(500).json({
            message: 'server error',
            serverMessage: error
        })

    }
}

export default {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}