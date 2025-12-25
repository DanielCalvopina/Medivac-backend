import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { Folio } from "./Folio";
import { DocDescarga } from "./DocDescarga"; // Importación activa

@Entity("descarga", { schema: "public" })
export class Descarga {
  @PrimaryGeneratedColumn({ type: "integer", name: "descarga_id" })
  descargaId: number;

  @Column("integer", { name: "fol_id" })
  folId: number;

  @Column("date", { name: "descarga_fech_entrega", nullable: true })
  descargaFechEntrega: Date | null;

  @Column("character varying", {
    name: "descarga_bole",
    nullable: true,
    length: 255,
  })
  descargaBole: string | null;

  @Column("character varying", {
    name: "descarga_densidad",
    nullable: true,
    length: 255,
  })
  descargaDensidad: string | null;

  @Column("character varying", {
    name: "descarga_temperatura",
    nullable: true,
    length: 255,
  })
  descargaTemperatura: string | null;

  // --- AUDITORÍA ---
  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @DeleteDateColumn({ name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  // --- RELACIONES ---

  @ManyToOne(() => Folio, (folio) => folio.descargas, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "fol_id", referencedColumnName: "folId" }])
  fol: Folio;

  // Relación con DocDescarga (1 a N)
  @OneToMany(() => DocDescarga, (docDescarga) => docDescarga.descarga)
  docDescargas: DocDescarga[];
}