import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bitacora } from "./Bitacora";
import { DocViaje } from "./DocViaje";
import { Folio } from "./Folio";
import { RtFlId } from "./RtFlId";
import { TerminalViaje } from "./TerminalViaje";
import { Cliente } from "./Cliente";
import { Mancuerna } from "./Mancuerna";

@Index("relationship_6_fk", ["cliId"], {})
@Index("relationship_5_fk", ["mncId"], {})
@Index("pk_viaje", ["viajeId"], { unique: true })
@Index("folio_pk", ["viajeId"], { unique: true })
@Entity("viaje", { schema: "public" })
export class Viaje {
  @PrimaryGeneratedColumn({ type: "integer", name: "viaje_id" })
  viajeId: number;

  @Column("integer", { name: "mnc_id" })
  mncId: number;

  @Column("integer", { name: "cli_id" })
  cliId: number;

  @Column("character varying", { name: "viaje_cod", length: 30 })
  viajeCod: string;

  @Column("integer", { name: "status" })
  status: number;

  @Column("date", { name: "created_at" })
  createdAt: string;

  @Column("date", { name: "updated_at", nullable: true })
  updatedAt: string | null;

  @Column("date", { name: "deleted_at", nullable: true })
  deletedAt: string | null;

  @Column("date", { name: "viaje_inicio", nullable: true })
  viajeInicio: string | null;

  @Column("date", { name: "viaje_fin", nullable: true })
  viajeFin: string | null;

  @Column("double precision", {
    name: "viaje_duracion",
    nullable: true,
    precision: 53,
  })
  viajeDuracion: number | null;

  @Column("date", { name: "viaje_eta", nullable: true })
  viajeEta: string | null;

  @Column("double precision", {
    name: "viaje_km",
    nullable: true,
    precision: 53,
  })
  viajeKm: number | null;

  @OneToMany(() => Bitacora, (bitacora) => bitacora.viaje)
  bitacoras: Bitacora[];

  @OneToMany(() => DocViaje, (docViaje) => docViaje.viaje)
  docViajes: DocViaje[];

  @OneToMany(() => Folio, (folio) => folio.viaje)
  folios: Folio[];

  @OneToMany(() => RtFlId, (rtFlId) => rtFlId.viaje)
  rtFlS: RtFlId[];

  @OneToMany(() => TerminalViaje, (terminalViaje) => terminalViaje.viaje)
  terminalViajes: TerminalViaje[];

  @ManyToOne(() => Cliente, (cliente) => cliente.viajes, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "cli_id", referencedColumnName: "cliId" }])
  cli: Cliente;

  @ManyToOne(() => Mancuerna, (mancuerna) => mancuerna.viajes, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "mnc_id", referencedColumnName: "mncId" }])
  mnc: Mancuerna;
}
