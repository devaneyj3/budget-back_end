const db = require("./globalModel");

const helper = require("./helper");

module.exports = {
  getEndPoint,
  getById,
  deleteData,
  addData,
  updateData,
};

async function getEndPoint(text, res) {
  const data = await db.getAllFields(text);
  try {
    if (data) {
      res.status(200).send(data);
    } else {
      helper.notFound(text, res);
    }
  } catch (error) {
    helper.dbError(res);
  }
}
async function getById(text, req, res) {
  const { id } = req.params;
  const user = await db.getFieldById(text, id);
  try {
    if (user) {
      res.status(200).send(user);
    } else {
      helper.notFound(text, res);
    }
  } catch {
    helper.dbError(res);
  }
}
async function deleteData(text, req, res) {
  const { id } = req.params;
  const user = await db.deleteData(text, id);
  const data = await db.getAllFields(text);
  try {
    if (user) {
      res
        .status(200)
        .json({ data, msg: "Transaction has been deleted successfully" });
    } else {
      helper.notFound(text, res);
    }
  } catch {
    helper.dbError(res);
  }
}
async function updateData(text, req, res) {
  const { id } = req.params;
  const user = await db.updateData(text, req, id);
  const data = await db.getAllFields(text);
  try {
    if (user) {
      res
        .status(200)
        .json({ data, msg: "Transaction has been updated successfully" });
    } else {
      helper.notFound(text, res);
    }
  } catch {
    helper.dbError(res);
  }
}
async function addData(text, req, res) {
  let newPost = await db.postData(text, req);
  const data = await db.getAllFields(text);
  try {
    if (newPost) {
      res.status(200).json({ data, message: `Transaction Added` });
    } else {
      helper.notFound(text, res);
    }
  } catch {
    helper.dbError(res);
  }
}
