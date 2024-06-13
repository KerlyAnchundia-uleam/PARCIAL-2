export class UpdateTutoriaDto {
  private constructor(
      public readonly id: number,
      public readonly idTutor?: string,
      public readonly idTutorado?: string,
      public readonly asignatura?: string,
      public readonly numeroDeHoras?: number,
      public readonly fecha?: string,
      public readonly hora?: string
  ) {}

  static create(props: { [key: string]: any }): [string?, UpdateTutoriaDto?] {
      const { id, idTutor, idTutorado, asignatura, numeroDeHoras, fecha, hora } = props;

      if (id === undefined) return ['ID property is required', undefined];

      return [undefined, new UpdateTutoriaDto(id, idTutor, idTutorado, asignatura, numeroDeHoras, fecha, hora)];
  }
}
