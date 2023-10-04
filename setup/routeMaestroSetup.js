//rutas app
import { createEstadoCivilRouter } from "./routes/maestros/estadoCivil.js";
import { createAsistenciaVotacionRouter } from "./routes/maestros/asistenciaVotacion.js";
import { createCertificadoRouter } from "./routes/maestros/certificado.js";
import { createColegiadoRouter } from "./routes/maestros/colegiado.js";
import { createColegiadoFraccionamientoRouter } from "./routes/maestros/colegiadoFraccionamiento.js";
import { createConceptoListRouter } from "./routes/maestros/conceptoList.js";
import { createConfigurationsRouter } from "./routes/maestros/configurations.js";
import { createEgresoRouter } from "./routes/maestros/egreso.js";
import { createFormaPagoRouter } from "./routes/maestros/formaPago.js";
import { createFraccionamientoRouter } from "./routes/maestros/fraccionamiento.js";
import { createMultaRouter } from "./routes/maestros/multa.js";
import { createMultaFraccionRouter } from "./routes/maestros/multaFraccion.js";
import { createOperadorTelfRouter } from "./routes/maestros/operadorTelf.js";
import { createPagoFraccionamientoRouter } from "./routes/maestros/pagoFraccionamiento.js";
import { createReciboRouter } from "./routes/maestros/recibo.js";
import { createSancionRouter } from "./routes/maestros/sancion.js";
import { createSancionFraccionRouter } from "./routes/maestros/sancionFraccion.js";
import { createTelefonoRouter } from "./routes/maestros/telefono.js";
import { createTipoCertificadoRouter } from "./routes/maestros/tipoCertificado.js";
import { createTipoEntregaRouter } from "./routes/maestros/tipoEntrega.js";
import { createUbigeoRouter } from "./routes/maestros/ubigeo.js";
import { createUsersRouter } from "./routes/maestros/users.js";
import { createVotacionRouter } from "./routes/maestros/votacion.js";

//CREAS LAS RUTA
app.use("/maestros/asistenciaVotacion", createAsistenciaVotacionRouter());
app.use("/maestros/certificado", createCertificadoRouter());
app.use("/maestros/colegiado", createColegiadoRouter());
app.use(
  "/maestros/ColegiadoFraccionamiento",
  createColegiadoFraccionamientoRouter()
);
app.use("/maestros/conceptoList", createConceptoListRouter());
app.use("/maestros/configurations", createConfigurationsRouter());
app.use("/maestros/egreso", createEgresoRouter());
app.use("/maestros/estadoCivil", createEstadoCivilRouter());
app.use("/maestros/formaPago", createFormaPagoRouter());
app.use("/maestros/fraccionamiento", createFraccionamientoRouter());
app.use("/maestros/multa", createMultaRouter());
app.use("/maestros/multaFraccion", createMultaFraccionRouter());
app.use("/maestros/operadorTelf", createOperadorTelfRouter());
app.use("/maestros/pagofraccionamiento", createPagoFraccionamientoRouter());
app.use("/maestros/recibo", createReciboRouter());
app.use("/maestros/sancion", createSancionRouter());
app.use("/maestros/sancionfraccion", createSancionFraccionRouter());
app.use("/maestros/telefono", createTelefonoRouter());
app.use("/maestros/tipoCertificado", createTipoCertificadoRouter());
app.use("/maestros/tipoEntrega", createTipoEntregaRouter());
app.use("/maestros/ubigeo", createUbigeoRouter());
app.use("/maestros/users", createUsersRouter());
app.use("/maestros/votacion", createVotacionRouter());

export function setupMaestroRoutes(app) {
  const maestrosRutas = {
    votacion: createVotacionRouter(),
  };

  for (const [ruta, router] of Object.entries(maestrosRutas)) {
    app.use(`/maestros/${ruta}`, router);
  }
}
