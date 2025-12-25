import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { EstacionesFolio } from "./EstacionesFolio";
import { EtnsCli } from "./EtnsCli";

@Entity("estaciones", { schema: "public" })
export class Estaciones {
  @PrimaryGeneratedColumn({ type: "integer", name: "etns_id" })
  etnsId: number;

  @Column("character varying", { name: "etns_num_pl", length: 255 })
  etnsNumPl: string;

  // Mantenemos el nombre de columna tal cual lo tienes en BD (erns_nombre)
  @Column("character varying", { name: "erns_nombre", length: 255 })
  ernsNombre: string;

  @Column("character varying", { name: "etns_nombre_corto", length: 255 })
  etnsNombreCorto: string;

  @Column("character varying", { name: "etns_direccion", length: 1050 })
  etnsDireccion: string;

  @Column("character varying", { name: "etns_ubicacion", length: 255 })
  etnsUbicacion: string;

  @Column("character varying", { name: "etns_ciudad", nullable: true, length: 255 })
  etnsCiudad: string | null;

  @Column("boolean", { name: "status", default: true })
  status: boolean;

  // --- FECHAS AUTOMÁTICAS ---
  @CreateDateColumn({ name: "created_at", type: 'date' })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", type: 'date', nullable: true })
  updatedAt: Date | null;

  @DeleteDateColumn({ name: "deleted_at", type: 'date', nullable: true })
  deletedAt: Date | null;

  // --- RELACIONES RESTAURADAS ---
  @OneToMany(() => EstacionesFolio, (estacionesFolio) => estacionesFolio.etns)
  estacionesFolios: EstacionesFolio[];

  @OneToMany(() => EtnsCli, (etnsCli) => etnsCli.etns)
  etnsClis: EtnsCli[];
}