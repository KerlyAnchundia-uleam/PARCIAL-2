import { Request, Response } from 'express';
// (Assuming you have a TutoradoRepository)
import { TutoradoRepository } from '../../domain';
import { CreateTutoradoDto, UpdateTutoradoDto } from '../../domain/dtos';

export class TutoradoController {

  // Dependency Injection
  constructor(
    private readonly tutoradoRepository: TutoradoRepository,
  ) { }

  public getTutorado = async (req: Request, res: Response) => {
    const tutorados = await this.tutoradoRepository.getAll(); // Replace with actual logic
    return res.json(tutorados);
  };

  public getTutoradoById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const tutorado = await this.tutoradoRepository.findById(id); // Replace with actual logic
      res.json(tutorado);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  public createTutorado = async (req: Request, res: Response) => {
    const [error, createTutoradoDto] = CreateTutoradoDto.create(req.body);
    if (error) return res.status(400).json({ error });

    const tutorado = await this.tutoradoRepository.create(createTutoradoDto!); // Replace with actual logic
    res.json(tutorado);
  };

  public updateTutorado = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateTutoradoDto] = UpdateTutoradoDto.create({ ...req.body, id });
    if (error) return res.status(400).json({ error });

    const updatedTutorado = await this.tutoradoRepository.updateById(updateTutoradoDto!); // Replace with actual logic
    return res.json(updatedTutorado);
  };

  public deleteTutorado = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const deletedTutorado = await this.tutoradoRepository.deleteById(id); // Replace with actual logic
    res.json(deletedTutorado);
  };
}
