import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { EstacionesFolio } from "./EstacionesFolio";
import { EtnsCli } from "./EtnsCli";

@Index("estaciones_pk", ["etnsId"], { unique: true })
@Index("pk_estaciones", ["etnsId"], { unique: true })
@Entity("estaciones", { schema: "public" })
export class Estaciones {
  @PrimaryGeneratedColumn({ type: "integer", name: "etns_id" })
  etnsId: number;

  @Column("character varying", { name: "etns_num_pl", length: 60 })
  etnsNumPl: string;

  @Column("character varying", { name: "erns_nombre", length: 60 })
  ernsNombre: string;

  @Column("character varying", { name: "etns_nombre_corto", length: 60 })
  etnsNombreCorto: string;

  @Column("character varying", { name: "etns_direccion", length: 300 })
  etnsDireccion: string;

  @Column("character varying", { name: "etns_ubicacion", length: 60 })
  etnsUbicacion: string;

  @Column("character varying", { name: "etns_tipo", length: 60 })
  etnsTipo: string;

  @Column("character varying", {
    name: "etns_ciudad",
    nullable: true,
    length: 60,
  })
  etnsCiudad: string | null;

  @Column("boolean", { name: "status", nullable: true })
  status: boolean | null;

  @Column("date", { name: "created_at", nullable: true })
  createdAt: string | null;

  @Column("date", { name: "updated_at", nullable: true })
  updatedAt: string | null;

  @Column("date", { name: "deleted_at", nullable: true })
  deletedAt: string | null;

  @OneToMany(() => EstacionesFolio, (estacionesFolio) => estacionesFolio.etns)
  estacionesFolios: EstacionesFolio[];

  @OneToMany(() => EtnsCli, (etnsCli) => etnsCli.etns)
  etnsClis: EtnsCli[];
}
