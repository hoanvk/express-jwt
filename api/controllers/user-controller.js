const userRepository = require("../repositories/user-repository");
const jwt = require("jsonwebtoken");
class UserController {
  /**
   * Sign In
   */
  login(req, res) {
    const { email } = req.body;
    try {
      userRepository
        .login(email)
        .then((user) => {
          if (typeof user === "undefined") {
            return res
              .status(401)
              .json({ message: "Authentication failed. User not found." });
          } else {
            return res.json({
              token: jwt.sign(
                { email: user.email, fullName: user.fullName, role: 1 },
                "RESTFULAPIs"
              ),
            });
          }
        })
        .catch((error) => {
          return res.status(400).json({ message: error.message });
        });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  }
  /**
   * Create new user
   * @param {object} req
   * @param {object} res
   */
  register(req, res) {
    var newUser = req.body;
    console.log(newUser);
    userRepository
      .register(newUser)
      .then((user) => {
        if (typeof user === "undefined") {
          return res.status(400).json({
            message: "Could not save user data.",
          });
        } else {
          user.hash_password = undefined;
          return res.status(200).json(user);
        }
      })
      .catch((error) => {
        return res.status(500).json({ error: error.message });
      });
  }
}
module.exports = new UserController();
