import { EgresoService } from "../../services/maestros/egreso.js";

const egresoService = new EgresoService();

export class EgresoController {
  constructor() {}

  async getAll(req, res) {
    try {
      const data = await egresoService.getAll();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  getById = async (req, res) => {
    const { id } = req.params;
    try {
      const data = await egresoService.getById(id);
      if (data) return res.json(data);
      res.status(404).json({ message: "Información no encontrada" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  create = async (req, res) => {
    const {
      monto,
      description,
      conceptotext,
      fechaegreso,
      idcolegiado,
      idconceptolist,
      created_at,
      updated_at,
      deleted_at,
    } = req.body;
    console.log(req.body);
    try {
      const data = await egresoService.create(
        monto,
        description,
        conceptotext,
        fechaegreso,
        idcolegiado,
        idconceptolist,
        created_at,
        updated_at,
        deleted_at
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
      const data = await egresoService.delete(id);

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
      const data = await egresoService.update(id, estado);
      return res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Error actualizando la información." });
    }
  };
}
