const TasksModel = require("../models/TasksModel")


//Tasks Create
exports.createTask = (req, res) => {
  //Req body get
  let reqBody = req.body;

  //Req body email set from req headers email
  reqBody.email = req.headers['email'];

  TasksModel.create(reqBody)
    .then(data => res.status(200).json({ status: "Sucess", data }))
    .catch(err => res.status(400).json({status: "Fail", err}))

}

//Tasks Delete
exports.deleteTaks = (req, res) => {
  let id = req.params.id;
  let query = { _id: id }

  
  TasksModel.deleteOne(query)
    .then(data => res.status(200).json({ status: "Delete successful.", data }))
    .catch(err => res.status(400).json({status:"Delete fail", err}));
}


//Tasks Status Update
exports.updateTaskStatus = (req, res) => {
  let id = req.params.id;
  let status = req.params.status;
  let query = { _id: id };
  let reqBody = { status: status }
  
  TasksModel.updateOne(query, reqBody)
    .then(data => res.status(200).json({ status: "Successful", data }))
    .catch(err => res.status(400).json({ status: "Fail", err }))

}


//List Task by Status
exports.listTaskByStatus = (req, res) => {
  let status = req.params.status;
  let email = req.headers['email'];
  TasksModel.aggregate([
    {
      $match: { status: status, email: email }
    }, {
      $project: {
        _id: 1, title: 1, description: 1, status: 1,
        createdDate: {
          $dateToString: {
            date: "$createdDate",
            format: "%d-%m-%Y"
          }
        }
      }
    }
  ])
    .then(data => res.status(200).json({ status: "Success", data }))
    .catch(err => res.status(400).json({ status: "Fail", err }))
}


//TasksStatusCount
exports.taskStatusCount = (req, res) => {
  let email = req.headers['email']

  //Status get with count
  TasksModel.aggregate([
    { $match: { email: email } },
    { $group: { _id: "$status", sum: { $count: {} } } }
  ])
    .then(data => res.status(200).json({ status: "Success", data }))
    .catch(err => res.status(400).json({status:"Fail", err}));
}