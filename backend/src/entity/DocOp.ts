import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Operador } from "./Operador";

@Index("doc_op_pk", ["docOpId"], { unique: true })
@Index("pk_doc_op", ["docOpId"], { unique: true })
@Index("relationship_21_fk", ["opCed"], {})
@Entity("doc_op", { schema: "public" })
export class DocOp {
  @PrimaryGeneratedColumn({ type: "integer", name: "doc_op_id" })
  docOpId: number;

  @Column("character varying", { name: "op_ced", length: 30 })
  opCed: string;

  @Column("character varying", { name: "doc_op_name", length: 60 })
  docOpName: string;

  @Column("character varying", { name: "doc_op_url", length: 255 })
  docOpUrl: string;

  @Column("integer", { name: "tipo_id" })
  tipoId: number;

  @Column("boolean", { name: "status" })
  status: boolean;

  @Column("date", { name: "created_at" })
  createdAt: string;

  @Column("date", { name: "updated_at", nullable: true })
  updatedAt: string | null;

  @Column("date", { name: "deleted_at", nullable: true })
  deletedAt: string | null;

  @ManyToOne(() => Operador, (operador) => operador.docOps, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "op_ced", referencedColumnName: "opCed" }])
  opCed2: Operador;
}
