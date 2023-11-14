import { Router } from "express";
import { IngresosController } from "../controllers/ingresosController.js";

export const createIngresosRouter = () => {
  const ingresosRouter = Router();
  const ingresosController = new IngresosController();
  ingresosRouter.post("/", ingresosController.createPago);
  ingresosRouter.get("/detail/", ingresosController.getDetail);
  ingresosRouter.get(
    "/detail/:fecha_ini/:fecha_fin",
    ingresosController.getDetailByFecha
  );
  return ingresosRouter;
};
