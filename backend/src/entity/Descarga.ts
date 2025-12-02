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
import { DocDescarga } from "./DocDescarga";

@Index("pk_descarga", ["descargaId"], { unique: true })
@Index("descarga_pk", ["descargaId"], { unique: true })
@Index("relationship_33_fk", ["folId"], {})
@Entity("descarga", { schema: "public" })
export class Descarga {
  @PrimaryGeneratedColumn({ type: "integer", name: "descarga_id" })
  descargaId: number;

  @Column("integer", { name: "fol_id", nullable: true })
  folId: number | null;

  @ManyToOne(() => Folio, (folio) => folio.descargas, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "fol_id", referencedColumnName: "folId" }])
  fol: Folio;

  @OneToMany(() => DocDescarga, (docDescarga) => docDescarga.descarga)
  docDescargas: DocDescarga[];
}
