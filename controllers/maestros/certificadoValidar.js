import { CertificadoValidarService } from "../../services/maestros/certificadoValidar.js";

const certificadoValidarService = new CertificadoValidarService();

export class CertificadoValidarController {
  constructor() {}

  async getAll(req, res) {
    try {
      const data = await certificadoValidarService.getAll();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  getById = async (req, res) => {
    const { id } = req.params;
    try {
      const data = await certificadoValidarService.getById(id);
      if (data) return res.json(data);
      res.status(404).json({ message: "Información no encontrada" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  create = async (req, res) => {
    const {
      codcertificado,
      cantidad,
      fechaemision,
      observacion,
      idpago,
      tipo_entrega_nombre,
      tipo_certificado_nombre,
      nombre_colegiado,
    } = req.body;
    console.log(req.body);
    try {
      const data = await certificadoValidarService.create(
        codcertificado,
        cantidad,
        fechaemision,
        observacion,
        idpago,
        tipo_entrega_nombre,
        tipo_certificado_nombre,
        nombre_colegiado
      );
      console.log(data.id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Error creando la información." });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const data = await certificadoValidarService.delete(id);

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
      const data = await certificadoValidarService.update(id, estado);
      return res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Error actualizando la información." });
    }
  };
}
