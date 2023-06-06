const express = require("express");

const userController = require("./../controllers/users.controllers");

const router = express.Router();

router
  .route("/")
  .get(userController.findAllUsers)
  .post(userController.createUsers);

router
  .route("/:id")
  .get(userController.findUser)
  .patch(userController.update)
  .delete(userController.createUsers);

module.exports = router;
