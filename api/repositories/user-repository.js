const bcrypt = require("bcrypt");
const User = require("../models/user-model");
class UserRepository {
  async login(email) {
    return await User.query().findOne("email", email);
  }
  async register(newUser) {
    const hash_password = bcrypt.hashSync(newUser.password, 10);
    console.log(hash_password);
    return await User.query().insert({
      full_name: newUser.fullName,
      email: newUser.email,
      hash_password: hash_password,
    });
  }
}
module.exports = new UserRepository();
