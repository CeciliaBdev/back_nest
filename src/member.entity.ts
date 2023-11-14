import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Cadeau } from './cadeau.entity'; // Importez l'entité Cadeau si ce n'est pas déjà fait

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @OneToMany(type => Cadeau, cadeau => cadeau.member)
  public cadeaux: Cadeau[];
}
