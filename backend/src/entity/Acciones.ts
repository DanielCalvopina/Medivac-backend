import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Permisos } from "./Permisos";

@Index("acciones_pk", ["accionId"], { unique: true })
@Index("pk_acciones", ["accionId"], { unique: true })
@Entity("acciones", { schema: "public" })
export class Acciones {
  @PrimaryGeneratedColumn({ type: "integer", name: "accion_id" })
  accionId: number;

  @Column("character varying", { name: "accion_end", length: 255 })
  accionEnd: string;

  @Column("integer", { name: "accion_tipo" })
  accionTipo: number;

  @Column("character varying", {
    name: "accion_desc",
    nullable: true,
    length: 255,
  })
  accionDesc: string | null;

  @Column("boolean", { name: "accion_status", nullable: true })
  accionStatus: boolean | null;

  @OneToMany(() => Permisos, (permisos) => permisos.accion)
  permisos: Permisos[];
}
