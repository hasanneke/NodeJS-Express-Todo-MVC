var express = require('express')
var logger = require('./middleware/logger')
var todoRouter = require('./routes/todos')
var app = express()
app.use(express.json())

app.get('/', (req, res) =>{
    res.status(200).send('<h1> home </h1>')
})

app.use('/api/todo',logger, todoRouter)

app.listen(4000, () => {
    console.log('Server is listening on 4000')
})