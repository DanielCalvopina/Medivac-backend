import {
  Column,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from "typeorm";
import { DocTracto } from "./DocTracto";
import { Mancuerna } from "./Mancuerna";

@Entity("tracto", { schema: "public" })
export class Tracto {
  // ==========================
  //      IDENTIFICADORES
  // ==========================
  @PrimaryColumn("character varying", { name: "tr_plc", length: 60 })
  trPlc: string;

  // ==========================
  //      DATOS TÉCNICOS
  // ==========================
  @Column("character varying", { name: "tr_eco", length: 60 })
  trEco: string;

  @Column("character varying", { name: "tr_eco_val", length: 60 })
  trEcoVal: string;

  @Column("character varying", { name: "tr_mn_sr", length: 60 })
  trMnSr: string;

  @Column("character varying", { name: "tr_mrc", length: 60 })
  trMrc: string;

  @Column("character varying", { name: "tr_md", length: 60 })
  trMd: string;

  @Column("character varying", { name: "tr_color", length: 60 })
  trColor: string;

  @Column("character varying", { name: "tr_nm_motor", length: 60 })
  trNmMotor: string;

  @Column("character varying", { name: "tr_nm_trj_crc", length: 60 })
  trNmTrjCrc: string;

  @Column("character varying", { name: "tr_nm_dbl_art", length: 60 })
  trNmDblArt: string;

  @Column("character varying", { name: "tr_clc_dbl_art", length: 60 })
  trClcDblArt: string;

  @Column("character varying", { name: "tr_of_cer", length: 60 })
  trOfCer: string;

  @Column("character varying", { name: "tr_permiso_sct", length: 60 })
  trPermisoSct: string;

  @Column("character varying", { name: "tr_peso", length: 60 })
  trPeso: string;

  @Column("character varying", { name: "tr_desc", length: 60 })
  trDesc: string;

  @Column("character varying", { name: "tr_poliza_seguro", length: 60 })
  trPolizaSeguro: string;

  @Column("date", { name: "tr_exp_poliza_seguro" })
  trExpPolizaSeguro: string;

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
  // CORRECCIÓN 1: Apuntar a la propiedad correcta en DocTracto (seguramente es trPlc)
  @OneToMany(() => DocTracto, (docTracto) => docTracto.trPlc)
  docTractos: DocTracto[];

  // CORRECCIÓN 2: El error decía explícitamente "Did you mean 'trPlc'?"
  @OneToMany(() => Mancuerna, (mancuerna) => mancuerna.trPlc)
  mancuernas: Mancuerna[];
}