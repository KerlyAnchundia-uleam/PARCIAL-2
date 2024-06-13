export class UpdateTutorDto {
  private constructor(
      public readonly id: number,
      public readonly nombre?: string,
      public readonly identificacion?: string,
      public readonly experticia?: string
  ) {}

  static create(props: { [key: string]: any }): [string?, UpdateTutorDto?] {
      const { id, nombre, identificacion, experticia } = props;

      if (id === undefined) return ['ID property is required', undefined];

      return [undefined, new UpdateTutorDto(id, nombre, identificacion, experticia)];
  }
}
