import { createTipoViaRouter } from "../routes/maestros/tipoVia.js";
import { createTipoPuertaRouter } from "../routes/maestros/tipoPuerta.js";
import { createCondNumeracionRouter } from "../routes/maestros/condNumeracion.js";
import { createTipoEdificacionRouter } from "../routes/maestros/tipoEdificacion.js";
import { createTipoInteriorRouter } from "../routes/maestros/tipoInterior.js";

export function setupMaestroRoutes(app) {
  const maestrosRutas = {
    tipo_via: createTipoViaRouter(),
    tipo_puerta: createTipoPuertaRouter(),
    cond_numeracion: createCondNumeracionRouter(),
    tipo_edificacion: createTipoEdificacionRouter(),
    tipo_interior: createTipoInteriorRouter(),
  };

  for (const [ruta, router] of Object.entries(maestrosRutas)) {
    app.use(`/maestros/${ruta}`, router);
  }
}
