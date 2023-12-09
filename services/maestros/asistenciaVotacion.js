import AsistenciaVotacion from "../../models/maestros/asistenciaVotacion.js";
import Votacion from "../../models/maestros/votacion.js";
import Colegiado from "../../models/maestros/colegiado.js";

export class AsistenciaVotacionService {
  async getAll() {
    try {
      const data = await AsistenciaVotacion.findAll();
      if (!data) {
        throw new Error("Asistencia de Votacion no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener la Asistencia de Votacion...." + error);
    }
  }

  async create(estado, votacionobservacion, idvotacion, idcolegiado) {
    try {
      const datavotacion = await Votacion.create({
        anio,
        monto,
      });
      const datacolegiado = await Colegiado.create({ nombre, dni });
      const dataasistencia = await AsistenciaVotacion.create({
        estado,
        votacionobservacion,
        idvotacion: datavotacion.id,
        idcolegiado: datacolegiado.id,
        anio: datavotacion.anio,
        monto: datavotacion.monto,
        nombre: datacolegiado.nombre,
        dni: datacolegiado.dni,
      });
      return dataasistencia;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear la Asistencia de Votacion.");
    }
  }

  async getById(id) {
    try {
      const data = await AsistenciaVotacion.findByPk(id);
      if (!data) {
        throw new Error("Asistencia de Votacion no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener la Asistencia de Votacion por ID.");
    }
  }

  async update(id, estado) {
    try {
      const data = await AsistenciaVotacion.update(
        { estado },
        { where: { id } }
      );
      return data;
    } catch (error) {
      throw new Error("Error al actualizar la Asistencia de Votacion.");
    }
  }

  async delete(id) {
    try {
      const data = await AsistenciaVotacion.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar la Asistencia de Votacion.");
    }
  }
}
