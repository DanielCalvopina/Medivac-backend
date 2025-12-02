import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MancTanq } from "./MancTanq";
import { Dolly } from "./Dolly";
import { Operador } from "./Operador";
import { Tracto } from "./Tracto";
import { Viaje } from "./Viaje";

@Index("relationship_3_fk", ["dollyId"], {})
@Index("pk_mancuerna", ["mncId"], { unique: true })
@Index("mancuerna_pk", ["mncId"], { unique: true })
@Index("relationship_43_fk", ["opCed"], {})
@Index("relationship_1_fk", ["trPlc"], {})
@Entity("mancuerna", { schema: "public" })
export class Mancuerna {
  @PrimaryGeneratedColumn({ type: "integer", name: "mnc_id" })
  mncId: number;

  @Column("character varying", { name: "tr_plc", length: 60 })
  trPlc: string;

  @Column("character varying", { name: "dolly_id", length: 30 })
  dollyId: string;

  @Column("character varying", { name: "op_ced", nullable: true, length: 30 })
  opCed: string | null;

  @Column("character varying", { name: "mnc_nom", length: 60 })
  mncNom: string;

  @Column("character varying", { name: "npmc_desc", length: 60 })
  npmcDesc: string;

  @Column("integer", { name: "status" })
  status: number;

  @Column("date", { name: "created_at", nullable: true })
  createdAt: string | null;

  @Column("date", { name: "updated_at", nullable: true })
  updatedAt: string | null;

  @Column("date", { name: "deleted_at", nullable: true })
  deletedAt: string | null;

  @OneToMany(() => MancTanq, (mancTanq) => mancTanq.mnc)
  mancTanqs: MancTanq[];

  @ManyToOne(() => Dolly, (dolly) => dolly.mancuernas, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "dolly_id", referencedColumnName: "dollyId" }])
  dolly: Dolly;

  @ManyToOne(() => Operador, (operador) => operador.mancuernas, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "op_ced", referencedColumnName: "opCed" }])
  opCed2: Operador;

  @ManyToOne(() => Tracto, (tracto) => tracto.mancuernas, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "tr_plc", referencedColumnName: "trPlc" }])
  trPlc2: Tracto;

  @OneToMany(() => Viaje, (viaje) => viaje.mnc)
  viajes: Viaje[];
}
