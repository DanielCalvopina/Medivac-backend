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
import { Sellos } from "./Sellos";
import { DocCarga } from "./DocCarga"; // Importación activa

@Entity("carga", { schema: "public" })
export class Carga {
  @PrimaryGeneratedColumn({ type: "integer", name: "carga_id" })
  cargaId: number;

  @Column("integer", { name: "fol_id", nullable: true })
  folId: number | null;

  @Column("date", { name: "carga_fech_entrega", nullable: true })
  cargaFechEntrega: Date | null;

  @Column("character varying", { name: "carga_carga_real", nullable: true, length: 50 })
  cargaCargaReal: string | null;

  @Column("character varying", { name: "carga_bole", nullable: true, length: 255 })
  cargaBole: string | null;

  @Column("character varying", { name: "carga_densidad", nullable: true, length: 255 })
  cargaDensidad: string | null;

  @Column("character varying", { name: "carga_temperatura", nullable: true, length: 255 })
  cargaTemperatura: string | null;

  // --- RELACIONES ---

  @ManyToOne(() => Folio, (folio) => folio.cargas)
  @JoinColumn([{ name: "fol_id", referencedColumnName: "folId" }])
  fol: Folio;

  // Relación con Sellos (1 a N) - Con cascada para guardar fácil
  @OneToMany(() => Sellos, (sellos) => sellos.carga, {
    cascade: true, 
  })
  sellos: Sellos[];

  // Relación con DocCarga (1 a N) - Restaurada
  @OneToMany(() => DocCarga, (docCarga) => docCarga.carga)
  docCargas: DocCarga[];
}