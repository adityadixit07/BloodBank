const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (error, decode) => {
      if (error) {
        res
          .status(401)
          .send({ status: false, message: "Authorization Failed", error });
      } else {
        req.body.userId = decode.userId;
        next();
      }
    });
  } catch (error) {
    // console.log(error);
    res
      .status(401)
      .send({ status: false, message: "Authorization Failed", error });
  }
};
