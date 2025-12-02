import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Dolly } from "./Dolly";

@Index("pk_doc_dolly", ["docDollyId"], { unique: true })
@Index("doc_dolly_pk", ["docDollyId"], { unique: true })
@Index("relationship_25_fk", ["dollyId"], {})
@Entity("doc_dolly", { schema: "public" })
export class DocDolly {
  @PrimaryGeneratedColumn({ type: "integer", name: "doc_dolly_id" })
  docDollyId: number;

  @Column("character varying", { name: "dolly_id", length: 30 })
  dollyId: string;

  @Column("character varying", { name: "doc_dolly_name", length: 255 })
  docDollyName: string;

  @Column("character varying", { name: "doc_url", length: 255 })
  docUrl: string;

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

  @ManyToOne(() => Dolly, (dolly) => dolly.docDollies, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "dolly_id", referencedColumnName: "dollyId" }])
  dolly: Dolly;
}
