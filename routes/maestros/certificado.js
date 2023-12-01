import { Router } from "express";

import { CertificadoController } from "../../controllers/maestros/certificado.js";
import {} from "../../controllers/maestros/certificado.js";

export const createCertificadoRouter = () => {
  const CertificadoRouter = Router();
  //CAMBIAR
  const certificadoController = new CertificadoController();

  CertificadoRouter.get("/", certificadoController.getAll);

  CertificadoRouter.get("/:id", certificadoController.getById);
  CertificadoRouter.post("/", certificadoController.create);
  CertificadoRouter.delete("/:id", certificadoController.delete);
  CertificadoRouter.put("/:id", certificadoController.update);

  ///
  CertificadoRouter.get("/:id", certificadoController.getAllById);

  return CertificadoRouter;
};
