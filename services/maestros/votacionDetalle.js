import VotacionDetalle from "../../models/maestros/votacionDetalle.js";

export class VotacionDetalleService {
  async getAll() {
    try {
      const data = await VotacionDetalle.findAll();
      if (!data) {
        throw new Error("Estado civil no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener los estado civil...." + error);
    }
  }

  async create(
    fecha,
    monto,
    cod_colegiado_descripcion,
    motivo,
    descripcion,
    num_comprobante,
    tipo_recibo
  ) {
    try {
      const data = await VotacionDetalle.create({
        fecha,
        monto,
        cod_colegiado_descripcion,
        motivo,
        descripcion,
        num_comprobante,
        tipo_recibo,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el estado civil.");
    }
  }

  async getById(id) {
    try {
      const data = await VotacionDetalle.findByPk(id);
      if (!data) {
        throw new Error("Estado civil no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el estado civil por ID.");
    }
  }

  async update(id, estado) {
    try {
      const data = await VotacionDetalle.update({ estado }, { where: { id } });
      return data;
    } catch (error) {
      throw new Error("Error al actualizar el estado civil.");
    }
  }

  async delete(id) {
    try {
      const data = await VotacionDetalle.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el estado civil.");
    }
  }
}
