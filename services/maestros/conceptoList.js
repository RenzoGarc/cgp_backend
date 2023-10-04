import ConceptoList from "../../models/maestros/conceptoList.js";

export class ConceptoListService {
  async getAll() {
    try {
      const data = await ConceptoList.findAll();
      if (!data) {
        throw new Error("Concepto Lista no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener los Concepto Lista...." + error);
    }
  }

  async create(estado) {
    try {
      const data = await ConceptoList.create({
        estado,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el Concepto Lista.");
    }
  }

  async getById(id) {
    try {
      const data = await ConceptoList.findByPk(id);
      if (!data) {
        throw new Error("Concepto Lista no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el Concepto Lista por ID.");
    }
  }

  async update(id, estado) {
    try {
      const data = await ConceptoList.update({ estado }, { where: { id } });
      return data;
    } catch (error) {
      throw new Error("Error al actualizar el Concepto Lista.");
    }
  }

  async delete(id) {
    try {
      const data = await ConceptoList.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el Concepto Lista.");
    }
  }
}
