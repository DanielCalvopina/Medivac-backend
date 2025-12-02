import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Estaciones } from "./Estaciones";
import { Folio } from "./Folio";

@Index("relationship_36_fk", ["etnsId"], {})
@Index("pk_estaciones_folio", ["etnsId6"], { unique: true })
@Index("estaciones_folio_pk", ["etnsId6"], { unique: true })
@Index("relationship_29_fk", ["folId"], {})
@Entity("estaciones_folio", { schema: "public" })
export class EstacionesFolio {
  @PrimaryGeneratedColumn({ type: "integer", name: "etns_id6" })
  etnsId6: number;

  @Column("integer", { name: "etns_id", nullable: true })
  etnsId: number | null;

  @Column("integer", { name: "fol_id", nullable: true })
  folId: number | null;

  @ManyToOne(() => Estaciones, (estaciones) => estaciones.estacionesFolios, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "etns_id", referencedColumnName: "etnsId" }])
  etns: Estaciones;

  @ManyToOne(() => Folio, (folio) => folio.estacionesFolios, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "fol_id", referencedColumnName: "folId" }])
  fol: Folio;
}
