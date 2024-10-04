import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class LanguageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;
}
