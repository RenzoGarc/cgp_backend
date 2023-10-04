import { Router } from "express";

import { ColegiadoFraccionamientoController } from "../../controllers/maestros/colegiadofraccionamiento.js";
import {} from "../../controllers/maestros/colegiadofraccionamiento.js";

export const createColegiadoFraccionamientoRouter = () => {
  const ColegiadoFraccionamientoRouter = Router();
  //CAMBIAR
  const colegiadofraccionamientoController =
    new ColegiadoFraccionamientoController();

  ColegiadoFraccionamientoRouter.get(
    "/",
    colegiadofraccionamientoController.getAll
  );
  ColegiadoFraccionamientoRouter.get(
    "/:id",
    colegiadofraccionamientoController.getById
  );
  ColegiadoFraccionamientoRouter.post(
    "/",
    colegiadofraccionamientoController.create
  );
  ColegiadoFraccionamientoRouter.delete(
    "/:id",
    colegiadofraccionamientoController.delete
  );
  ColegiadoFraccionamientoRouter.put(
    "/:id",
    colegiadofraccionamientoController.update
  );

  return ColegiadoFraccionamientoRouter;
};
