import { Router } from "express";
import { ReporteController } from "../controllers/reporte.js";

export const createReporteRouter = () => {
  const reporteRouter = Router();
  const reporteController = new ReporteController();
  reporteRouter.post("/", reporteController.createReporte);
  return reporteRouter;
};
