import express from "express";
import UserControlller from "../controller/users.js"

const router = express.Router();

// CREATE - POST
router.post('/', UserControlller.createNewUser)

// READ - GET
router.get('/', UserControlller.getAllUsers)

// UPDATE - PATCH
router.patch('/:id', UserControlller.updateUser)

// DELETE - DELETE
router.delete('/:id', UserControlller.deleteUser)

export default router;