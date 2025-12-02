import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RtFlId } from "./RtFlId";

@Index("rutas_pk", ["etnsId2"], { unique: true })
@Index("pk_rutas", ["etnsId2"], { unique: true })
@Entity("rutas", { schema: "public" })
export class Rutas {
  @PrimaryGeneratedColumn({ type: "integer", name: "etns_id2" })
  etnsId2: number;

  @Column("character varying", { name: "rts_nombre", length: 60 })
  rtsNombre: string;

  @Column("character varying", { name: "rts_desc", length: 60 })
  rtsDesc: string;

  @Column("character varying", { name: "rts_origen", length: 260 })
  rtsOrigen: string;

  @Column("character varying", { name: "rts_destino", length: 260 })
  rtsDestino: string;

  @Column("boolean", { name: "status" })
  status: boolean;

  @Column("date", { name: "created_at" })
  createdAt: string;

  @Column("date", { name: "updated_at", nullable: true })
  updatedAt: string | null;

  @Column("date", { name: "deleted_at", nullable: true })
  deletedAt: string | null;

  @OneToMany(() => RtFlId, (rtFlId) => rtFlId.etnsId)
  rtFlS: RtFlId[];
}
