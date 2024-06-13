import { Request, Response } from 'express';
// (Assuming you have a TutorRepository)
import { TutorRepository } from '../../domain';
import { CreateTutorDto, UpdateTutorDto } from '../../domain/dtos';

export class TutorController {

  // Dependency Injection
  constructor(
    private readonly tutorRepository: TutorRepository,
  ) { }

  public getTutor = async (req: Request, res: Response) => {
    const tutors = await this.tutorRepository.getAll(); // Replace with actual logic
    return res.json(tutors);
  };

  public getTutorById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const tutor = await this.tutorRepository.findById(id); // Replace with actual logic
      res.json(tutor);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public createTutor = async (req: Request, res: Response) => {
    const [error, createTutorDto] = CreateTutorDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const tutor = await this.tutorRepository.create(createTutorDto!); // Replace with actual logic
    res.json(tutor);
  };

  public updateTutor = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateTutorDto] = UpdateTutorDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const updatedTutor = await this.tutorRepository.updateById(updateTutorDto!); // Replace with actual logic
    return res.json(updatedTutor);
  };

  public deleteTutor = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const deletedTutor = await this.tutorRepository.deleteById(id); // Replace with actual logic
    res.json(deletedTutor);
  };
}
