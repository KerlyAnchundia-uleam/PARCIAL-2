import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ElectrodomesticoService } from './electrodomestico.service';
import { CreateElectrodomesticoDto } from './dto/create-electrodomestico.dto';
import { UpdateElectrodomesticoDto } from './dto/update-electrodomestico.dto';

@Controller('electrodomestico')
export class ElectrodomesticoController {
  constructor(private readonly electrodomesticoService: ElectrodomesticoService) {}

  @Post()
  create(@Body() createElectrodomesticoDto: CreateElectrodomesticoDto) {
    return this.electrodomesticoService.create(createElectrodomesticoDto);
  }

  @Get()
  findAll() {
    return this.electrodomesticoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.electrodomesticoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateElectrodomesticoDto: UpdateElectrodomesticoDto) {
    return this.electrodomesticoService.update(id, updateElectrodomesticoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.electrodomesticoService.remove(id);
  }

  @Patch('soft-remove/:id')
  softRemove(@Param('id') id: number) {
    return this.electrodomesticoService.softRemove(id);
  }
}
