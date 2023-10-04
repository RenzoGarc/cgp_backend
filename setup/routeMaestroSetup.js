//rutas app
import { createEstadoCivilRouter } from "../routes/maestros/estadoCivil.js";
import { createAsistenciaVotacionRouter } from "../routes/maestros/asistenciaVotacion.js";
import { createCertificadoRouter } from "../routes/maestros/certificado.js";
import { createColegiadoRouter } from "../routes/maestros/colegiado.js";
import { createColegiadoFraccionamientoRouter } from "../routes/maestros/colegiadoFraccionamiento.js";
import { createConceptoListRouter } from "../routes/maestros/conceptoList.js";
import { createConfigurationsRouter } from "../routes/maestros/configurations.js";
import { createEgresoRouter } from "../routes/maestros/egreso.js";
import { createFormaPagoRouter } from "../routes/maestros/formaPago.js";
import { createFraccionamientoRouter } from "../routes/maestros/fraccionamiento.js";
import { createMultaRouter } from "../routes/maestros/multa.js";
import { createMultaFraccionRouter } from "../routes/maestros/multaFraccion.js";
import { createOperadorTelfRouter } from "../routes/maestros/operadorTelf.js";
import { createPagoFraccionamientoRouter } from "../routes/maestros/pagoFraccionamiento.js";
import { createReciboRouter } from "../routes/maestros/recibo.js";
import { createSancionRouter } from "../routes/maestros/sancion.js";
import { createSancionFraccionRouter } from "../routes/maestros/sancionFraccion.js";
import { createTelefonoRouter } from "../routes/maestros/telefono.js";
import { createTipoCertificadoRouter } from "../routes/maestros/tipoCertificado.js";
import { createTipoEntregaRouter } from "../routes/maestros/tipoEntrega.js";
import { createUbigeoRouter } from "../routes/maestros/ubigeo.js";
import { createUsersRouter } from "../routes/maestros/users.js";
import { createVotacionRouter } from "../routes/maestros/votacion.js";

export function setupMaestroRoutes(app) {
  const maestrosRutas = {
    asistenciaVotacion: createAsistenciaVotacionRouter(),
    certificado: createCertificadoRouter(),
    colegiado: createColegiadoRouter(),
    ColegiadoFraccionamiento: createColegiadoFraccionamientoRouter(),
    votacion: createVotacionRouter(),
    conceptoList: createConceptoListRouter(),
    configurations: createConfigurationsRouter(),
    egreso: createEgresoRouter(),
    estadoCivil: createEstadoCivilRouter(),
    formaPago: createFormaPagoRouter(),
    fraccionamiento: createFraccionamientoRouter(),
    multa: createMultaRouter(),
    multaFraccion: createMultaFraccionRouter(),
    operadorTelf: createOperadorTelfRouter(),
    pagofraccionamiento: createPagoFraccionamientoRouter(),
    recibo: createReciboRouter(),
    sancion: createSancionRouter(),
    sancionfraccion: createSancionFraccionRouter(),
    telefono: createTelefonoRouter(),
    tipoCertificado: createTipoCertificadoRouter(),
    tipoEntrega: createTipoEntregaRouter(),
    ubigeo: createUbigeoRouter(),
    users: createUsersRouter(),
    votacion: createVotacionRouter(),
  };

  for (const [ruta, router] of Object.entries(maestrosRutas)) {
    app.use(`/maestros/${ruta}`, router);
  }
}
