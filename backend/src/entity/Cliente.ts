import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { EtnsCli } from "./EtnsCli";
import { TmnCli } from "./TmnCli";
import { Viaje } from "./Viaje";

@Entity("cliente", { schema: "public" })
export class Cliente {
  @PrimaryGeneratedColumn({ type: "integer", name: "cli_id" })
  cliId: number;

  @Column("character varying", { name: "cli_nombre", length: 60 })
  cliNombre: string;

  @Column("character varying", { name: "cli_desc", length: 255 })
  cliDesc: string;

  @Column("character varying", { name: "cli_correo", length: 255 })
  cliCorreo: string;

  @Column("character varying", { name: "cli_num", length: 30 })
  cliNum: string;

  @Column("character varying", { name: "cli_ruc", length: 30 })
  cliRuc: string;

  @Column("boolean", { name: "status", default: true })
  status: boolean;

  @CreateDateColumn({ name: "created_at", type: 'date' })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", type: 'date', nullable: true })
  updatedAt: Date | null;

  @DeleteDateColumn({ name: "deleted_at", type: 'date', nullable: true })
  deletedAt: Date | null;

  // Relaciones listas
  @OneToMany(() => EtnsCli, (etnsCli) => etnsCli.cli)
  etnsClis: EtnsCli[];

  @OneToMany(() => TmnCli, (tmnCli) => tmnCli.cli)
  tmnClis: TmnCli[];

  @OneToMany(() => Viaje, (viaje) => viaje.cli)
  viajes: Viaje[];
}