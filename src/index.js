import express from 'express';
import userRoutes from './routes/users.js'
import middlewareLog from './middleware/logs.js'

const app = express();

app.use(middlewareLog)
app.use(express.json())
app.use('/users', userRoutes)



app.listen(4000, () => {
    console.log('Server run on port 4000');
})

