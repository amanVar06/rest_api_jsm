import express from "express";

import {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/usersController.js";

const router = express.Router();

//all routes in here are starting with /users
router.get("/", getAllUsers);

//functionality of adding users to our database
//we need to send some data from the front end to server
//so it wont be get request any more that data could be the value in th forms

router.post("/", createUser);

//: sign means we are expecting anything after /users/
//we can retrieve this using req.params

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
