jsonwebtoken = require("jsonwebtoken");
module.exports = function (req, res, next) {
  if (
    // req.headers &&
    // req.headers.authorization &&
    // req.headers.authorization.split(" ")[0] === "JWT"
    req.headers &&
    req.headers.authorization
  ) {
    // const token = req.headers.authorization.split(" ")[1];
    const token = req.header("Authorization").replace("Bearer ", "");
    jsonwebtoken.verify(token, "RESTFULAPIs", function (err, decode) {
      if (err) {
        return res.status(401).json({ message: err.message });
      }
      req.user = decode;
      next();
    });
  } else {
    return res.status(401).json({ message: "Missing JWT" });
    next();
  }
};
