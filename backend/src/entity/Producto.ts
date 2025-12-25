import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { Folio } from "./Folio";

@Entity("producto", { schema: "public" })
export class Producto {
  @PrimaryGeneratedColumn({ type: "integer", name: "prd_id" })
  prdId: number;

  @Column("character varying", { name: "prd_nombre", length: 60 })
  prdNombre: string;

  @Column("character varying", { name: "prd_desc", length: 255 })
  prdDesc: string;

  // Usamos 'double precision' para números decimales exactos en PG
  @Column("double precision", { name: "prd_max", precision: 53 })
  prdMax: number;

  @Column("double precision", { name: "prd_min", precision: 53 })
  prdMin: number;

  @Column("boolean", { name: "status", default: true })
  status: boolean;

  // --- AUTOMATIZACIÓN DE FECHAS ---
  @CreateDateColumn({ name: "created_at", type: 'date' })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", type: 'date', nullable: true })
  updatedAt: Date | null;

  @DeleteDateColumn({ name: "deleted_at", type: 'date', nullable: true })
  deletedAt: Date | null;

  @OneToMany(() => Folio, (folio) => folio.prd)
  folios: Folio[];
}