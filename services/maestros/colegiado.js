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

  async getValidate(codigo) {
    try {
      const data = await Colegiado.findOne({
        where: {
          codigo: codigo,
        },
      });
      if (data) {
        return true;
      }
      return false;
    } catch (error) {
      throw new Error("Error al obtener los Colegiado...." + error);
    }
  }

  async getColegiadoByCodigo(codigo) {
    try {
      const data = await Colegiado.findOne({
        where: {
          id: codigo,
        },
      });
      return data;
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

  async create(
    nombre,
    genero,
    fechanacimiento,
    lugarnacimiento,
    dni,
    ruc,
    id_departamento,
    id_provincia,
    id_distrito,
    zona,
    direccion,
    lugarresidencia,
    centrolaboral,
    ocupacion,
    aniotitulo,
    universidad,
    email,
    fraccionamiento,
    difunto,
    padron,
    url_foto,
    fechainscripcion,
    honorario,
    idestadocivil,
    codigo,
    id_departamento_n,
    id_provincia_n,
    id_distrito_n,
    celular,
    especializacion_1,
    especializacion_2,
    especializacion_3,
    especializacion_4,
    pais
  ) {
    try {
      let codigoFormateado = await this.FormartCode(codigo);
      console.log(codigoFormateado);
      const data = await Colegiado.create({
        nombre,
        genero,
        fechanacimiento,
        lugarnacimiento,
        dni,
        ruc,
        id_departamento,
        id_provincia,
        id_distrito,
        zona,
        direccion,
        lugarresidencia,
        centrolaboral,
        ocupacion,
        aniotitulo,
        universidad,
        email,
        fraccionamiento,
        difunto,
        padron,
        url_foto,
        fechainscripcion,
        honorario,
        idestadocivil,
        codigo: codigoFormateado,
        id_departamento_n,
        id_provincia_n,
        id_distrito_n,
        celular,
        especializacion_1,
        especializacion_2,
        especializacion_3,
        especializacion_4,
        pais,
      });
      return data;
    } catch (error) {
      throw new Error("Error al crear el Colegiado: " + error);
    }
  }

  async FormartCode(codigo) {
    if (codigo.length == 1) {
      return "000" + codigo;
    } else if (codigo.length == 2) {
      return "00" + codigo;
    } else if (codigo.length == 3) {
      return "0" + codigo;
    } else if (codigo.length == 4) {
      return codigo;
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

  async update(
    id,
    nombre,
    genero,
    fechanacimiento,
    lugarnacimiento,
    dni,
    ruc,
    id_departamento,
    id_provincia,
    id_distrito,
    zona,
    direccion,
    lugarresidencia,
    centrolaboral,
    ocupacion,
    aniotitulo,
    universidad,
    email,
    fraccionamiento,
    difunto,
    padron,
    url_foto,
    fechainscripcion,
    honorario,
    idestadocivil,
    codigo,
    id_departamento_n,
    id_provincia_n,
    id_distrito_n,
    celular,
    especializacion_1,
    especializacion_2,
    especializacion_3,
    especializacion_4
  ) {
    try {
      const data = await Colegiado.update(
        {
          nombre,
          genero,
          fechanacimiento,
          lugarnacimiento,
          dni,
          ruc,
          id_departamento,
          id_provincia,
          id_distrito,
          zona,
          direccion,
          lugarresidencia,
          centrolaboral,
          ocupacion,
          aniotitulo,
          universidad,
          email,
          fraccionamiento,
          difunto,
          padron,
          url_foto,
          fechainscripcion,
          honorario,
          idestadocivil,
          codigo,
          id_departamento_n,
          id_provincia_n,
          id_distrito_n,
          celular,
          especializacion_1,
          especializacion_2,
          especializacion_3,
          especializacion_4,
        },
        { where: { id: parseInt(id) } }
      );
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
