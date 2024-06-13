import { Router } from 'express';
import { TutoriaController } from './controller.ddd'; // Renamed controller
import { TutoriaDatasourceImpl } from "../../infrastructure/datasource/tutoria.datasource.impl"; // New datasource
import { TutoriaRepositoryImpl } from '../../infrastructure/repositories/tutoria.repository.impl'; // New repository

export class TutoriaRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new TutoriaDatasourceImpl(); // Use new datasource
    const tutoriaRepository = new TutoriaRepositoryImpl(datasource); // Use new repository

    const tutoriaController = new TutoriaController(tutoriaRepository); // Use new controller

    router.get('/', tutoriaController.getTutoria); // Renamed method
    router.get('/:id', tutoriaController.getTutoriaById); // Renamed method

    router.post('/', tutoriaController.createTutoria); // Renamed method
    router.put('/:id', tutoriaController.updateTutoria); // Renamed method
    router.delete('/:id', tutoriaController.deleteTutoria); // Renamed method

    return router;
  }
}
