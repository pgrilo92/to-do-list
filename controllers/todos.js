let toDos = require('../data/todos')

let addToDo = (req, res) => {
    toDos.toDosArr.push({
        todo: req.body.enter,
        done: false
    })
    res.redirect("/");

}
let deleteToDo = (req, res) => {
    toDos.toDosArr.splice(req.params.idx, 1)
    res.redirect("/");

}
let getTodo = (req, res) => {
    res.render('index', { todos: toDos.toDosArr})
}
module.exports = {
    getTodo,
    addToDo,
    deleteToDo
}