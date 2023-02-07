const ToDoModel = require('../model/ToDoModel');

///get all to do list
module.exports.getToDo = async (req, res) => {
    const todo = await ToDoModel.find();
    res.send(todo);
}


module.exports.saveToDo = async (req, res) => {

    const { text } = req.body;

    ToDoModel
        .create({ text })
        .then((data) => {
            console.log("Added Successfully");
            console.log(data);
            res.send(data);
        })

    res.send(todo);
}