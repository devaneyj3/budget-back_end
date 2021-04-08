exports.up = function (knex) {
  return knex.schema.createTable("transactions", (tbl) => {
    tbl.increments();
    tbl.float("price").notNullable();
    tbl.string("name").notNullable();
    tbl.string("account").notNullable();
    tbl.string("type").notNullable();
    tbl.string("category");
    tbl.datetime("created");
    tbl.date("updated").defaultTo(null);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("transactions");
};
