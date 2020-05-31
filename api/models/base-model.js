"use strict";

const { Model, snakeCaseMappers } = require("objection");

module.exports = class BaseModel extends Model {
  static get columnNameMappers() {
    // If your columns are UPPER_SNAKE_CASE you can
    // use snakeCaseMappers({ upperCase: true })
    return snakeCaseMappers();
  }
  // static query(...args) {
  //   return super.query(...args).onBuildKnex((knexQueryBuilder) => {
  //     knexQueryBuilder.on("query", (queryData) => {
  //       console.log(queryData);
  //     });
  //   });
  // }
  $beforeUpdate() {
    // TODO auto-update updated_at column if found
    if ("updated_at" in this) {
    }
  }
};
