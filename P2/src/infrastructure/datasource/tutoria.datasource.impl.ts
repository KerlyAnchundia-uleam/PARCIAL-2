import { prisma } from '../../data/postgres';
import { CreateTutoriaDto, TutoriaDatasource, TutoriaEntity, UpdateTutoriaDto } from '../../domain';

export class TutoriaDatasourceImpl implements TutoriaDatasource {

  async create(createTutoriaDto: CreateTutoriaDto): Promise<TutoriaEntity> {
    const tutoria = await prisma.tutoria.create({
      data: createTutoriaDto!
    });

    return TutoriaEntity.fromObject(tutoria);
  }

  async getAll(): Promise<TutoriaEntity[]> {
    const tutorias = await prisma.tutoria.findMany();
    return tutorias.map(tutoria => TutoriaEntity.fromObject(tutoria));
  }

  async findById(id: number): Promise<TutoriaEntity> {
    const tutoria = await prisma.tutoria.findFirst({
      where: { id }
    });

    if (!tutoria) throw `Tutoria with id ${id} not found`;
    return TutoriaEntity.fromObject(tutoria);
  }

  async updateById(updateTutoriaDto: UpdateTutoriaDto): Promise<TutoriaEntity> {
    await this.findById(updateTutoriaDto.id);

    const updatedTutoria = await prisma.tutoria.update({
      where: { id: updateTutoriaDto.id },
      data: updateTutoriaDto!
    });

    return TutoriaEntity.fromObject(updatedTutoria);
  }

  async deleteById(id: number): Promise<TutoriaEntity> {
    await this.findById(id);
    const deleted = await prisma.tutoria.delete({
      where: { id }
    });

    return TutoriaEntity.fromObject(deleted);
  }
}
