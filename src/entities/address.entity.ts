import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity("addresses")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 8 })
  cep: string;

  @Column({ length: 2 })
  state: string;

  @Column({ length: 30 })
  city: string;

  @Column({ length: 80 })
  street: string;

  @Column({ length: 5 })
  number: string;

  @Column({ length: 60 })
  complement: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => User, (user) => user.address)
  user: User;
}
