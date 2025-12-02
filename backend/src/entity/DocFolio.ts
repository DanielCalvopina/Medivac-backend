import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Folio } from "./Folio";

@Index("pk_doc_folio", ["docFolioId"], { unique: true })
@Index("doc_folio_pk2", ["docFolioId"], { unique: true })
@Index("relationship_31_fk", ["folId"], {})
@Entity("doc_folio", { schema: "public" })
export class DocFolio {
  @PrimaryGeneratedColumn({ type: "integer", name: "doc_folio_id" })
  docFolioId: number;

  @Column("integer", { name: "fol_id" })
  folId: number;

  @Column("character varying", { name: "doc_folio_name", length: 60 })
  docFolioName: string;

  @Column("character varying", { name: "doc_folio_url", length: 255 })
  docFolioUrl: string;

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

  @ManyToOne(() => Folio, (folio) => folio.docFolios, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "fol_id", referencedColumnName: "folId" }])
  fol: Folio;
}
