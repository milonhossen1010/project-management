const UserModel = require('../models/UsersModel');
const jwt = require('jsonwebtoken');

//Registration
exports.Registration = (req, res) => {
  let reqBody = req.body;

  UserModel.create(reqBody)
    .then(data => res.status(201).json({ status: 'Success', data }))
    .catch(err => res.status(201).json({ status: 'Fail', err }));
};

//Login
exports.Login = (req, res) => {
  //Body data get
  let reqBody = req.body;

  //email and pass are require
  if (reqBody.email && reqBody.password) {

    UserModel.aggregate([
      { $match: reqBody },
      { $project: { _id: 0, email: 1, firstName: 1, lastName: 1, mobile: 1 } },
    ])
      .then(data => {

        //Data check
        if (data.length > 0) {
          //Payload create
          let Payload = {
            exp: Math.floor(Date.now() / 1000 + 24 * 60 * 60),
            data: data[0]['email'],
          };

          //Token create
          let token = jwt.sign(Payload, 'Secretkey123');

          //Response 
          res
            .status(200)
            .json({ status: 'Sucess', token: token, data: data[0] });
          
        } else {

          //Email and Password is not match
          res.status(200).json({ status: 'Email and Password is not match!' });
        }
      })
      .catch(err => res.status(200).json({ status: 'Fail', err }));
  } else {
    //Email and password is blank
    res.status(404).json({status:"Email and Password are require!"})
  }
};

//Update User
exports.UpdateUser = (req, res) => {
  //Email get from req header
  let email = req.headers['email'];
  
  //Req body
  let reqBody = req.body;

  UserModel.updateOne({ email: email }, reqBody)
    .then(data => res.status(200).json({ status: "Success", data }))
    .catch(err => res.status(200).json({ status: "Fail", err }));
};
