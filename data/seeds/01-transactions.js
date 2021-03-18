exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("transactions")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("transactions").insert([
        {
          id: 1,
          price: 13.99,
          type: "exp",
          account: "checking",
          description: "Gift for someone",
          name: "Walmart",
          category: "groceries",
        },
        {
          id: 2,
          price: 44.99,
          description: "Gift for someone",
          name: "Walmart",
          account: "checking",
          type: "exp",
          category: "groceries",
        },
        {
          id: 3,
          price: 44.99,
          description: "Gift for someone",
          name: "Walmart",
          account: "checking",
          type: "inc",
          category: "groceries",
        },
        {
          id: 4,
          price: 33.99,
          description: "Gift for someone",
          name: "Walmart",
          account: "checking",
          type: "inc",
          category: "groceries",
        },
      ]);
    });
};
