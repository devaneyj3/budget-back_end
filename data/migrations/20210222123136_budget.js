exports.up = function (knex) {
  return knex.schema.createTable("transactions", (tbl) => {
    tbl.increments();
    tbl.float("price").notNullable();
    tbl.string("description");
    tbl.string("name").notNullable();
    tbl.string("account").notNullable();
    tbl.string("type").notNullable();
    tbl.string("category");
    tbl.datetime("created", { useTz: false }).defaultTo(knex.fn.now());
    tbl.date("updated").defaultTo(null);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("transactions");
};
