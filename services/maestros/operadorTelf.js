import OperadorTelf from "../../models/maestros/operadorTelf.js";

export class OperadorTelfService {
  async getAll() {
    try {
      const data = await OperadorTelf.findAll();
      if (!data) {
        throw new Error("Operador Telfono no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener los Operador Telfono...." + error);
    }
  }

  async create(estado) {
    try {
      const data = await OperadorTelf.create({
        estado,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el Operador Telfono.");
    }
  }

  async getById(id) {
    try {
      const data = await OperadorTelf.findByPk(id);
      if (!data) {
        throw new Error("Operador Telfono no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el Operador Telfono por ID.");
    }
  }

  async update(id, estado) {
    try {
      const data = await OperadorTelf.update({ estado }, { where: { id } });
      return data;
    } catch (error) {
      throw new Error("Error al actualizar el Operador Telfono.");
    }
  }

  async delete(id) {
    try {
      const data = await OperadorTelf.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el Operador Telfono.");
    }
  }
}
