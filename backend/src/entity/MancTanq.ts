import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Mancuerna } from "./Mancuerna";
import { Tanque } from "./Tanque";

@Index("relationship_46_fk", ["mncId"], {})
@Index("manc_tanq_pk", ["mncTanqId"], { unique: true })
@Index("pk_manc_tanq", ["mncTanqId"], { unique: true })
@Index("relationship_45_fk", ["tnqId"], {})
@Entity("manc_tanq", { schema: "public" })
export class MancTanq {
  @PrimaryGeneratedColumn({ type: "integer", name: "mnc_tanq_id" })
  mncTanqId: number;

  @Column("integer", { name: "mnc_id", nullable: true })
  mncId: number | null;

  @Column("integer", { name: "tnq_id", nullable: true })
  tnqId: number | null;

  @ManyToOne(() => Mancuerna, (mancuerna) => mancuerna.mancTanqs, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
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
