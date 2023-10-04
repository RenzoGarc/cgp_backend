import { Router } from "express";

import { VotacionController } from "../../controllers/maestros/votacion.js";
import {} from "../../controllers/maestros/votacion.js";

export const createVotacionRouter = () => {
  const VotacionRouter = Router();
  //CAMBIAR
  const votacionController = new VotacionController();

  VotacionRouter.get("/", votacionController.getAll);
  VotacionRouter.get("/:id", votacionController.getById);
  VotacionRouter.post("/", votacionController.create);
  VotacionRouter.delete("/:id", votacionController.delete);
  VotacionRouter.put("/:id", votacionController.update);

  return VotacionRouter;
};
