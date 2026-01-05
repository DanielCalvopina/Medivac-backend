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
import { Carga } from "./Carga";
import { Descarga } from "./Descarga";
import { DocFolio } from "./DocFolio";
import { EstacionesFolio } from "./EstacionesFolio";
import { Producto } from "./Producto";
import { Viaje } from "./Viaje";

@Entity("folio", { schema: "public" })
export class Folio {
  @PrimaryGeneratedColumn({ type: "integer", name: "fol_id" })
  folId: number;

  @Column("integer", { name: "prd_id" })
  prdId: number;

  @Column("integer", { name: "viaje_id" })
  viajeId: number;

  @Column("character varying", { name: "fol_cod", length: 255 })
  folCod: string;

  @Column("character varying", { name: "fol_name", length: 255 })
  folName: string;

  @Column("character varying", { name: "fol_desc", length: 255 })
  folDesc: string;

  @Column("boolean", { name: "status", default: true })
  status: boolean;

  @Column("character varying", { name: "tnq_numse", length: 255 })
  tnqNumse: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @DeleteDateColumn({ name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  // --- RELACIONES ---
  @OneToMany(() => Carga, (carga) => carga.fol)
  cargas: Carga[];

  @OneToMany(() => Descarga, (descarga) => descarga.fol)
  descargas: Descarga[];

  @OneToMany(() => DocFolio, (docFolio) => docFolio.fol)
  docFolios: DocFolio[];

  @OneToMany(() => EstacionesFolio, (estacionesFolio) => estacionesFolio.fol)
  estacionesFolios: EstacionesFolio[];

  @ManyToOne(() => Producto, (producto) => producto.folios)
  @JoinColumn([{ name: "prd_id", referencedColumnName: "prdId" }])
  prd: Producto;

  @ManyToOne(() => Viaje, (viaje) => viaje.folios)
  @JoinColumn([{ name: "viaje_id", referencedColumnName: "viajeId" }])
  viaje: Viaje;
}