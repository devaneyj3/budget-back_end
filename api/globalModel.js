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
  const { price, type, description, name, category } = req.body;
  return await db(table).insert({ price, description, name, category, type });
};

const updateData = async (table, obj, id) => {
  const { price, type, description, name, category } = obj.body;
  const updated = moment().format("l");
  return await db(table)
    .update({ price, description, name, category, updated, type })
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
