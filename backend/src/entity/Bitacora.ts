import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { Viaje } from "./Viaje";

@Entity("bitacora", { schema: "public" })
export class Bitacora {
  @PrimaryGeneratedColumn({ type: "integer", name: "bit_id" })
  bitId: number;

  @Column("timestamp", { name: "bit_fec_ini" })
  bitFecIni: Date;

  @Column("timestamp", { name: "bit_fec_fin", nullable: true })
  bitFecFin: Date | null;

  @Column("integer", { name: "bit_tmp_total", nullable: true })
  bitTmpTotal: number | null;

  @Column("character varying", { name: "bit_desc", length: 255 })
  bitDesc: string;

  @Column("integer", { name: "status", default: 1 })
  status: number;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @DeleteDateColumn({ name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("integer", { name: "viaje_id" })
  viajeId: number;

  @ManyToOne(() => Viaje, (viaje) => viaje.bitacoras)
  @JoinColumn([{ name: "viaje_id", referencedColumnName: "viajeId" }])
  viaje: Viaje;
}