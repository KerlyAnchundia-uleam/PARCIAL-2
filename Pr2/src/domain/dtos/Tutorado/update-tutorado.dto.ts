export class UpdateTutoradoDto {
  private constructor(
      public readonly id: number,
      public readonly nombre?: string,
      public readonly identificacion?: string
  ) {}

  static create(props: { [key: string]: any }): [string?, UpdateTutoradoDto?] {
      const { id, nombre, identificacion } = props;

      if (id === undefined) return ['ID property is required', undefined];

      return [undefined, new UpdateTutoradoDto(id, nombre, identificacion)];
  }
}
