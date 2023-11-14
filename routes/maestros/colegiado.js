import { Router } from "express";

import { ColegiadoController } from "../../controllers/maestros/colegiado.js";
import {} from "../../controllers/maestros/colegiado.js";

export const createColegiadoRouter = () => {
  const ColegiadoRouter = Router();
  //CAMBIAR
  const colegiadoController = new ColegiadoController();

  ColegiadoRouter.get("/", colegiadoController.getAll);
  ColegiadoRouter.get(
    "/codigo/:codigo",
    colegiadoController.getColegiadoByCodigo
  );
  ColegiadoRouter.get("/validate/:codigo", colegiadoController.getValidate);
  ColegiadoRouter.get("/:id", colegiadoController.getById);
  ColegiadoRouter.post("/", colegiadoController.create);
  ColegiadoRouter.delete("/:id", colegiadoController.delete);
  ColegiadoRouter.put("/:id", colegiadoController.update);

  return ColegiadoRouter;
};
