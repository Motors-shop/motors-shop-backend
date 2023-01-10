import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Commentary } from "./commentary.entity";
import { Photo } from "./photo.entity";
import { User } from "./user.entity";

@Entity("vehicles")
export class Vehicle {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: "VENDA", length: 12 })
  sellType: "VENDA" | "LEILÃO";

  @Column({ length: 150 })
  title: string;

  @Column({ length: 500 })
  description: string;

  @Column({ length: 4 })
  year: string;

  @Column("integer")
  km: number;

  @Column({ width: 12 })
  price: number;

  @Column({ length: 12 })
  type: "MOTO" | "CARRO";

  @Column({ default: false })
  isPublished: boolean;

  @Column({ length: 200 })
  capeImage: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  owner: User;

  @OneToMany(() => Photo, (photo) => photo.vehicle, {
    eager: true,
  })
  photos: Photo[];

  @OneToMany(() => Commentary, (commentary) => commentary.vehicle, {
    eager: true,
  })
  comments: Commentary[];
}
