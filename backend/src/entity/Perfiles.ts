import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Permisos } from "./Permisos";
import { PerfilesDeUsuario } from "./PerfilesDeUsuario";

@Index("relationship_50_fk", ["attribute_2"], {})
@Index("pk_perfiles", ["prfId"], { unique: true })
@Index("perfiles_pk", ["prfId"], { unique: true })
@Entity("perfiles", { schema: "public" })
export class Perfiles {
  @Column("integer", { name: "attribute_2" })
  attribute_2: number;

  @PrimaryGeneratedColumn({ type: "integer", name: "prf_id" })
  prfId: number;

  @Column("character varying", { name: "prf_desc", nullable: true, length: 60 })
  prfDesc: string | null;

  @Column("boolean", { name: "prf_status", nullable: true })
  prfStatus: boolean | null;

  @Column("date", { name: "created_at", nullable: true })
  createdAt: string | null;

  @Column("date", { name: "deleted_at", nullable: true })
  deletedAt: string | null;

  @Column("date", { name: "updated_at", nullable: true })
  updatedAt: string | null;

  @ManyToOne(() => Permisos, (permisos) => permisos.perfiles, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "attribute_2", referencedColumnName: "attribute_2" }])
  attribute: Permisos;

  @OneToMany(
    () => PerfilesDeUsuario,
    (perfilesDeUsuario) => perfilesDeUsuario.prf
  )
  perfilesDeUsuarios: PerfilesDeUsuario[];
}
