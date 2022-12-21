import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Vehicle } from "./vehicle.entity";

@Entity("photos")
export class Photo {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 200 })
  url: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Vehicle, { onDelete: "CASCADE" })
  vehicle: Vehicle;
}
