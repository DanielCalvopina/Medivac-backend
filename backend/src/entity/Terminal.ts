import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { TerminalViaje } from "./TerminalViaje";
import { TmnCli } from "./TmnCli";

@Entity("terminal", { schema: "public" })
export class Terminal {
  @PrimaryGeneratedColumn({ type: "integer", name: "trm_id" })
  trmId: number;

  @Column("character varying", { name: "trm_nombre", length: 255 })
  trmNombre: string;

  @Column("character varying", { name: "trm_nombre_corto", length: 255 })
  trmNombreCorto: string;

  @Column("character varying", { name: "trm_direccion", length: 255 })
  trmDireccion: string;

  @Column("character varying", { name: "trm_ubicacion", length: 1050 })
  trmUbicacion: string;

  @Column("character varying", { name: "trm_tipo", length: 255 })
  trmTipo: string;

  @Column("character varying", { name: "trm_ciudad", length: 255 })
  trmCiudad: string;

  @Column("boolean", { name: "status", default: true })
  status: boolean;

  // --- FECHAS AUTOMÁTICAS ---
  @CreateDateColumn({ name: "created_at", type: 'date' })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", type: 'date', nullable: true })
  updatedAt: Date | null;

  @DeleteDateColumn({ name: "deleted_at", type: 'date', nullable: true })
  deletedAt: Date | null;

  // --- RELACIONES MANTENIDAS ---
  @OneToMany(() => TerminalViaje, (terminalViaje) => terminalViaje.trm)
  terminalViajes: TerminalViaje[];

  @OneToMany(() => TmnCli, (tmnCli) => tmnCli.trm)
  tmnClis: TmnCli[];
}