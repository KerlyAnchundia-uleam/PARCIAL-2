import { CreateTutoriaDto,
    TutoriaDatasource,
    TutoriaEntity,
    TutoriaRepository,
    UpdateTutoriaDto } from '../../domain';


export class TutoriaRepositoryImpl implements TutoriaRepository {

constructor(
private readonly datasource: TutoriaDatasource,
) { }


create( createTutoriaDto: CreateTutoriaDto ): Promise<TutoriaEntity> {
return this.datasource.create( createTutoriaDto );
}

getAll(): Promise<TutoriaEntity[]> {
return this.datasource.getAll();
}

findById( id: number ): Promise<TutoriaEntity> {
return this.datasource.findById( id );
}

updateById( updateTutoriaDto: UpdateTutoriaDto ): Promise<TutoriaEntity> {
return this.datasource.updateById( updateTutoriaDto );
}

deleteById( id: number ): Promise<TutoriaEntity> {
return this.datasource.deleteById( id );
}

}
