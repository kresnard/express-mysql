import * as dotenv from 'dotenv'
import express from 'express';
import userRoutes from './routes/users.js'
import middlewareLog from './middleware/logs.js'
import upload from './middleware/multer.js';

dotenv.config()

const PORT = process.env.PORT || 5000;

const app = express();

app.use(middlewareLog);
app.use(express.json());
app.use('/assets', express.static('public/images'));

app.use('/users', userRoutes);
app.post('/upload', upload.single('photo'), (req, res) => {
    res.json({
        message: 'Success upload!'
    })
})



app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`);
})

