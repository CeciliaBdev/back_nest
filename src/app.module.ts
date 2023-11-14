// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberModule } from './member.module'; 
import { CadeauModule } from './cadeau.module'; 
import { Member } from './member.entity';
import { Cadeau } from './cadeau.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // Nom du fichier de base de données
      port: 3306,
      username:'root',
      password: 'torototo',
      database : 'liste',
      entities: [Member, Cadeau], // Incluez les deux entités
      synchronize: true, // Synchronisation automatique de la base de données (pour le développement uniquement)
    }),
    MemberModule, 
    CadeauModule, 
  ],
})
export class AppModule {}
