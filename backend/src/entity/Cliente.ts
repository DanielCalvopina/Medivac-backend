import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { EtnsCli } from "./EtnsCli";
import { TmnCli } from "./TmnCli";
import { Viaje } from "./Viaje";

@Index("cliente_pk", ["cliId"], { unique: true })
@Index("pk_cliente", ["cliId"], { unique: true })
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

  @Column("boolean", { name: "status" })
  status: boolean;

  @Column("date", { name: "created_at" })
  createdAt: string;

  @Column("date", { name: "updated_at", nullable: true })
  updatedAt: string | null;

  @Column("date", { name: "deleted_at", nullable: true })
  deletedAt: string | null;

  @OneToMany(() => EtnsCli, (etnsCli) => etnsCli.cli)
  etnsClis: EtnsCli[];

  @OneToMany(() => TmnCli, (tmnCli) => tmnCli.cli)
  tmnClis: TmnCli[];

  @OneToMany(() => Viaje, (viaje) => viaje.cli)
  viajes: Viaje[];
}
