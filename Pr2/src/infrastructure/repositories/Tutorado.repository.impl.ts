import { CreateTutoradoDto,
    TutoradoDatasource,
    TutoradoEntity,
    TutoradoRepository,
    UpdateTutoradoDto } from '../../domain';


export class TutoradoRepositoryImpl implements TutoradoRepository {

constructor(
private readonly datasource: TutoradoDatasource,
) { }


create( createTutoradoDto: CreateTutoradoDto ): Promise<TutoradoEntity> {
return this.datasource.create( createTutoradoDto );
}

getAll(): Promise<TutoradoEntity[]> {
return this.datasource.getAll();
}

findById( id: number ): Promise<TutoradoEntity> {
return this.datasource.findById( id );
}

updateById( updateTutoradoDto: UpdateTutoradoDto ): Promise<TutoradoEntity> {
return this.datasource.updateById( updateTutoradoDto );
}

deleteById( id: number ): Promise<TutoradoEntity> {
return this.datasource.deleteById( id );
}

}
