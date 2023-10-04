import Ubigeo from "../../models/maestros/ubigeo.js";

export class UbigeoService {
  async getAll() {
    try {
      const data = await Ubigeo.findAll();
      if (!data) {
        throw new Error("Ubigeo no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener los ubigeo...." + error);
    }
  }

  async create(estado) {
    try {
      const data = await Ubigeo.create({
        estado,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el ubigeo.");
    }
  }

  async getById(id) {
    try {
      const data = await Ubigeo.findByPk(id);
      if (!data) {
        throw new Error("Ubigeo no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el ubigeo por ID.");
    }
  }

  async update(id, estado) {
    try {
      const data = await Ubigeo.update({ estado }, { where: { id } });
      return data;
    } catch (error) {
      throw new Error("Error al actualizar el ubigeo.");
    }
  }

  async delete(id) {
    try {
      const data = await Ubigeo.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el ubigeo.");
    }
  }
}
