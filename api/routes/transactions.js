var express = require("express");
var router = express.Router();

let endPoint = require("../endPoints");

router.get("/", (req, res) => {
  endPoint.getEndPoint("transactions", res);
});
router.get("/:id", (req, res) => {
  endPoint.getById("transactions", req, res);
});
router.delete("/:id", (req, res) => {
  endPoint.deleteData("transactions", req, res);
});
router.post("/", (req, res) => {
  endPoint.addData("transactions", req, res);
});
router.put("/:id", (req, res) => {
  endPoint.updateData("transactions", req, res);
});

module.exports = router;
