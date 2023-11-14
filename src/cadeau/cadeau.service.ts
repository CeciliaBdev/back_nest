import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cadeau } from '../cadeau.entity';

@Injectable()
export class CadeauService {
  constructor(
    @InjectRepository(Cadeau)
    private cadeauRepository: Repository<Cadeau>,
  ) {
  }

  // async findAll(): Promise<Cadeau[]> {
  //   return this.cadeauRepository.find();
  // }
  // - pagination
  async findAll(page: number = 1, itemsPerPage: number = 10): Promise<Cadeau[]> {
    const skip = (page - 1) * itemsPerPage;
    return this.cadeauRepository.find({
      skip,
      take: itemsPerPage,
    });
  }
  

  async findOne(id: number): Promise<Cadeau> {
    return this.cadeauRepository.findOne({ where: { id } })
    ;
  }

  async create(cadeau: Cadeau): Promise<Cadeau> {
    return this.cadeauRepository.save(cadeau);
  }

  async update(id: number, updatedCadeau: Cadeau): Promise<Cadeau> {
    await this.cadeauRepository.update(id, updatedCadeau);
    return this.cadeauRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.cadeauRepository.delete(id);
  }
}
