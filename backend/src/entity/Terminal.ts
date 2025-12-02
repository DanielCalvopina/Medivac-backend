import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TerminalViaje } from "./TerminalViaje";
import { TmnCli } from "./TmnCli";

@Index("terminal_pk", ["trmId"], { unique: true })
@Index("pk_terminal", ["trmId"], { unique: true })
@Entity("terminal", { schema: "public" })
export class Terminal {
  @PrimaryGeneratedColumn({ type: "integer", name: "trm_id" })
  trmId: number;

  @Column("character varying", { name: "trm_nombre", length: 60 })
  trmNombre: string;

  @Column("character varying", { name: "trm_nombre_corto", length: 60 })
  trmNombreCorto: string;

  @Column("character varying", { name: "trm_direccion", length: 60 })
  trmDireccion: string;

  @Column("character varying", { name: "trm_ubicacion", length: 300 })
  trmUbicacion: string;

  @Column("character varying", { name: "trm_tipo", length: 60 })
  trmTipo: string;

  @Column("character varying", { name: "trm_ciudad", length: 60 })
  trmCiudad: string;

  @Column("boolean", { name: "status", nullable: true })
  status: boolean | null;

  @Column("date", { name: "created_at", nullable: true })
  createdAt: string | null;

  @Column("date", { name: "updated_at", nullable: true })
  updatedAt: string | null;

  @Column("date", { name: "deleted_at", nullable: true })
  deletedAt: string | null;

  @OneToMany(() => TerminalViaje, (terminalViaje) => terminalViaje.trm)
  terminalViajes: TerminalViaje[];

  @OneToMany(() => TmnCli, (tmnCli) => tmnCli.trm)
  tmnClis: TmnCli[];
}
