import { CertificadoService } from "../../services/maestros/certificado.js";

const certificadoService = new CertificadoService();

export class CertificadoController {
  constructor() {}

  async getAll(req, res) {
    try {
      const data = await certificadoService.getAll();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  getById = async (req, res) => {
    const { id } = req.params;
    try {
      const data = await certificadoService.getById(id);
      if (data) return res.status(200).json(data);
      res.status(404).json({ message: "Información no encontrada" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  create = async (req, res) => {
    const {
      cantidad,
      fechaemision,
      observacion,
      idtipoentrega,
      idtipocertificado,
      monto,
      idcolegiado,
      fechapago,
      ncomprobante,
      idformapago,
    } = req.body;
    console.log(req.body);
    try {
      const data = await certificadoService.create(
        cantidad,
        fechaemision,
        observacion,
        idtipoentrega,
        idtipocertificado,
        monto,
        idcolegiado,
        fechapago,
        ncomprobante,
        idformapago
      );

      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: "Error creando la información." });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const data = await certificadoService.delete(id);

      if (!data) {
        return res.status(404).json({ message: "Información no encontrada" });
      }
      return res.json({ message: "Información eliminada" });
    } catch (error) {
      res.status(500).json({ error: "Error eliminando la información." });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { estado } = req.body;
    try {
      const data = await CertificadoService.update(id, estado);
      return res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Error actualizando la información." });
    }
  };

  //
  // async getAllById(req, res) {
  //   console.log(req.params);
  //   const { id } = req.params;
  //   try {
  //     console.log(id);
  //     const data = await certificadoService.getAllById(id);
  //     res.json(data);
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // }

  async validarCertificado(req, res) {
    const { codigo } = req.query;
    if (!codigo) {
      return res
        .status(400)
        .json({ error: "Código de certificado no proporcionado." });
    }

    try {
      const certificado = await certificadoService.getByCodigo(codigo);
      if (!certificado) {
        return res.status(404).json({ error: "Certificado no encontrado." });
      }

      return res.json({
        success: true,
        message: "Certificado válido.",
        certificado,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
