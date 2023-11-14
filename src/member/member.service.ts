import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from '../member.entity';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member) 
    private memberRepository: Repository<Member>,
  ) {}

  // async findAll(): Promise<Member[]> {
  //   return this.memberRepository.find({ relations: ['cadeaux'] });
  // }
  // - pagination
  async findAll(page: number = 1, itemsPerPage: number = 10): Promise<Member[]> {
    const skip = (page - 1) * itemsPerPage;
    return this.memberRepository.find({
      relations: ['cadeaux'],
      skip,
      take: itemsPerPage,
    });
  }
  
  async findOne(id: number): Promise<Member> {
    return this.memberRepository.findOne({
      where: {
        id,
      },
      relations: ['cadeaux'],
    });
  }
  
  async create(member: Member): Promise<Member> {
    return this.memberRepository.save(member);
  }

  async update(id: number, updatedMember: Member): Promise<Member> {
    await this.memberRepository.update(id, updatedMember);
    return this.memberRepository.findOne({
      where: {
        id,
      },
      relations: ['cadeaux'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.memberRepository.delete(id);
  }
}
