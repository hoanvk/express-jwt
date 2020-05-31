"use strict";
const BaseModel = require("./base-model");
module.exports = class Person extends BaseModel {
  static get tableName() {
    return "persons";
  }
  static get idColumn() {
    return "id";
  }
};
