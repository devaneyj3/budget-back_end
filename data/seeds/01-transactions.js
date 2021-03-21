exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("transactions")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("transactions").insert([
        {
          id: 1,
          price: 130.99,
          type: "inc",
          account: "Savings",
          name: "Walmart",
          category: "Groceries",
        },
        {
          id: 2,
          price: 44.99,
          name: "Walmart",
          account: "Checking",
          type: "exp",
          category: "Groceries",
        },
        {
          id: 3,
          price: 44.99,
          name: "Walmart",
          account: "Checking",
          type: "inc",
          category: "Groceries",
        },
        {
          id: 4,
          price: 33.99,
          name: "Walmart",
          account: "Checking",
          type: "inc",
          category: "Groceries",
        },
      ]);
    });
};
