import { Router } from 'express';
import { CapasController } from '../../controllers/espaciales/capas.js';

import { cacheMiddleware } from '../../middlewares/redis.js';

export const capas = () => {
    const capaRouter = Router();

    const capasController = new CapasController();

    capaRouter.get('/', cacheMiddleware,  capasController.getAll);
    capaRouter.get('/estructura', cacheMiddleware,  capasController.getStructure);
    capaRouter.post('/', capasController.create);

    capaRouter.get('/:cod_tipo_via', capasController.getById);
    capaRouter.delete('/:cod_tipo_via', capasController.delete);
    capaRouter.patch('/:cod_tipo_via', capasController.update);

    return capaRouter;
};
