import { Router } from 'express';
import { TutoradoController } from './controller.ddd'; // Renamed controller
import { TutoradoDatasourceImpl } from "../../infrastructure/datasource/tutorado.datasource.impl"; // New datasource
import { TutoradoRepositoryImpl } from '../../infrastructure/repositories/Tutorado.repository.impl'; // New repository

export class TutoradoRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new TutoradoDatasourceImpl(); // Use new datasource
    const tutoradoRepository = new TutoradoRepositoryImpl(datasource); // Use new repository

    const tutoradoController = new TutoradoController(tutoradoRepository); // Use new controller

    router.get('/', tutoradoController.getTutorado); // Renamed method
    router.get('/:id', tutoradoController.getTutoradoById); // Renamed method

    router.post('/', tutoradoController.createTutorado); // Renamed method
    router.put('/:id', tutoradoController.updateTutorado); // Renamed method
    router.delete('/:id', tutoradoController.deleteTutorado); // Renamed method

    return router;
  }
}
