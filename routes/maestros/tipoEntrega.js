import { Router } from "express";

import { TipoEntregaController } from "../../controllers/maestros/tipoEntrega.js";
import {} from "../../controllers/maestros/tipoEntrega.js";

export const createTipoEntregaRouter = () => {
  const TipoEntregaRouter = Router();
  //CAMBIAR
  const tipoEntregaController = new TipoEntregaController();

  TipoEntregaRouter.get("/", tipoEntregaController.getAll);
  TipoEntregaRouter.get("/:id", tipoEntregaController.getById);
  TipoEntregaRouter.post("/", tipoEntregaController.create);
  TipoEntregaRouter.delete("/:id", tipoEntregaController.delete);
  TipoEntregaRouter.put("/:id", tipoEntregaController.update);

  return TipoEntregaRouter;
};
