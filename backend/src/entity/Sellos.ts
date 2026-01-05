import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Carga } from "./Carga";

@Entity("sellos", { schema: "public" })
export class Sellos {
  @PrimaryGeneratedColumn({ type: "integer", name: "sellos_id" })
  sellosId: number;

  @Column("integer", { name: "carga_id" })
  cargaId: number;

  @Column("character varying", { name: "sellos_num", length: 30 })
  sellosNum: string;

  @ManyToOne(() => Carga, (carga) => carga.sellos, {
    onDelete: "CASCADE", // Si se borra la carga, se borran los sellos
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "carga_id", referencedColumnName: "cargaId" }])
  carga: Carga;
}