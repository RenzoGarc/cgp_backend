import { Router } from "express";

import { CertificadoValidarController } from "../../controllers/maestros/certificadoValidar.js";
import {} from "../../controllers/maestros/certificadoValidar.js";

export const createCertificadoValidarRouter = () => {
  const CertificadoValidarRouter = Router();
  //CAMBIAR
  const certificadoValidarController = new CertificadoValidarController();

  CertificadoValidarRouter.get("/", certificadoValidarController.getAll);
  CertificadoValidarRouter.get("/:id", certificadoValidarController.getById);
  CertificadoValidarRouter.post("/", certificadoValidarController.create);
  CertificadoValidarRouter.delete("/:id", certificadoValidarController.delete);
  CertificadoValidarRouter.put("/:id", certificadoValidarController.update);

  return CertificadoValidarRouter;
};
