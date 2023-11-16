import { Router } from "express";
import { CertificadosController } from "../controllers/certificadosController.js";

export const createCertificadosRouter = () => {
  const certificadosRouter = Router();
  const certificadosController = new CertificadosController();

  certificadosRouter.post("/", certificadosController.createCertificados);
  certificadosRouter.get("/", certificadosController.getDetail);

  certificadosRouter.get(
    "/:fecha_ini/:fecha_fin",
    certificadosController.getDetailByfecha
  );

  // VotacionRouter.get("/", votacionController.getAll);
  // VotacionRouter.get("/:id", votacionController.getById);
  // VotacionRouter.post("/", votacionController.create);
  // VotacionRouter.delete("/:id", votacionController.delete);
  // VotacionRouter.put("/:id", votacionController.update);

  return certificadosRouter;
};
