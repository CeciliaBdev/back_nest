// member.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './member.entity';
import { MemberService } from './member/member.service';
import { MemberController } from './member/member.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Member])], // Assurez-vous d'importer Member ici
  providers: [MemberService],
  controllers: [MemberController],
  exports: [MemberService],
})
export class MemberModule {}

