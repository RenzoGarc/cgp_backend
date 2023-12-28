import { Router } from "express";
import { ReporteColegiadoRouter } from "../controllers/reporteColegiado.js";

export const createReporteColeRouter = () => {
  const reporteColegiadoRouter = Router();
  const reporteColegiadoController = new ReporteColegiadoRouter();
  reporteColegiadoRouter.post(
    "/",
    reporteColegiadoController.createReporteColeRouter
  );
  return reporteColegiadoRouter;
};
