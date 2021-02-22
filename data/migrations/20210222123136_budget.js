exports.up = function (knex) {
  return knex.schema.createTable("transactions", (tbl) => {
    tbl.increments();
    tbl.float("price").notNullable();
    tbl.string("description");
    tbl.string("name").notNullable();
    tbl.string("category");
    tbl.timestamp("created").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("transactions");
};
