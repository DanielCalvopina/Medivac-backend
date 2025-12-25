import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Terminal } from "./Terminal";
import { Viaje } from "./Viaje";

@Entity("terminal_viaje", { schema: "public" })
export class TerminalViaje {
  @PrimaryGeneratedColumn({ type: "integer", name: "etns_id6" })
  etnsId6: number;

  @Column("integer", { name: "viaje_id" })
  viajeId: number;

  @Column("integer", { name: "trm_id" })
  trmId: number;

  @ManyToOne(() => Terminal, (terminal) => terminal.terminalViajes)
  @JoinColumn([{ name: "trm_id", referencedColumnName: "trmId" }])
  trm: Terminal;

  @ManyToOne(() => Viaje, (viaje) => viaje.terminalViajes)
  @JoinColumn([{ name: "viaje_id", referencedColumnName: "viajeId" }])
  viaje: Viaje;
}