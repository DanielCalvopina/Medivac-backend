import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Tracto } from "./Tracto";

@Index("doc_tracto_pk", ["docTractoId"], { unique: true })
@Index("pk_doc_tracto", ["docTractoId"], { unique: true })
@Index("relationship_37_fk", ["trPlc"], {})
@Entity("doc_tracto", { schema: "public" })
export class DocTracto {
  @PrimaryGeneratedColumn({ type: "integer", name: "doc_tracto_id" })
  docTractoId: number;

  @Column("character varying", { name: "tr_plc", length: 60 })
  trPlc: string;

  @Column("character varying", { name: "doc_tracto_name", length: 60 })
  docTractoName: string;

  @Column("character varying", { name: "doc_carl_url", length: 255 })
  docCarlUrl: string;

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

  @ManyToOne(() => Tracto, (tracto) => tracto.docTractos, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "tr_plc", referencedColumnName: "trPlc" }])
  trPlc2: Tracto;
}
