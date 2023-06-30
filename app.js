var express = require('express')
var todoRouter = require('./routes/todos')
var app = express()
app.use(express.json())

app.get('/', (req, res) =>{
    console.log(products);
    res.status(200).json(products)
})

app.use('/api/todo', todoRouter)

app.listen(4000, () => {
    console.log('Server is listening on 4000')
})