import { Router } from "express";

import { AsistenciaVotacionController } from "../../controllers/maestros/asistenciaVotacion.js";
import {} from "../../controllers/maestros/asistenciaVotacion.js";

export const createAsistenciaVotacionRouter = () => {
  const AsistenciaVotacionRouter = Router();
  //CAMBIAR
  const asistenciaVotacionController = new AsistenciaVotacionController();

  AsistenciaVotacionRouter.get("/", asistenciaVotacionController.getAll);
  AsistenciaVotacionRouter.get("/:id", asistenciaVotacionController.getById);
  AsistenciaVotacionRouter.post("/", asistenciaVotacionController.create);
  AsistenciaVotacionRouter.delete("/:id", asistenciaVotacionController.delete);
  AsistenciaVotacionRouter.put("/:id", asistenciaVotacionController.update);

  return AsistenciaVotacionRouter;
};
