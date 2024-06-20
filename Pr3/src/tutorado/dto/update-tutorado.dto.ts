import { PartialType } from '@nestjs/mapped-types';
import { CreateTutoradoDto } from './create-tutorado.dto';

export class UpdateTutoradoDto extends PartialType(CreateTutoradoDto) {}
