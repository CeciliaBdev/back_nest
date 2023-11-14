import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { MemberService } from './member.service';
import { Member } from '../member.entity';

@Controller('members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  // @Get()
  // async findAll(): Promise<Member[]> {
  //   return this.memberService.findAll();
  // }

  // - pagination
  @Get()
  async findAll(@Query('page') page: number = 1, @Query('itemsPerPage') itemsPerPage: number = 10): Promise<Member[]> {
    return this.memberService.findAll(page, itemsPerPage);
  }
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Member> {
    return this.memberService.findOne(id);
  }

  @Post()
  async create(@Body() member: Member): Promise<Member> {
    return this.memberService.create(member);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updatedMember: Member): Promise<Member> {
    return this.memberService.update(id, updatedMember);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.memberService.remove(id);
  }
}
