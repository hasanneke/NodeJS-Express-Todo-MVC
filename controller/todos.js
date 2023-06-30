const data = [
    {'id' : 0, 'todo' : 'go market'}
]

var getTodos = (req, res) => {
    res.status(200).json(data)
}

var createTodo = (req, res) => {
    const {todo} =  req.body;
    if(!todo) {
        return res.status(400).json({success:false,msg: "todo is null"})
    }
    data.push({'id':32, 'todo' : todo})
    res.status(201).json(data)
}

var deleteTodo = (req, res) => {
    const todo = data.find((todo) => todo.id === Number(req.params.id))
    if(!todo) {
        return res.status(404).json({'success':false, msg: `no todo with id ${req.params.id}`})
    }
    const newData = data.filter((todo) => todo.id !== Number(req.params.id))
    res.status(201).json(newData)
}

const updateTodo =(req, res) => {
    const { id } = req.params;
    const { name } = req.body;
 
    const todo = data.find((todo) => todo.id === Number(id))

    if(!todo) {
        return res.status(404).json({"success":false, "msg" : "No todo found with this id"})
    }
    data.map((todo) => {
        if(todo.id === Number(id)) {
            todo.todo = name;
        }
        return todo
    })
    return res.status(201).json({"success":true, data})
}

module.exports = {getTodos, createTodo, deleteTodo, updateTodo}