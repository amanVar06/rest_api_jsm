let users = [];
import { v4 as uuidv4 } from "uuid";

export const getAllUsers = (req, res) => {
  console.log(users);
  res.send(users);
};

export const createUser = (req, res) => {
  console.log("POST ROUTE REACHED");
  console.log(req.body);
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the name ${user.firstname} added to the database!!`);
};

export const getUser = (req, res) => {
  console.log(req.params);
  //   res.send("THE GET ID ROUTE");
  // /users/2 => req.params { id: 2}

  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with the id ${id} deleted from the database`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, age } = req.body;
  //sent this from the front end or client

  const userToBeUpdated = users.find((user) => user.id === id);

  if (firstname) userToBeUpdated.firstname = firstname;
  if (lastname) userToBeUpdated.lastname = lastname;
  if (age) userToBeUpdated.age = age;

  res.send(`User with the id ${id} has been updated`);
};

// module.exports = {
//   createUser,
//   getAllUsers,
//   getUser,
//   updateUser,
//   deleteUser,
// };
