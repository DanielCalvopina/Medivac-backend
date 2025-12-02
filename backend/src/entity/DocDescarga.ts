import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Descarga } from "./Descarga";

@Index("relationship_23_fk", ["descargaId"], {})
@Index("doc_descarga_pk", ["docDescId"], { unique: true })
@Index("pk_doc_descarga", ["docDescId"], { unique: true })
@Entity("doc_descarga", { schema: "public" })
export class DocDescarga {
  @Column("integer", { name: "descarga_id" })
  descargaId: number;

  @PrimaryGeneratedColumn({ type: "integer", name: "doc_desc_id" })
  docDescId: number;

  @Column("character varying", { name: "doc_desc_nombre", length: 60 })
  docDescNombre: string;

  @Column("character varying", { name: "doc_desc_url", length: 255 })
  docDescUrl: string;

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

  @ManyToOne(() => Descarga, (descarga) => descarga.docDescargas, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "descarga_id", referencedColumnName: "descargaId" }])
  descarga: Descarga;
}
