import { Router } from "express";

import { TipoCertificadoController } from "../../controllers/maestros/tipoCertificado.js";
import {} from "../../controllers/maestros/tipoCertificado.js";

export const createTipoCertificadoRouter = () => {
  const TipoCertificadoRouter = Router();
  //CAMBIAR
  const tipoCertificadoController = new TipoCertificadoController();

  TipoCertificadoRouter.get("/", tipoCertificadoController.getAll);
  TipoCertificadoRouter.get("/:id", tipoCertificadoController.getById);
  TipoCertificadoRouter.post("/", tipoCertificadoController.create);
  TipoCertificadoRouter.delete("/:id", tipoCertificadoController.delete);
  TipoCertificadoRouter.put("/:id", tipoCertificadoController.update);

  return TipoCertificadoRouter;
};
