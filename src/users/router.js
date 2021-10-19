const express = require("express");
const router = express.Router()

const { getAll, getOneById, getOneByAddress } = require("./controller");

router.get("/", getAll)

router.get("/:id", getOneById)

router.get("/:id/address", getOneByAddress)

module.exports = router;