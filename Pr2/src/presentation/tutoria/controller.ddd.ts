import { Request, Response } from 'express';
// (Assuming you have a TutoriaRepository)
import { TutoriaRepository } from '../../domain';
import { CreateTutoriaDto, UpdateTutoriaDto } from '../../domain/dtos';

export class TutoriaController {

  // Dependency Injection
  constructor(
    private readonly tutoriaRepository: TutoriaRepository,
  ) { }

  public getTutoria = async (req: Request, res: Response) => {
    const tutorias = await this.tutoriaRepository.getAll(); // Replace with actual logic
    return res.json(tutorias);
  };

  public getTutoriaById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const tutoria = await this.tutoriaRepository.findById(id); // Replace with actual logic
      res.json(tutoria);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public createTutoria = async (req: Request, res: Response) => {
    const [error, createTutoriaDto] = CreateTutoriaDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const tutoria = await this.tutoriaRepository.create(createTutoriaDto!); // Replace with actual logic
    res.json(tutoria);
  };

  public updateTutoria = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateTutoriaDto] = UpdateTutoriaDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const updatedTutoria = await this.tutoriaRepository.updateById(updateTutoriaDto!); // Replace with actual logic
    return res.json(updatedTutoria);
  };

  public deleteTutoria = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const deletedTutoria = await this.tutoriaRepository.deleteById(id); // Replace with actual logic
    res.json(deletedTutoria);
  };
}
