import { Router } from "express";

import { ConceptoListController } from "../../controllers/maestros/conceptoList.js";
import {} from "../../controllers/maestros/conceptoList.js";

export const createConceptoListRouter = () => {
  const ConceptoListRouter = Router();
  //CAMBIAR
  const conceptoListController = new ConceptoListController();

  ConceptoListRouter.get("/", conceptoListController.getAll);
  ConceptoListRouter.get("/:id", conceptoListController.getById);
  ConceptoListRouter.post("/", conceptoListController.create);
  ConceptoListRouter.delete("/:id", conceptoListController.delete);
  ConceptoListRouter.put("/:id", conceptoListController.update);

  return ConceptoListRouter;
};
