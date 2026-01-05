import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { RtFlId } from "./RtFlId";

@Entity("rutas", { schema: "public" })
export class Rutas {
  @PrimaryGeneratedColumn({ type: "integer", name: "etns_id2" })
  etnsId2: number;

  @Column("character varying", { name: "rts_nombre", length: 255 })
  rtsNombre: string;

  @Column("character varying", { name: "rts_desc", length: 255 })
  rtsDesc: string;

  @Column("boolean", { name: "status", default: true })
  status: boolean;

  @Column("character varying", { name: "rts_maps", nullable: true, length: 1050 })
  rtsMaps: string | null;

  @Column("character varying", { name: "rts_origen", nullable: true, length: 255 })
  rtsOrigen: string | null;

  @Column("character varying", { name: "rts_destino", nullable: true, length: 255 })
  rtsDestino: string | null;

  // --- AUTOMATIZACIÓN ---
  @CreateDateColumn({ name: "created_at", type: 'date' })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", type: 'date', nullable: true })
  updatedAt: Date | null;

  @DeleteDateColumn({ name: "deleted_at", type: 'date', nullable: true })
  deletedAt: Date | null;

  // --- RELACIONES CORREGIDAS ---
  // El error decía que 'etnsId' no existe. Debes apuntar a la propiedad 'ruta'
  // que definiste en RtFlId.ts
  @OneToMany(() => RtFlId, (rtFlId) => rtFlId.ruta)
  rtFlS: RtFlId[];
}