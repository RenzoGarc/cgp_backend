import { IngresosService } from "../services/ingresos.js";

const ingresosService = new IngresosService();
export class IngresosController {
  constructor() {}

  async createPago(req, res) {
    const {
      monto,
      idcolegiado,
      idrecibo,
      idformapago,
      idconceptolist,
      idconcepto,
      conceptotext,
      description,
    } = req.body;
    try {
      const data = await ingresosService.createPago(
        monto,
        idcolegiado,
        idrecibo,
        idformapago,
        idconceptolist,
        idconcepto,
        conceptotext,
        description
      );
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  async getDetail(req, res) {
    try {
      const data = await ingresosService.getDetail();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  async getDetailByFecha(req, res) {
    const { fecha_ini, fecha_fin } = req.params;
    console.log(fecha_ini, fecha_fin);
    try {
      const data = await ingresosService.getDetailByFecha(fecha_ini, fecha_fin);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}
