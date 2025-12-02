import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Viaje } from "./Viaje";

@Index("pk_bitacora", ["bitId"], { unique: true })
@Index("bitacora_pk", ["bitId"], { unique: true })
@Entity("bitacora", { schema: "public" })
export class Bitacora {
  @PrimaryGeneratedColumn({ type: "integer", name: "bit_id" })
  bitId: number;

  @Column("timestamp", { name: "bit_fec_ini" })
  bitFecIni: Date;

  @Column("timestamp", { name: "bit_fec_fin" })
  bitFecFin: Date;

  @Column("integer", { name: "bit_tmp_total" })
  bitTmpTotal: number;

  @Column("character varying", { name: "bit_desc", length: 255 })
  bitDesc: string;

  @Column("integer", { name: "status" })
  status: number;

  @Column("timestamp", { name: "created_at" })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("timestamp", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @ManyToOne(() => Viaje, (viaje) => viaje.bitacoras, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "viaje_id", referencedColumnName: "viajeId" }])
  viaje: Viaje;
}