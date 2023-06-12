import * as dotenv from 'dotenv'
import express from 'express';
import userRoutes from './routes/users.js'
import middlewareLog from './middleware/logs.js'

dotenv.config()

const PORT = process.env.PORT || 5000;

const app = express();

app.use(middlewareLog)
app.use(express.json())
app.use('/assets', express.static('public/images'))

app.use('/users', userRoutes)



app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`);
})

