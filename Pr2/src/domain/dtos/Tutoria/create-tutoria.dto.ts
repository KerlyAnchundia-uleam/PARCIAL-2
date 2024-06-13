export class CreateTutoriaDto {
  private constructor(
    public readonly id: number,
    public readonly asignatura: string,
    public readonly horas: string,
    public readonly fecha: string,
    public readonly hora: string,
    public readonly tutorID: number,
    public readonly tutoradoID: number,
    public readonly estado: string = 'Activo'
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateTutoriaDto?] {
    const { id, asignatura, horas, fecha, hora, tutorID, tutoradoID, estado } = props;

    if (!id) return ['ID property is required', undefined];
    if (!tutorID) return ['Tutor ID property is required', undefined];
    if (!tutoradoID) return ['Tutorado ID property is required', undefined];
    if (!asignatura) return ['Asignatura property is required', undefined];
    if (horas === undefined) return ['Horas property is required', undefined];
    if (!fecha) return ['Fecha property is required', undefined];
    if (!hora) return ['Hora property is required', undefined];

    return [undefined, new CreateTutoriaDto(id, asignatura, horas, fecha, hora, tutorID, tutoradoID, estado)];
  }
}
