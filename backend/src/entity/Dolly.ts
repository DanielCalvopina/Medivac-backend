import {
  Column,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from "typeorm";
import { DocDolly } from "./DocDolly";
import { Mancuerna } from "./Mancuerna";

@Entity("dolly", { schema: "public" })
export class Dolly {
  // ==========================
  //      IDENTIFICADORES
  // ==========================
  @PrimaryColumn("character varying", { name: "dolly_id", length: 30 })
  dollyId: string;

  // ==========================
  //      DATOS TÉCNICOS
  // ==========================
  @Column("character varying", { name: "dolly_num_ser_4_ul", length: 30 })
  dollyNumSer_4Ul: string;

  @Column("character varying", { name: "dolly_num_ser", length: 30 })
  dollyNumSer: string;

  @Column("character varying", { name: "dolly_mr", length: 30 })
  dollyMr: string;

  @Column("character varying", { name: "dolly_mod", length: 30 })
  dollyMod: string;

  @Column("character varying", { name: "dolly_color", length: 30 })
  dollyColor: string;

  @Column("character varying", { name: "dolly_desc", length: 255 })
  dollyDesc: string;

  @Column("character varying", { name: "dolly_poliza_seguro", length: 60 })
  dollyPolizaSeguro: string;

  @Column("date", { name: "dolly_exp_poliza" })
  dollyExpPoliza: string;

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
  @OneToMany(() => DocDolly, (docDolly) => docDolly.dolly)
  docDollies: DocDolly[];

  @OneToMany(() => Mancuerna, (mancuerna) => mancuerna.dolly)
  mancuernas: Mancuerna[];
}