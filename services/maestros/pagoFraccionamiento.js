import PagoFraccionamiento from "../../models/maestros/pagoFraccionamiento.js";

export class PagoFraccionamientoService {
  async getAll() {
    try {
      const data = await PagoFraccionamiento.findAll();
      if (!data) {
        throw new Error("Pago Fraccionamiento no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener los Pago Fraccionamiento...." + error);
    }
  }

  async create(estado) {
    try {
      const data = await PagoFraccionamiento.create({
        estado,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el Pago Fraccionamiento.");
    }
  }

  async getById(id) {
    try {
      const data = await PagoFraccionamiento.findByPk(id);
      if (!data) {
        throw new Error("Pago Fraccionamiento no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el Pago Fraccionamiento por ID.");
    }
  }

  async update(id, estado) {
    try {
      const data = await PagoFraccionamiento.update(
        { estado },
        { where: { id } }
      );
      return data;
    } catch (error) {
      throw new Error("Error al actualizar el Pago Fraccionamiento.");
    }
  }

  async delete(id) {
    try {
      const data = await PagoFraccionamiento.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el Pago Fraccionamiento.");
    }
  }
}
