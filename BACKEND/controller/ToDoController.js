const ToDoModel = require('../models/ToDoModel');

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


module.exports.updateToDo = async (req, res) => {

    const { id, text } = req.body;
    ToDoModel
    .findByIdAndUpdate(id, { text })
    .then(() => res.send("Updated Successfully"))
    .catch((err)=>console.log(err))

}

module.exports.deleteToDo = async (req, res) => {

    const { id } = req.body;
    ToDoModel
    .findByIdAndDelete(id)
    .then(() => res.send("Deleted Successfully"))
    .catch((err)=>console.log(err))

}