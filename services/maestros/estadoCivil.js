import EstadoCivil from "../../models/maestros/estadoCivil.js";

export class EstadoCivilService {
  async getAll() {
    try {
      const data = await EstadoCivil.findAll();
      if (!data) {
        throw new Error("Tipo de vía no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener los tipos de vía...." + error);
    }
  }

  async create(estado) {
    try {
      const data = await EstadoCivil.create({
        estado,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el tipo de vía.");
    }
  }

  async getById(id) {
    try {
      const data = await EstadoCivil.findByPk(id);
      if (!data) {
        throw new Error("Tipo de vía no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el tipo de vía por ID.");
    }
  }

  async update(id, estado) {
    try {
      const data = await EstadoCivil.update({ estado }, { where: { id } });
      return data;
    } catch (error) {
      throw new Error("Error al actualizar el tipo de vía.");
    }
  }

  async delete(id) {
    try {
      const data = await EstadoCivil.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el tipo de vía.");
    }
  }
}
