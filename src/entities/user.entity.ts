import { Exclude } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Address } from "./address.entity";
import { RestoreCodes } from "./restoreCodes.entity";
import { Vehicle } from "./vehicle.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 120 })
  name: string;

  @Column({ length: 120, unique: true })
  email: string;

  @Column({ length: 14, unique: true })
  cpf: string;

  @Column({ length: 15 })
  phone: string;

  @Column()
  birthDate: Date;

  @Column({ length: 300 })
  biography: string;

  @Column({ length: 12, default: "COMPRADOR" })
  accountType: string;

  @Exclude()
  @Column({ length: 150 })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Address, { onDelete: "CASCADE", eager: true })
  @JoinColumn()
  address: Address;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.owner, {
    eager: true,
  })
  vehicles: Vehicle[];

  @OneToMany(() => RestoreCodes, (r) => r.issuer, { nullable: true })
  restoreCode: RestoreCodes[];
}
