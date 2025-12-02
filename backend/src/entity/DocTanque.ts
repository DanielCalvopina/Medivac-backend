import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Tanque } from "./Tanque";

@Index("doc_tanque_pk", ["docTaqId"], { unique: true })
@Index("pk_doc_tanque", ["docTaqId"], { unique: true })
@Index("relationship_26_fk", ["tnqId"], {})
@Entity("doc_tanque", { schema: "public" })
export class DocTanque {
  @PrimaryGeneratedColumn({ type: "integer", name: "doc_taq_id" })
  docTaqId: number;

  @Column("integer", { name: "tnq_id", nullable: true })
  tnqId: number | null;

  @Column("character varying", { name: "doc_taq_name", length: 255 })
  docTaqName: string;

  @Column("character varying", { name: "doc_taq_url", length: 255 })
  docTaqUrl: string;

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

  @ManyToOne(() => Tanque, (tanque) => tanque.docTanques, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "tnq_id", referencedColumnName: "tnqId" }])
  tnq: Tanque;
}
