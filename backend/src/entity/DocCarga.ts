import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Carga } from "./Carga";

@Index("relationship_22_fk", ["cargaId"], {})
@Index("pk_doc_carga", ["docCarId"], { unique: true })
@Index("doc_carga_pk", ["docCarId"], { unique: true })
@Entity("doc_carga", { schema: "public" })
export class DocCarga {
  @PrimaryGeneratedColumn({ type: "integer", name: "doc_car_id" })
  docCarId: number;

  @Column("integer", { name: "carga_id" })
  cargaId: number;

  @Column("character varying", { name: "doc_car_name", length: 60 })
  docCarName: string;

  @Column("character varying", { name: "doc_car_url", length: 255 })
  docCarUrl: string;

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

  @ManyToOne(() => Carga, (carga) => carga.docCargas, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "carga_id", referencedColumnName: "cargaId" }])
  carga: Carga;
}
