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
import { Mancuerna } from "./Mancuerna";
import { Operador } from "./Operador";

@Entity("manc_op", { schema: "public" })
export class MancOp {
  @PrimaryGeneratedColumn({ type: "integer", name: "manc_op_id" })
  mancOpId: number;

  @Column("integer", { name: "mnc_id" })
  mncId: number;

  @Column("character varying", { name: "op_ced", length: 30 })
  opCed: string;

  // Status del registro histórico (opcional, pero útil si quieres marcar 'activo' vs 'histórico')
  @Column("boolean", { name: "status", default: true })
  status: boolean;

  @CreateDateColumn({ name: "created_at", type: 'date' })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", type: 'date', nullable: true })
  updatedAt: Date | null;

  @DeleteDateColumn({ name: "deleted_at", type: 'date', nullable: true })
  deletedAt: Date | null;

  @ManyToOne(() => Mancuerna, (mancuerna) => mancuerna.mancOps)
  @JoinColumn([{ name: "mnc_id", referencedColumnName: "mncId" }])
  mnc: Mancuerna;

  @ManyToOne(() => Operador, (operador) => operador.mancOps)
  @JoinColumn([{ name: "op_ced", referencedColumnName: "opCed" }])
  operador: Operador;
}