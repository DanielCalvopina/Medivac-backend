import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Terminal } from "./Terminal";
import { Viaje } from "./Viaje";

@Index("pk_terminal_viaje", ["etnsId6"], { unique: true })
@Index("terminal_viaje_pk", ["etnsId6"], { unique: true })
@Index("relationship_35_fk", ["trmId"], {})
@Index("relationship_32_fk", ["viajeId"], {})
@Entity("terminal_viaje", { schema: "public" })
export class TerminalViaje {
  @PrimaryGeneratedColumn({ type: "integer", name: "etns_id6" })
  etnsId6: number;

  @Column("integer", { name: "viaje_id", nullable: true })
  viajeId: number | null;

  @Column("integer", { name: "trm_id", nullable: true })
  trmId: number | null;

  @ManyToOne(() => Terminal, (terminal) => terminal.terminalViajes, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "trm_id", referencedColumnName: "trmId" }])
  trm: Terminal;

  @ManyToOne(() => Viaje, (viaje) => viaje.terminalViajes, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "viaje_id", referencedColumnName: "viajeId" }])
  viaje: Viaje;
}
