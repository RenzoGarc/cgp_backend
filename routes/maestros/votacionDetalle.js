import { Router } from "express";

import { VotacionDetalleController } from "../../controllers/maestros/votacionDetalle.js";
import {} from "../../controllers/maestros/votacionDetalle.js";

export const createVotacionDetalleRouter = () => {
  const votacionDetalleRouter = Router();
  //CAMBIAR
  const votacionDetalleController = new VotacionDetalleController();

  votacionDetalleRouter.get("/", votacionDetalleController.getAll);
  votacionDetalleRouter.get("/:id", votacionDetalleController.getById);
  votacionDetalleRouter.post("/", votacionDetalleController.create);
  votacionDetalleRouter.delete("/:id", votacionDetalleController.delete);
  votacionDetalleRouter.put("/:id", votacionDetalleController.update);

  return votacionDetalleRouter;
};
