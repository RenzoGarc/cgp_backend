import Colegiado from "../../models/maestros/colegiado.js";

export class ColegiadoService {
  async getAll(pageNumber, pageSize) {
    try {
      const data = await Colegiado.findAll();
      return {
        items: data,
      };
    } catch (error) {
      throw new Error("Error al obtener los Colegiado...." + error);
    }
  }
  // async getAll(pageNumber, pageSize) {
  //   try {
  //     const offset = (pageNumber - 1) * pageSize;
  //     const data = await Colegiado.findAndCountAll({
  //       offset,
  //       limit: pageSize,
  //     });
  //     const totalItems = data.count;
  //     const totalPages = Math.ceil(totalItems / pageSize);
  //     return {
  //       items: data.rows,
  //       currentPage: parseInt(pageNumber),
  //       totalPages,
  //       totalItems,
  //     };
  //   } catch (error) {
  //     throw new Error("Error al obtener los Colegiado...." + error);
  //   }
  // }

  async create(body) {
    try {
      const data = await Colegiado.create({
        nombre: body.nombresComple,
        genero: body.genero,
        fechanacimiento: body.dnacimiento,
        lugarnacimiento: body.lugarNaci,
        dni: body.dni,
        id_departamento: body.departamento,
        id_provincia: body.provincia,
        id_distrito: body.distrito,
        zona: body.zona,
        direccion: body.direccion,
        // lugarresidencia:body.no,
        centrolaboral: body.centrolabor,
        ocupacion: body.ocupacion,
        // universidad:body.no,
        email: body.email,
        // fraccionamiento:body.no,
        // difunto:body.no,
        padron: body.padron,
        // url_foto: body.no,
        fechainscripcion: body.dinscripcion,
        idestadocivil: body.estadociv,
        codigo: body.codigo,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear el Colegiado.");
    }
  }

  async getById(id) {
    try {
      const data = await Colegiado.findByPk(id);
      if (!data) {
        throw new Error("Colegiado no encontrado.");
      }
      return data;
    } catch (error) {
      throw new Error("Error al obtener el Colegiado por ID.");
    }
  }

  async update(id, estado) {
    try {
      const data = await Colegiado.update({ estado }, { where: { id } });
      return data;
    } catch (error) {
      throw new Error("Error al actualizar el Colegiado.");
    }
  }

  async delete(id) {
    try {
      const data = await Colegiado.destroy({
        where: { id },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar el Colegiado.");
    }
  }
}
