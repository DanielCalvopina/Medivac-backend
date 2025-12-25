import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Mancuerna } from "./Mancuerna";
import { Tanque } from "./Tanque";

@Entity("manc_tanq", { schema: "public" })
export class MancTanq {
  @PrimaryGeneratedColumn({ type: "integer", name: "mnc_tanq_id" })
  mncTanqId: number;

  @Column("integer", { name: "mnc_id", nullable: true })
  mncId: number | null;

  @Column("integer", { name: "tnq_id", nullable: true })
  tnqId: number | null;

  @ManyToOne(() => Mancuerna, (mancuerna) => mancuerna.mancTanqs, {
    onDelete: "CASCADE", // Si borran la mancuerna, se borra el vínculo
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "mnc_id", referencedColumnName: "mncId" }])
  mnc: Mancuerna;

  @ManyToOne(() => Tanque, (tanque) => tanque.mancTanqs, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "tnq_id", referencedColumnName: "tnqId" }])
  tnq: Tanque;
}