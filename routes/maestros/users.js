import { Router } from "express";

import { UsersController } from "../../controllers/maestros/users.js";
import {} from "../../controllers/maestros/users.js";

export const createUsersRouter = () => {
  const UsersRouter = Router();
  //CAMBIAR
  const usersController = new UsersController();

  UsersRouter.get("/", usersController.getAll);
  UsersRouter.get("/:id", usersController.getById);
  UsersRouter.post("/", usersController.create);
  UsersRouter.delete("/:id", usersController.delete);
  UsersRouter.put("/:id", usersController.update);

  return UsersRouter;
};
