const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./model/userModel');


const SECRET_KEY = '4'

// connect to express app
const app = express()

// connect to mongoDB
const dbURI = 'mongodb://127.0.0.1:27017/user'
mongoose
.connect(dbURI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(() => {
    app.listen(3001, () => {
        console.log('Server connected to port 3001 and MongoDb')
    })
})
.catch((error) => {
    console.log('Unable to connect to Server and/or MongoDB', error)
})


app.use(bodyParser.json())
app.use(cors())


app.post('/register', async (req, res) => {
    try {
        const { email, name, password } = req.body
        // const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({ email, name, password})
        await newUser.save()
        res.status(201).json({ message: 'User created successfully' })
    } catch (error) {
        res.status(500).json({ error: 'Error signing up' })
    }
})

app.get('/register', async (req, res) => {
    try {
        const users = await User.find()
        res.status(201).json(users)
        
    } catch (error) {
        res.status(500).json({ error: 'Unable to get users' })
    }
})

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email})
        if (!user) {
            return res.status(401).json({ error: 'Invalid mail'})
        }
        const isPasswordValid = await (password === user.password)
        if(!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' })
        }
        const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1hr' })
        res.json({ message: 'Login successful' })
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' })
    }
})