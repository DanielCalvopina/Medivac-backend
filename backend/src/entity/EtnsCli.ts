import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cliente } from "./Cliente";
import { Estaciones } from "./Estaciones";

@Index("relationship_40_fk", ["cliId"], {})
@Index("etns_cli_pk", ["etnsCliId"], { unique: true })
@Index("pk_etns_cli", ["etnsCliId"], { unique: true })
@Index("relationship_41_fk", ["etnsId"], {})
@Entity("etns_cli", { schema: "public" })
export class EtnsCli {
  @PrimaryGeneratedColumn({ type: "integer", name: "etns_cli_id" })
  etnsCliId: number;

  @Column("integer", { name: "cli_id", nullable: true })
  cliId: number | null;

  @Column("integer", { name: "etns_id", nullable: true })
  etnsId: number | null;

  @ManyToOne(() => Cliente, (cliente) => cliente.etnsClis, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "cli_id", referencedColumnName: "cliId" }])
  cli: Cliente;

  @ManyToOne(() => Estaciones, (estaciones) => estaciones.etnsClis, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "etns_id", referencedColumnName: "etnsId" }])
  etns: Estaciones;
}
