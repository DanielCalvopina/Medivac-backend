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
import { MancOp } from "./MancOp";
import { MancTanq } from "./MancTanq";
import { Dolly } from "./Dolly";
import { Tracto } from "./Tracto";
import { Viaje } from "./Viaje";

@Entity("mancuerna", { schema: "public" })
export class Mancuerna {
  @PrimaryGeneratedColumn({ type: "integer", name: "mnc_id" })
  mncId: number;

  // --- COLUMNAS DE RELACIÓN (FKs explícitas para facilitar consultas) ---
  @Column("character varying", { name: "tr_plc", length: 60, nullable: true })
  trPlc: string | null;

  @Column("character varying", { name: "dolly_id", length: 30, nullable: true })
  dollyId: string | null;

  // --- DATOS INFORMATIVOS ---
  @Column("character varying", { name: "mnc_nom", length: 60, nullable: true })
  mncNom: string | null;

  @Column("character varying", { name: "npmc_desc", length: 60, nullable: true })
  npmcDesc: string | null;

  @Column("integer", { name: "status", default: 1 })
  status: number;

  // --- FECHAS AUTOMÁTICAS ---
  @CreateDateColumn({ name: "created_at", type: 'date' })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", type: 'date', nullable: true })
  updatedAt: Date | null;

  @DeleteDateColumn({ name: "deleted_at", type: 'date', nullable: true })
  deletedAt: Date | null;

  // --- RELACIONES ---

  @OneToMany(() => MancOp, (mancOp) => mancOp.mnc)
  mancOps: MancOp[];

  // Relación con la tabla intermedia de Tanques
  @OneToMany(() => MancTanq, (mancTanq) => mancTanq.mnc)
  mancTanqs: MancTanq[];

  @ManyToOne(() => Dolly, (dolly) => dolly.mancuernas)
  @JoinColumn([{ name: "dolly_id", referencedColumnName: "dollyId" }])
  dolly: Dolly;

  @ManyToOne(() => Tracto, (tracto) => tracto.mancuernas)
  @JoinColumn([{ name: "tr_plc", referencedColumnName: "trPlc" }])
  tracto: Tracto;

  @OneToMany(() => Viaje, (viaje) => viaje.mnc)
  viajes: Viaje[];
}