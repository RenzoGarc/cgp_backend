import { ColegiadoService } from "../../services/maestros/colegiado.js";

const colegiadoService = new ColegiadoService();

export class ColegiadoController {
  constructor() {}

  async getAll(req, res) {
    // const { page = 1, pagesize = 5 } = req.query;
    try {
      const data = await colegiadoService.getAll();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getValidate(req, res) {
    const { codigo } = req.params;
    try {
      const data = await colegiadoService.getValidate(codigo);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getColegiadoByCodigo(req, res) {
    const { codigo } = req.params;
    try {
      const data = await colegiadoService.getColegiadoByCodigo(codigo);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  getById = async (req, res) => {
    const { id } = req.params;
    try {
      const data = await colegiadoService.getById(id);
      if (data) return res.json(data);
      res.status(404).json({ message: "Información no encontrada" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  create = async (req, res) => {
    const {
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
      pais,
    } = req.body;
    console.log(req.body);
    try {
      const data = await colegiadoService.create(
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
      );
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const data = await colegiadoService.delete(id);

      if (!data) {
        return res.status(404).json({ message: "Información no encontrada" });
      }
      return res.json({ message: "Información eliminada" });
    } catch (error) {
      res.status(500).json({ error: "Error eliminando la información." });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const {
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
    } = req.body;
    try {
      const data = await colegiadoService.update(
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
        celular
      );
      return res.json(data);
    } catch (error) {
      res.status(500).json({ error: "Error actualizando la información." });
    }
  };
}
