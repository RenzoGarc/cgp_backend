import { UsersService } from "../../services/maestros/users.js";

const usersService = new UsersService();

export class UsersController {
  constructor() {}

  async getAll(req, res) {
    try {
      const data = await usersService.getAll();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  getById = async (req, res) => {
    const { id } = req.params;
    try {
      const data = await usersService.getById(id);
      if (data) return res.json(data);
      res.status(404).json({ message: "Información no encontrada" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  create = async (req, res) => {
    const { estado } = req.body;
    try {
      const data = await usersService.create(estado);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: "Error creando la información." });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const data = await usersService.delete(id);

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
      const data = await usersService.update(id, estado);
      return res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Error actualizando la información." });
    }
  };
}
