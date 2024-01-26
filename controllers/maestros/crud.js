import { CrudService } from "../../services/maestros/crud.js";

const crudService = new CrudService();

export class CrudController {
  constructor() {}

  async getAll(req, res) {
    try {
      const data = await crudService.getAll();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  getByColegiadogetById = async (req, res) => {
    const { id } = req.params;
    try {
      const data = await crudService.getByColegiadogetById(id);
      if (data) return res.json(data);
      res.status(404).json({ message: "Información no encontrada" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  getById = async (req, res) => {
    const { id } = req.params;
    try {
      const data = await crudService.getById(id);
      if (data) return res.json(data);
      res.status(404).json({ message: "Información no encontrada" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  create = async (req, res) => {
    const { nombre, apellido, dni } = req.body;
    console.log(req.body);
    try {
      const data = await crudService.create(nombre, apellido, dni);
      console.log(data.id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Error creando la información." });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const data = await crudService.delete(id);

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
    console.log(req.params);
    console.log(req.body);
    const { nombre, apellido, dni } = req.body;
    try {
      const data = await crudService.update(id, nombre, apellido, dni);
      return res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Error actualizando la información." });
    }
  };
}
