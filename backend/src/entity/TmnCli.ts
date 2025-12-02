import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cliente } from "./Cliente";
import { Terminal } from "./Terminal";

@Index("relationship_39_fk", ["cliId"], {})
@Index("tmn_cli_pk", ["trmCliId"], { unique: true })
@Index("pk_tmn_cli", ["trmCliId"], { unique: true })
@Index("relationship_38_fk", ["trmId"], {})
@Entity("tmn_cli", { schema: "public" })
export class TmnCli {
  @PrimaryGeneratedColumn({ type: "integer", name: "trm_cli_id" })
  trmCliId: number;

  @Column("integer", { name: "trm_id", nullable: true })
  trmId: number | null;

  @Column("integer", { name: "cli_id", nullable: true })
  cliId: number | null;

  @ManyToOne(() => Cliente, (cliente) => cliente.tmnClis, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "cli_id", referencedColumnName: "cliId" }])
  cli: Cliente;

  @ManyToOne(() => Terminal, (terminal) => terminal.tmnClis, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "trm_id", referencedColumnName: "trmId" }])
  trm: Terminal;
}
