export class CreateTutorDto {
  private constructor(

      public readonly id: number,
      public readonly Nombre: string,
      public readonly identificacion: string,
      public readonly Experticia: string
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateTutorDto?] {
      const { ID, Nombre, Identificación, Experticia } = props;

      if (ID === undefined) return ['ID property is required', undefined];
      if (!Nombre) return ['Nombre property is required', undefined];
      if (!Identificación) return ['Identificación property is required', undefined];
      if (!Experticia) return ['Experticia property is required', undefined];

      return [undefined, new CreateTutorDto(ID, Nombre, Identificación, Experticia)];
  }
}
