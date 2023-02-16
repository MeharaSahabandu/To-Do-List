const router = require("express").Router();
const { request, response } = require("express");
let ToDo = require("../models/ToDoModel");


//add details 
router.route("/add").post((req, res) => {

    const title = req.body.title;
    const description = req.body.description;
    const date = req.body.date;


    const newToDo = new ToDo({
        title,
        description,
        date

    })


    newToDo.save().then(() => {
        res.json("Data Added")
    }).catch((err) => {
        console.log(err);
    })

})



//get all details 
router.route("/").get((req, res) => {

    ToDo.find().then((ToDo) => {
        res.json(ToDo)
    }).catch((err) => {
        console.log(err)
    })

})


//getting information of one activity

router.route("/get/:id").get(async (req, res) => {

    let tID = req.params.id;

    const Todo = await ToDo.findById(tID).then((ToDo) => {
        res.status(200).send({ status: "fetched", ToDo });
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({ status: "Error ", error: err.message })
    })
})



//update the details of activities

router.route("/update/:id").put(async (req, res) => {

    let tID = req.params.id;

    const { title, description } = req.body;

    const updateToDo = {
        title,
        description

    }

    await ToDo.findByIdAndUpdate(tID, updateToDo).then(() => {
        res.status(200).send({ status: "Updated" })
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with updating data", error: err.message });
    })

})



//remove activity from the system

router.route("/delete/:id").delete(async (req, res) => {

    let tID = req.params.id;

    await ToDo.findByIdAndDelete(tID).then(() => {
        res.status(200).send({ status: "Deleted" })
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({ status: "Error with deleting details", error: err.message })
    })
})


module.exports = router;