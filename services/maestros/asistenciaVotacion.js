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

  async create(anio, asistencia, montoMulta) {
    try {
      const datavotacion = await Votacion.create({
        anio,
        monto: montoMulta,
      });

      let newAsistencias = [];
      for (let index in asistencia) {
        const element = asistencia[index];
        let newEstado = "asistencia";
        if (!element.estado) {
          newEstado = "falto";
        }
        const bodyPush = {};
        bodyPush.estado = newEstado;
        bodyPush.votacionobservacion = "";
        bodyPush.idvotacion = datavotacion.id;
        bodyPush.idcolegiado = element.id;
        newAsistencias.push(bodyPush);
      }
      console.log(newAsistencias);
      const dataasistencia = await AsistenciaVotacion.bulkCreate(
        newAsistencias
      );
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
