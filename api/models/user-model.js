"use strict";
const BaseModel = require("./base-model");
module.exports = class User extends BaseModel {
  static get tableName() {
    return "users";
  }
  static get idColumn() {
    return "id";
  }
};
