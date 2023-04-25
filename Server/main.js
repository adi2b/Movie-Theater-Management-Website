const express = require('express');
const cors = require('cors');     
const movieRouter = require('./routers/movieRouter');
const memberRouter = require('./routers/memberRouter');
const subscriptionRouter = require('./routers/subscriptionRouter');
const userRouter = require('./routers/userRouter');


const connectToDB = require('./configs/db');

const app = express();

app.use(cors());  

connectToDB();

app.use(express.json());

app.use('/api/movie', movieRouter)
app.use('/api/member', memberRouter)
app.use('/api/subscription', subscriptionRouter)
app.use('/api/user', userRouter)

app.listen(8000);