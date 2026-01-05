import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Operador } from "./Operador";

@Index("pk_grupo", ["attribute_34"], { unique: true })
@Index("grupo_pk", ["attribute_34"], { unique: true })
@Index("relationship_30_fk", ["opCed"], {})
@Entity("grupo", { schema: "public" })
export class Grupo {
  @PrimaryGeneratedColumn({ type: "integer", name: "attribute_34" })
  attribute_34: number;

  @Column("character varying", { name: "op_ced", nullable: true, length: 30 })
  opCed: string | null;

  @Column("character varying", { name: "grp_nombre", length: 60 })
  grpNombre: string;

  @Column("boolean", { name: "status" })
  status: boolean;

  @Column("date", { name: "created_at" })
  createdAt: string;

  @Column("date", { name: "updated_at", nullable: true })
  updatedAt: string | null;

  @Column("date", { name: "deleted_at", nullable: true })
  deletedAt: string | null;

  @ManyToOne(() => Operador, (operador) => operador.grupos, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "op_ced", referencedColumnName: "opCed" }])
  opCed2: Operador;
}
