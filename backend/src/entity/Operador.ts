import { Column, Entity, Index, OneToMany } from "typeorm";
import { DocOp } from "./DocOp";
import { Grupo } from "./Grupo";
import { Mancuerna } from "./Mancuerna";

@Index("operador_pk", ["opCed"], { unique: true })
@Index("pk_operador", ["opCed"], { unique: true })
@Entity("operador", { schema: "public" })
export class Operador {
  @Column("character varying", { primary: true, name: "op_ced", length: 30 })
  opCed: string;

  @Column("character varying", { name: "op_nombre", length: 60 })
  opNombre: string;

  @Column("character varying", { name: "op_apellido", length: 60 })
  opApellido: string;

  @Column("character varying", { name: "op_telefono", length: 60 })
  opTelefono: string;

  @Column("character varying", { name: "op_correo", length: 60 })
  opCorreo: string;

  @Column("character varying", { name: "op_num_licencia", length: 60 })
  opNumLicencia: string;

  @Column("date", { name: "op_fc_venc_licencia" })
  opFcVencLicencia: string;

  @Column("date", { name: "op_fc_venc_dc3" })
  opFcVencDc3: string;

  @Column("date", { name: "op_fc_ven_cert_med" })
  opFcVenCertMed: string;

  @Column("boolean", { name: "status" })
  status: boolean;

  @Column("date", { name: "created_at" })
  createdAt: string;

  @Column("date", { name: "updated_at", nullable: true })
  updatedAt: string | null;

  @Column("date", { name: "deleted_at", nullable: true })
  deletedAt: string | null;

  @Column("character varying", {
    name: "op_password",
    nullable: true,
    length: 255,
  })
  opPassword: string | null;

  @Column("character varying", { name: "op_verificate", length: 60 })
  opVerificate: string;

  @Column("character varying", {
    name: "op_code_ath",
    nullable: true,
    length: 60,
  })
  opCodeAth: string | null;

  @Column("date", { name: "op_time_to_exp", nullable: true })
  opTimeToExp: string | null;

  @OneToMany(() => DocOp, (docOp) => docOp.opCed2)
  docOps: DocOp[];

  @OneToMany(() => Grupo, (grupo) => grupo.opCed2)
  grupos: Grupo[];

  @OneToMany(() => Mancuerna, (mancuerna) => mancuerna.opCed2)
  mancuernas: Mancuerna[];
}
