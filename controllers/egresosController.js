import { EgresosService } from "../services/egresos.js";

const egresosService = new EgresosService();

export class EgresosController {
  constructor() {}

  async getDetail(req, res) {
    try {
      const data = await egresosService.getDetail();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "error controller" });
    }
  }
  async getDetailByfecha(req, res) {
    const { fecha_ini, fecha_fin } = req.params;
    try {
      const data = await egresosService.getDetailByfecha(fecha_ini, fecha_fin);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "error controller" });
    }
  }
}
