// cadeau.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cadeau } from './cadeau.entity';
import { CadeauService } from './cadeau/cadeau.service';
import { CadeauController } from './cadeau/cadeau.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cadeau])],
  providers: [CadeauService],
  controllers: [CadeauController],
  exports: [CadeauService],
})
export class CadeauModule {}
