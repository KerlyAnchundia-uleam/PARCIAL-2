import { Router } from 'express';
import { TutorController } from './controller.ddd'; // Renamed controller
import { TutorDatasourceImpl } from "../../infrastructure/datasource/tutor.datasource.impl"; // New datasource
import { TutorRepositoryImpl } from '../../infrastructure/repositories/tutor.repository.impl'; // New repository

export class TutorRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new TutorDatasourceImpl(); // Use new datasource
    const tutorRepository = new TutorRepositoryImpl(datasource); // Use new repository

    const tutorController = new TutorController(tutorRepository); // Use new controller

    router.get('/', tutorController.getTutor); // Renamed method
    router.get('/:id', tutorController.getTutorById); // Renamed method

    router.post('/', tutorController.createTutor); // Renamed method
    router.put('/:id', tutorController.updateTutor); // Renamed method
    router.delete('/:id', tutorController.deleteTutor); // No change

    return router;
  }
}


