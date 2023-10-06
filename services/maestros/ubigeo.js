import Ubigeo from "../../models/maestros/ubigeo.js";

import Departamento from "../../models/general/departamento.js";
import Provincia from "../../models/general/provincia.js";
import Distrito from "../../models/general/distrito.js";

export class UbigeoService {
  async getAll() {
    try {
      const data = await Ubigeo.findAll();
      if (!data) {
        throw new Error("Ubigeo no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener los ubigeo...." + error);
    }
  }

  //
  async getDep() {
    try {
      const data = await Departamento.findAll({
        order: [["nombdpto", "ASC"]],
      });
      return data;
    } catch (error) {
      throw new Error("Error al obtener los ubigeo...." + error);
    }
  }
  async getProv(id) {
    try {
      const data = await Provincia.findAll({
        where: { iddpto: id },
        order: [["nombprov", "ASC"]],
      });
      return data;
    } catch (error) {
      throw new Error("Error al obtener los ubigeo...." + error);
    }
  }
  async getDist(id) {
    try {
      const data = await Distrito.findAll({
        where: { idprov: id },
        order: [["nombdist", "ASC"]],
      });
      return data;
    } catch (error) {
      throw new Error("Error al obtener los ubigeo...." + error);
    }
  }
  //
  async create(estado) {
    try {
      const data = await Ubigeo.create({
        estado,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el ubigeo.");
    }
  }

  async getById(id) {
    try {
      const data = await Ubigeo.findByPk(id);
      if (!data) {
        throw new Error("Ubigeo no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el ubigeo por ID.");
    }
  }

  async update(id, estado) {
    try {
      const data = await Ubigeo.update({ estado }, { where: { id } });
      return data;
    } catch (error) {
      throw new Error("Error al actualizar el ubigeo.");
    }
  }

  async delete(id) {
    try {
      const data = await Ubigeo.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el ubigeo.");
    }
  }
}
