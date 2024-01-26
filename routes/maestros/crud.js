import { Router } from "express";

import { CrudController } from "../../controllers/maestros/crud.js";
import {} from "../../controllers/maestros/crud.js";

export const createCrudRouter = () => {
  const CrudRouter = Router();
  //CAMBIAR
  const crudController = new CrudController();

  CrudRouter.get("/", crudController.getAll);
  CrudRouter.get("/:id", crudController.getById);
  CrudRouter.post("/", crudController.create);
  CrudRouter.delete("/:id", crudController.delete);
  CrudRouter.put("/:id", crudController.update);

  return CrudRouter;
};
