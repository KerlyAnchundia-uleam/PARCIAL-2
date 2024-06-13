import { prisma } from '../../data/postgres';
import { CreateTutoradoDto, TutoradoDatasource, TutoradoEntity, UpdateTutoradoDto } from '../../domain';

export class TutoradoDatasourceImpl implements TutoradoDatasource {

  async create(createTutoradoDto: CreateTutoradoDto): Promise<TutoradoEntity> {
    const tutorado = await prisma.tutorado.create({
      data: createTutoradoDto!
    });

    return TutoradoEntity.fromObject(tutorado);
  }

  async getAll(): Promise<TutoradoEntity[]> {
    const tutorados = await prisma.tutorado.findMany();
    return tutorados.map(tutorado => TutoradoEntity.fromObject(tutorado));
  }

  async findById(id: number): Promise<TutoradoEntity> {
    const tutorado = await prisma.tutorado.findFirst({
      where: { id }
    });

    if (!tutorado) throw `Tutorado with id ${id} not found`;
    return TutoradoEntity.fromObject(tutorado);
  }

  async updateById(updateTutoradoDto: UpdateTutoradoDto): Promise<TutoradoEntity> {
    await this.findById(updateTutoradoDto.id);

    const updatedTutorado = await prisma.tutorado.update({
      where: { id: updateTutoradoDto.id },
      data: updateTutoradoDto!
    });

    return TutoradoEntity.fromObject(updatedTutorado);
  }

  async deleteById(id: number): Promise<TutoradoEntity> {
    await this.findById(id);
    const deleted = await prisma.tutorado.delete({
      where: { id }
    });

    return TutoradoEntity.fromObject(deleted);
  }

}
