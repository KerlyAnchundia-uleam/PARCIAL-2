import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TutoriaService } from './tutoria.service';
import { CreateTutoriaDto } from './dto/create-tutoria.dto';
import { UpdateTutoriaDto } from './dto/update-tutoria.dto';

@Controller('tutoria')
export class TutoriaController {
  constructor(private readonly tutoriaService: TutoriaService) {}

  @Post()
  create(@Body() createTutoriaDto: CreateTutoriaDto) {
    return this.tutoriaService.create(createTutoriaDto);
  }

  @Get()
  findAll() {
    return this.tutoriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tutoriaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTutoriaDto: UpdateTutoriaDto) {
    return this.tutoriaService.update(id, updateTutoriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tutoriaService.remove(id);
  }
}
