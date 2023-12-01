import Egreso from "../../models/maestros/egreso.js";

export class EgresoService {
  async getAll() {
    try {
      const data = await Egreso.findAll();
      if (!data) {
        throw new Error("Egreso no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el Egreso...." + error);
    }
  }

  async create(
    monto,
    description,
    conceptotext,
    fechaegreso,
    idcolegiado,
    idconceptolist,
    created_at,
    updated_at,
    deleted_at
  ) {
    console.log(
      monto,
      description,
      conceptotext,
      fechaegreso,
      idcolegiado,
      idconceptolist,
      created_at,
      updated_at,
      deleted_at
    );
    try {
      const data = await Egreso.create({
        monto,
        description,
        conceptotext,
        fechaegreso,
        idcolegiado,
        idconceptolist,
        created_at,
        updated_at,
        deleted_at,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el Egreso.");
    }
  }

  async getById(id) {
    try {
      const data = await Egreso.findAll({ where: { idcolegiado: id } });
      if (!data) {
        throw new Error("Egreso no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el Egreso por ID.");
    }
  }

  async update(id, estado) {
    try {
      const data = await Egreso.update({ estado }, { where: { id } });
      return data;
    } catch (error) {
      throw new Error("Error al actualizar el Egreso.");
    }
  }

  async delete(id) {
    try {
      const data = await Egreso.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el Egreso.");
    }
  }
}
