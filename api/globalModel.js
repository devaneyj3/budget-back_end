const db = require("../data/db_config");
const moment = require("moment");

const getAllFields = (table) => {
  return db(table);
};
const getFieldById = (table, id) => {
  return db(table).where({ id });
};
const deleteData = (table, id) => {
  return db(table).where({ id }).del();
};
const postData = async (table, req) => {
  const { price, account, type, name, created, category } = req.body;
  return await db(table).insert({
    price,
    name,
    category,
    created,
    account,
    type,
  });
};

const updateData = async (table, obj, id) => {
  const { price, account, type, name, category } = obj.body;
  console.log(obj.body);
  const updated = moment().format("l");
  return await db(table)
    .update({ price, name, category, account, updated, type })
    .where({ id });
};
const clearDB = (table) => {
  return db(table).truncate();
};
module.exports = {
  getAllFields,
  clearDB,
  postData,
  getFieldById,
  updateData,
  deleteData,
};
