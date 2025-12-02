import { Column, Entity, Index, OneToMany } from "typeorm";
import { DocTracto } from "./DocTracto";
import { Mancuerna } from "./Mancuerna";

@Index("tracto_pk", ["trPlc"], { unique: true })
@Index("pk_tracto", ["trPlc"], { unique: true })
@Entity("tracto", { schema: "public" })
export class Tracto {
  @Column("character varying", { primary: true, name: "tr_plc", length: 60 })
  trPlc: string;

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

  @Column("character varying", { name: "tr_poliza_seguro", length: 60, nullable: true })
  trPolizaSeguro: string | null;

  @Column("timestamp", { name: "tr_exp_poliza", nullable: true })
  trExpPoliza: Date | null;

  @Column("integer", { name: "status" })
  status: number;

  @Column("date", { name: "created_at" })
  createdAt: string;

  @Column("date", { name: "updated_at", nullable: true })
  updatedAt: string | null;

  @Column("date", { name: "deleted_at", nullable: true })
  deletedAt: string | null;

  @OneToMany(() => DocTracto, (docTracto) => docTracto.trPlc2)
  docTractos: DocTracto[];

  @OneToMany(() => Mancuerna, (mancuerna) => mancuerna.trPlc2)
  mancuernas: Mancuerna[];
}
