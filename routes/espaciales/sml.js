import { Router } from "express";
import { SmlController } from "../../controllers/espaciales/sml.js";

export const createSmlRouter = () => {
  const SmlRouter = Router();

  const smlController = new SmlController();

  SmlRouter.get("/sector", smlController.getSector);
  SmlRouter.get("/manzana/:id_sector", smlController.getManzana);
  SmlRouter.get("/lote/:id_manzana", smlController.getLote);

  return SmlRouter;
};
