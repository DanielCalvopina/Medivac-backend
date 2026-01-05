import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Perfiles } from "./Perfiles";
import { Acciones } from "./Acciones";

@Index("relationship_52_fk", ["accionId"], {})
@Index("pk_permisos", ["attribute_2"], { unique: true })
@Index("permisos_pk", ["attribute_2"], { unique: true })
@Entity("permisos", { schema: "public" })
export class Permisos {
  @Column("integer", { name: "accion_id" })
  accionId: number;

  @PrimaryGeneratedColumn({ type: "integer", name: "attribute_2" })
  attribute_2: number;

  @Column("character varying", {
    name: "prm_nombre",
    nullable: true,
    length: 255,
  })
  prmNombre: string | null;

  @Column("character varying", {
    name: "prm_desc",
    nullable: true,
    length: 255,
  })
  prmDesc: string | null;

  @OneToMany(() => Perfiles, (perfiles) => perfiles.attribute)
  perfiles: Perfiles[];

  @ManyToOne(() => Acciones, (acciones) => acciones.permisos, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "accion_id", referencedColumnName: "accionId" }])
  accion: Acciones;
}
