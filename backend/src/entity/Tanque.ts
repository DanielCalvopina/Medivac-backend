import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from "typeorm";
import { DocTanque } from "./DocTanque";
import { MancTanq } from "./MancTanq";

@Entity("tanque", { schema: "public" })
export class Tanque {
  // ==========================
  //      IDENTIFICADORES
  // ==========================
  @PrimaryGeneratedColumn({ type: "integer", name: "tnq_id" })
  tnqId: number;

  // ==========================
  //      DATOS TÉCNICOS
  // ==========================
  @Column("character varying", { name: "tnq_placas", length: 60 })
  tnqPlacas: string;

  @Column("character varying", { name: "tnq_eco", length: 60 })
  tnqEco: string;

  @Column("character varying", { name: "tnq_eco_val", length: 60 })
  tnqEcoVal: string;

  @Column("character varying", { name: "tnq_num_ser", length: 60 })
  tnqNumSer: string;

  @Column("character varying", { name: "tnq_mrc", length: 60 })
  tnqMrc: string;

  @Column("character varying", { name: "tnq_mod", length: 60 })
  tnqMod: string;

  @Column("character varying", { name: "tnq_color", length: 60 })
  tnqColor: string;

  @Column("character varying", { name: "tnq_nm_crc", length: 60 })
  tnqNmCrc: string;

  @Column("character varying", { name: "tnq_nm_dbl_art", length: 60 })
  tnqNmDblArt: string;

  @Column("character varying", { name: "tnq_clc_dbl_art", length: 60 })
  tnqClcDblArt: string;

  @Column("character varying", { name: "tnq_no_ofi_cre", length: 60 })
  tnqNoOfiCre: string;

  @Column("character varying", { name: "tnq_permiso_sct", length: 60 })
  tnqPermisoSct: string;

  @Column("character varying", { name: "tnq_capacidad", length: 60 })
  tnqCapacidad: string;

  @Column("character varying", { name: "tnq_desc", length: 255 })
  tnqDesc: string;

  @Column("character varying", { name: "tnq_poliza_seguro", length: 60 })
  tnqPolizaSeguro: string;

  @Column("date", { name: "tnq_exp_poliza" })
  tnqExpPoliza: string;

  @Column("integer", { name: "status", default: 1 })
  status: number;

  // ==========================
  //        AUDITORÍA
  // ==========================
  @CreateDateColumn({ name: "created_at", type: "date" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", type: "date", nullable: true })
  updatedAt: Date | null;

  @DeleteDateColumn({ name: "deleted_at", type: "date", nullable: true })
  deletedAt: Date | null;

  // ==========================
  //       RELACIONES
  // ==========================
  @OneToMany(() => DocTanque, (docTanque) => docTanque.tnq)
  docTanques: DocTanque[];

  @OneToMany(() => MancTanq, (mancTanq) => mancTanq.tnq)
  mancTanqs: MancTanq[];
}