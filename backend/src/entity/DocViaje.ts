import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Viaje } from "./Viaje";

@Index("doc_folio_pk", ["docViajeId"], { unique: true })
@Index("pk_doc_viaje", ["docViajeId"], { unique: true })
@Index("relationship_20_fk", ["viajeId"], {})
@Entity("doc_viaje", { schema: "public" })
export class DocViaje {
  @PrimaryGeneratedColumn({ type: "integer", name: "doc_viaje_id" })
  docViajeId: number;

  @Column("integer", { name: "viaje_id" })
  viajeId: number;

  @Column("character varying", { name: "doc_viaje_name", length: 60 })
  docViajeName: string;

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

  @ManyToOne(() => Viaje, (viaje) => viaje.docViajes, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "viaje_id", referencedColumnName: "viajeId" }])
  viaje: Viaje;
}
