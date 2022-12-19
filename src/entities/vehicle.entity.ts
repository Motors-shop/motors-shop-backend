import {
  Column,
  CreateDateColumn,
  Entity,
  // ManyToOne,
  // OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("vehicles")
export class Vehicle {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: "VENDA", length: 12 })
  sellType: string;

  @Column({ length: 150 })
  title: string;

  @Column({ length: 500 })
  description: string;

  @Column({ length: 4 })
  year: string;

  @Column("integer")
  km: number;

  @Column("decimal", { precision: 12, scale: 2 })
  price: number;

  @Column({ length: 12 })
  type: string;

  @Column({ default: false })
  isPublished: boolean;

  @Column({ length: 200 })
  capeImage: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  isActive: boolean;

  // @ManyToOne(()=> User, {onDelete: "CASCADE"})
  // owner: User; //Sugerindo a relação com a futura entidade User

  // @OneToMany(() => Photo, (photo) => photo.vehicle, {
  //   eager: true,
  // })
  // photos: Photo[]; //Sugerindo a relação futura com a galeria, que pode ser chamada de Photo

  // @OneToMany(()=>Commentary, (commentary) => commentary.vehicle {
  //   eager: true,
  // })
  // comments: Commentary[]; //Sugerindo a futura relação com a entidade de comentários
}
