import Pago from "../../models/maestros/pago.js";

export class PagoService {
  async getAll() {
    try {
      const data = await Pago.findAll();
      if (!data) {
        throw new Error("Pago  no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener los Pago ...." + error);
    }
  }

  async create(
    monto,
    fechapago,
    idcolegiado,
    idformapago,
    idconceptolist,
    conceptotext,
    description,
    ncomprobante
  ) {
    try {
      const data = await Pago.create({
        monto,
        fechapago,
        idcolegiado,
        idformapago,
        idconceptolist,
        conceptotext,
        description,
        ncomprobante,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el Pago .");
    }
  }

  async getById(id) {
    try {
      const data = await Pago.findByPk(id);
      if (!data) {
        throw new Error("Pago  no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el Pago  por ID." + error);
    }
  }

  async update(id, estado) {
    try {
      const data = await Pago.update({ estado }, { where: { id } });
      return data;
    } catch (error) {
      throw new Error("Error al actualizar el Pago .");
    }
  }

  async delete(id) {
    try {
      const data = await Pago.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el Pago Fraccionamiento.");
    }
  }
}
