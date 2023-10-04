import ColegiadoFraccionamiento from "../../models/maestros/colegiadofraccionamiento.js";

export class ColegiadoFraccionamientoService {
  async getAll() {
    try {
      const data = await ColegiadoFraccionamiento.findAll();
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
      const data = await ColegiadoFraccionamiento.create({
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
      const data = await ColegiadoFraccionamiento.findByPk(id);
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
      const data = await ColegiadoFraccionamiento.update(
        { estado },
        { where: { id } }
      );
      return data;
    } catch (error) {
      throw new Error("Error al actualizar el tipo de vía.");
    }
  }

  async delete(id) {
    try {
      const data = await ColegiadoFraccionamiento.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el tipo de vía.");
    }
  }
}
