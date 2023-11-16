import { CertificadosService } from "../services/certificados.js";

const certificadosService = new CertificadosService();

export class CertificadosController {
  constructor() {}

  async getDetail(req, res) {
    try {
      const data = await certificadosService.getDetail();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "error controller" });
    }
  }
  async getDetailByfecha(req, res) {
    const { fecha_ini, fecha_fin } = req.params;
    try {
      const data = await certificadosService.getDetailByfecha(
        fecha_ini,
        fecha_fin
      );
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "error controller" });
    }
  }
  createCertificados = async (req, res) => {
    const {
      codigo_certif,
      cantidad,
      observacion,
      numcomprobante,
      entrega,
      nombre,
      fecha,
      id_colegiado,
      monto,
      forma_pago,
      type,
      codigo,
    } = req.body;

    try {
      const data = await certificadosService.createCertificados(
        codigo_certif,
        cantidad,
        observacion,
        numcomprobante,
        entrega,
        nombre,
        fecha,
        id_colegiado,
        monto,
        forma_pago,
        type,
        codigo
      );
      res.status(200).json(data);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error creando la información certificados." });
      console.log(error);
    }
  };
}
