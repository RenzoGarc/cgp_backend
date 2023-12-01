import { Router } from "express";
import { Ingresos1Controller } from "../../controllers/maestros/ingresos1Controller.js";
import {} from "../../controllers/maestros/ingresos1Controller.js";

export const createIngresos1Router = () => {
  const Ingresos1Router = Router();
  //CAMBIAR
  const ingresos1Controller = new Ingresos1Controller();

  Ingresos1Router.get("/", ingresos1Controller.getAll);
  Ingresos1Router.get("/:id", ingresos1Controller.getById);
  Ingresos1Router.post("/", ingresos1Controller.create);
  Ingresos1Router.delete("/:id", ingresos1Controller.delete);
  Ingresos1Router.put("/:id", ingresos1Controller.update);

  return Ingresos1Router;
};
