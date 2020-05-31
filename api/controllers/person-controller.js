const personRepository = require("../repositories/person-repository");
class PersonController {
  /**
   * List all persons
   * @param {object} req
   * @param {object} res
   */
  all(req, res) {
    console.log(req.user);
    personRepository
      .all()
      .then((persons) => {
        return res.status(200).json(persons);
      })
      .catch((error) => {
        return res.status(500).json({ error: error.message });
      });
  }
}
module.exports = new PersonController();
