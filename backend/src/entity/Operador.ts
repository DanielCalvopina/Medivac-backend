import { 
  Column, 
  Entity, 
  Index, 
  OneToMany, 
  CreateDateColumn, 
  UpdateDateColumn, 
  DeleteDateColumn 
} from "typeorm";
import { DocOp } from "./DocOp";
import { Grupo } from "./Grupo";
import { MancOp } from "./MancOp";

@Index("pk_operador", ["opCed"], { unique: true })
@Entity("operador", { schema: "public" })
export class Operador {
  @Column("character varying", { primary: true, name: "op_ced", length: 30 })
  opCed: string; // [cite: 143]

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
  opFcVencLicencia: Date | string; 

  @Column("date", { name: "op_fc_venc_dc3" })
  opFcVencDc3: Date | string;

  @Column("date", { name: "op_fc_ven_cert_med" })
  opFcVenCertMed: Date | string;

  @Column("boolean", { name: "status", default: true })
  status: boolean; // [cite: 145]

  @Column("date", { name: "op_time_to_exp", nullable: true })
  opTimeToExp: Date | string | null;

  // --- AUDITORÍA AUTOMÁTICA ---
  @CreateDateColumn({ name: "created_at", type: 'date' })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", type: 'date', nullable: true })
  updatedAt: Date | null;

  @DeleteDateColumn({ name: "deleted_at", type: 'date', nullable: true })
  deletedAt: Date | null;

  // --- RELACIONES CORREGIDAS ---
  
  // 1. Relación con DocOp (Tabla DOC_OP tiene FK OP_CED) [cite: 235]
  // Se asume que en DocOp.ts la propiedad @ManyToOne se llama 'opCed'
  @OneToMany(() => DocOp, (docOp) => docOp.opCed) 
  docOps: DocOp[];

  // 2. Relación con Grupo (Tabla GRUPO tiene FK OP_CED) [cite: 245]
  // Se asume que en Grupo.ts la propiedad @ManyToOne se llama 'opCed'
  @OneToMany(() => Grupo, (grupo) => grupo.opCed)
  grupos: Grupo[];

  // 3. Relación con MancOp (Tabla MANC_OP tiene FK OP_CED) [cite: 248]
  // El error específico indicaba que opCed2 no existe, cambiamos a opCed
  @OneToMany(() => MancOp, (mancOp) => mancOp.opCed)
  mancOps: MancOp[];
}