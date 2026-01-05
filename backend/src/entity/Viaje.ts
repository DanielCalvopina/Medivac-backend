import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { Bitacora } from "./Bitacora";
import { DocViaje } from "./DocViaje";
import { Folio } from "./Folio";
import { RtFlId } from "./RtFlId";
import { TerminalViaje } from "./TerminalViaje";
import { Cliente } from "./Cliente";
import { Mancuerna } from "./Mancuerna";

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

  // 1=Pendiente, 2=En Curso, 3=Finalizado, 0=Cancelado
  @Column("integer", { name: "status", default: 1 })
  status: number;

  @Column("timestamp", { name: "viaje_inicio", nullable: true })
  viajeInicio: Date | null;

  @Column("timestamp", { name: "viaje_fin", nullable: true })
  viajeFin: Date | null;

  // Duración en horas (o minutos, según prefieras)
  @Column("double precision", { name: "viaje_duracion", nullable: true, precision: 53 })
  viajeDuracion: number | null;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @DeleteDateColumn({ name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  // --- RELACIONES ---
  @OneToMany(() => Bitacora, (bitacora) => bitacora.viaje)
  bitacoras: Bitacora[];

  @OneToMany(() => DocViaje, (docViaje) => docViaje.viaje)
  docViajes: DocViaje[];

  @OneToMany(() => Folio, (folio) => folio.viaje)
  folios: Folio[];

  // Relación con Rutas (Intermedia)
  @OneToMany(() => RtFlId, (rtFlId) => rtFlId.viaje)
  rtFlS: RtFlId[];

  // Relación con Terminales (Intermedia)
  @OneToMany(() => TerminalViaje, (terminalViaje) => terminalViaje.viaje)
  terminalViajes: TerminalViaje[];

  @ManyToOne(() => Cliente, (cliente) => cliente.viajes)
  @JoinColumn([{ name: "cli_id", referencedColumnName: "cliId" }])
  cli: Cliente;

  @ManyToOne(() => Mancuerna, (mancuerna) => mancuerna.viajes)
  @JoinColumn([{ name: "mnc_id", referencedColumnName: "mncId" }])
  mnc: Mancuerna;
}