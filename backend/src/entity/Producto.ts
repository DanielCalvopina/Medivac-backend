import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Folio } from "./Folio";

@Index("pk_producto", ["prdId"], { unique: true })
@Index("producto_pk", ["prdId"], { unique: true })
@Entity("producto", { schema: "public" })
export class Producto {
  @PrimaryGeneratedColumn({ type: "integer", name: "prd_id" })
  prdId: number;

  @Column("character varying", { name: "prd_nombre", length: 60 })
  prdNombre: string;

  @Column("character varying", { name: "prd_desc", length: 255 })
  prdDesc: string;

  @Column("double precision", { name: "prd_max", precision: 53 })
  prdMax: number;

  @Column("double precision", { name: "prd_min", precision: 53 })
  prdMin: number;

  @Column("boolean", { name: "status" })
  status: boolean;

  @Column("date", { name: "created_at" })
  createdAt: string;

  @Column("date", { name: "updated_at", nullable: true })
  updatedAt: string | null;

  @Column("date", { name: "deleted_at", nullable: true })
  deletedAt: string | null;

  @OneToMany(() => Folio, (folio) => folio.prd)
  folios: Folio[];
}
