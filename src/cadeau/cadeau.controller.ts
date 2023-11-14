import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { Cadeau } from '../cadeau.entity';
import { CadeauService } from './cadeau.service';

@Controller('cadeau')
export class CadeauController {
  constructor(private readonly cadeauService: CadeauService) {}

  // @Get()
  // findAll(): Promise<Cadeau[]> {
  //   return this.cadeauService.findAll();
  // }

  // - pagination
  @Get()
  findAll(@Query('page') page: number = 1, @Query('itemsPerPage') itemsPerPage: number = 10): Promise<Cadeau[]> {
    return this.cadeauService.findAll(page, itemsPerPage);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Cadeau> {
    return this.cadeauService.findOne(id);
  }

  @Post()
  create(@Body() cadeau: Cadeau): Promise<Cadeau> {
    return this.cadeauService.create(cadeau);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatedCadeau: Cadeau): Promise<Cadeau> {
    return this.cadeauService.update(id, updatedCadeau);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.cadeauService.remove(id);
  }
}
