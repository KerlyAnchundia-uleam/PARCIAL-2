
export class CreateTutoradoDto {
  private constructor(
      public readonly nombre: string,
      public readonly identificacion: string,
      public readonly estado: string = 'Activo'
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateTutoradoDto?] {
      const { nombre, identificacion, estado } = props;

      if (!nombre) return ['Nombre property is required', undefined];
      if (!identificacion) return ['Identificacion property is required', undefined];

      return [undefined, new CreateTutoradoDto(nombre, identificacion, estado)];
  }
}
