import { Router } from "express";
import { EgresosController } from "../controllers/egresosController.js";

export const createEgresosRouter = () => {
  const egresosRouter = Router();
  const egresosController = new EgresosController();

  egresosRouter.get("/", egresosController.getDetail);
  egresosRouter.get(
    "/:fecha_ini/:fecha_fin",
    egresosController.getDetailByfecha
  );

  return egresosRouter;
};
