import TipoEntrega from "../../models/maestros/tipoEntrega.js";

export class TipoEntregaService {
  async getAll() {
    try {
      const data = await TipoEntrega.findAll();
      if (!data) {
        throw new Error("Tipo de Entrega no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener los tipo de entrega...." + error);
    }
  }

  async create(estado) {
    try {
      const data = await TipoEntrega.create({
        estado,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el tipo de entrega.");
    }
  }

  async getById(id) {
    try {
      const data = await TipoEntrega.findByPk(id);
      if (!data) {
        throw new Error("Tipo de Entrega no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el tipo de entrega por ID.");
    }
  }

  async update(id, estado) {
    try {
      const data = await TipoEntrega.update({ estado }, { where: { id } });
      return data;
    } catch (error) {
      throw new Error("Error al actualizar el tipo de entrega.");
    }
  }

  async delete(id) {
    try {
      const data = await TipoEntrega.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el tipo de entrega.");
    }
  }
}
