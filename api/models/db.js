"use strict";
{
  const { Model, snakeCaseMappers } = require("objection");
  const Knex = require("knex");
  const config = require("config");
  // const _ = require("lodash/object");
  var connection = config.get("connection");

  const knex = Knex({
    client: connection.client,
    connection: {
      host: connection.host,
      user: connection.username,
      password: connection.password,
      database: connection.database,
    },
    ...snakeCaseMappers(),
  });
  Model.knex(knex);
}
