import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Address } from "./address.entity";
import { Vehicle } from "./vehicle.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 120 })
  name: string;

  @Column({ length: 120, unique: true })
  email: string;

  @Column({ length: 11, unique: true })
  cpf: string;

  @Column({ length: 11 })
  phone: string;

  @Column()
  birthDate: Date;

  @Column({ length: 300 })
  biography: string;

  @Column({ length: 12, default: "COMPRADOR" })
  accountType: string;

  @Column({ length: 150 })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Address, { onDelete: "CASCADE" })
  address: Address;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.owner, {
    eager: true,
  })
  vehicles: Vehicle[];
}
