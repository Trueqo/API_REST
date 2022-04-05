const express = require("express");
const taskSchema = require("../models/task.js")
const router = express.Router();



// add a new task

router.post("/task", (req, res) => {
    const task = taskSchema(req.body);
    task
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});



// get all task

router.get("/task", (req, res) => {

    taskSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


// get a task

router.get("/task/:id", (req, res) => {
    const { id } = req.params;
    taskSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


// update a user

router.put("/task/:id", (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    taskSchema
        .updateOne({ _id: id }, { $set: { title, description } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// delete a user

router.put("/task/:id", (req, res) => {
    const { id } = req.params;
    taskSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;