import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Folio } from "./Folio";
import { DocCarga } from "./DocCarga";

@Index("carga_pk", ["cargaId"], { unique: true })
@Index("pk_carga", ["cargaId"], { unique: true })
@Index("relationship_34_fk", ["folId"], {})
@Entity("carga", { schema: "public" })
export class Carga {
  @PrimaryGeneratedColumn({ type: "integer", name: "carga_id" })
  cargaId: number;

  @Column("integer", { name: "fol_id", nullable: true })
  folId: number | null;

  @ManyToOne(() => Folio, (folio) => folio.cargas, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "fol_id", referencedColumnName: "folId" }])
  fol: Folio;

  @OneToMany(() => DocCarga, (docCarga) => docCarga.carga)
  docCargas: DocCarga[];
}
