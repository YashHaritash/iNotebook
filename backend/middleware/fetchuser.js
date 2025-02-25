const jwt = require("jsonwebtoken");
const JWT_SECRET = "Yashisagoodb$oy";

const fetchuser = (req, res, next) => {
  //Get id from jwt token and append id to req object
  try {
    const token = req.header("auth-token");
    if (!token) {
      res.status(401).send({ error: "Please Authenticate using valid token" });
    }

    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please Authenticate using valid token" });
  }
};

module.exports = fetchuser;
