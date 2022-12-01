import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Specialization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;
}
