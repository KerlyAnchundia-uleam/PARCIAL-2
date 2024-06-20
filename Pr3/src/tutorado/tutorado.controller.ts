import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TutoradoService } from './tutorado.service';
import { CreateTutoradoDto } from './dto/create-tutorado.dto';
import { UpdateTutoradoDto } from './dto/update-tutorado.dto';

@Controller('tutorado')
export class TutoradoController {
  constructor(private readonly tutoradoService: TutoradoService) {}

  @Post()
  create(@Body() createTutoradoDto: CreateTutoradoDto) {
    return this.tutoradoService.create(createTutoradoDto);
  }

  @Get()
  findAll() {
    return this.tutoradoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tutoradoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTutoradoDto: UpdateTutoradoDto) {
    return this.tutoradoService.update(id, updateTutoradoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tutoradoService.remove(id);
  }
}
