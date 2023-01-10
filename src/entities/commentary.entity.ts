import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user.entity";
import { Vehicle } from "./vehicle.entity";

@Entity("comments")
export class Commentary {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 500 })
  commentary: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  user: User;

  @ManyToOne(() => Vehicle, { onDelete: "CASCADE" })
  vehicle: Vehicle;
}
