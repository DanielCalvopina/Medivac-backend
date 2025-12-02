import { Column, Entity, Index, OneToMany } from "typeorm";
import { DocDolly } from "./DocDolly";
import { Mancuerna } from "./Mancuerna";

@Index("pk_dolly", ["dollyId"], { unique: true })
@Index("dolly_pk", ["dollyId"], { unique: true })
@Entity("dolly", { schema: "public" })
export class Dolly {
  @Column("character varying", { primary: true, name: "dolly_id", length: 30 })
  dollyId: string;

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

  // 👉 NUEVOS CAMPOS AÑADIDOS
  @Column("character varying", { name: "dolly_poliza_seguro", length: 60, nullable: true })
  dollyPolizaSeguro: string | null;

  @Column("timestamp", { name: "dolly_exp_poliza", nullable: true })
  dollyExpPoliza: Date | null;

  @Column("integer", { name: "status" })
  status: number;

  @Column("date", { name: "created_at" })
  createdAt: string;

  @Column("date", { name: "updated_at", nullable: true })
  updatedAt: string | null;

  @Column("date", { name: "deleted_at", nullable: true })
  deletedAt: string | null;

  @OneToMany(() => DocDolly, (docDolly) => docDolly.dolly)
  docDollies: DocDolly[];

  @OneToMany(() => Mancuerna, (mancuerna) => mancuerna.dolly)
  mancuernas: Mancuerna[];
}
