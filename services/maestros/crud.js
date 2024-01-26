import Crud from "../../models/maestros/crud.js";

export class CrudService {
  async getAll() {
    try {
      const data = await Crud.findAll();
      if (!data) {
        throw new Error("Crud no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el Crud...." + error);
    }
  }

  async create(nombre, apellido, dni) {
    console.log(nombre, apellido, dni);
    try {
      const data = await Crud.create({
        nombre,
        apellido,
        dni,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el Crud.");
    }
  }

  async getById(id) {
    try {
      const data = await Crud.findOne({ where: { id: id } });
      if (!data) {
        throw new Error("Crud no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el Crud por ID.");
    }
  }

  async getByColegiadogetById(id) {
    try {
      const data = await Crud.findAll({ where: { idcolegiado: id } });
      if (!data) {
        throw new Error("Crud no encontrado.");
      }
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al obtener el Crud por ID.");
    }
  }

  async update(id, nombre, apellido, dni) {
    try {
      console.log("llega" + id);
      const data = await Crud.update(
        {
          nombre,
          apellido,
          dni,
        },
        { where: { id } }
      );
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al actualizar el Crud.");
    }
  }

  async delete(id) {
    try {
      const data = await Crud.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el Crud.");
    }
  }
}
