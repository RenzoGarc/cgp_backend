import { Router } from "express";

import { ConfigurationsController } from "../../controllers/maestros/configurations.js";
import {} from "../../controllers/maestros/configurations.js";

export const createConfigurationsRouter = () => {
  const ConfigurationsRouter = Router();
  //CAMBIAR
  const configurationsController = new ConfigurationsController();

  ConfigurationsRouter.get("/", configurationsController.getAll);
  ConfigurationsRouter.get("/:id", configurationsController.getById);
  ConfigurationsRouter.post("/", configurationsController.create);
  ConfigurationsRouter.delete("/:id", configurationsController.delete);
  ConfigurationsRouter.put("/:id", configurationsController.update);

  return ConfigurationsRouter;
};
