import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Member } from './member.entity'; // Importez l'entité Cadeau si ce n'est pas déjà fait


@Entity()
export class Cadeau {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  site: string;

  @Column({ default: false }) 
  reservation: boolean;

  @Column()
  offerer: string;

  @ManyToOne(type => Member, member => member.cadeaux)
  member: Member;

}
