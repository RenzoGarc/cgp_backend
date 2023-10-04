import FormaPago from "../../models/maestros/formaPago.js";

export class FormaPagoService {
  async getAll() {
    try {
      const data = await FormaPago.findAll();
      if (!data) {
        throw new Error("FormaPago no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener las FormaPago...." + error);
    }
  }

  async create(estado) {
    try {
      const data = await FormaPago.create({
        estado,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el FormaPago.");
    }
  }

  async getById(id) {
    try {
      const data = await FormaPago.findByPk(id);
      if (!data) {
        throw new Error("FormaPago no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el FormaPago por ID.");
    }
  }

  async update(id, estado) {
    try {
      const data = await FormaPago.update({ estado }, { where: { id } });
      return data;
    } catch (error) {
      throw new Error("Error al actualizar el FormaPago.");
    }
  }

  async delete(id) {
    try {
      const data = await FormaPago.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el FormaPago.");
    }
  }
}
