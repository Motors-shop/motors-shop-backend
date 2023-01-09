import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity("restoreCodes")
export class RestoreCodes {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 6 })
  code: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  expiresAt: Date;

  @Column({ default: false })
  hasUsed: boolean;

  @ManyToOne(() => User, (u) => u.restoreCode, {
    onDelete: "CASCADE",
  })
  issuer: User;
}
