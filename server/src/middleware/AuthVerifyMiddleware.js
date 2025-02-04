const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
  //Token get from req header
  let Token = req.headers["token"];

  //Token verify 
  jwt.verify(Token, 'Secretkey123', (err, decoded) => {
    if (err) {
 
      res.status(401).json({status:"Unauthorized!"})
    } else {
      
      let email = decoded['data'];
      req.headers.email = email;
      next();
    }
  });
}