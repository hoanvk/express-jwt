const Person = require("../models/person-model");
class PersonRepository {
  /**
   * List all persons
   */
  async all() {
    return await Person.query().select();
  }
}
module.exports = new PersonRepository();
