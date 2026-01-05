import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Usuario } from "./Usuario";
import { Perfiles } from "./Perfiles";

@Index("relationship_49_fk", ["prfId"], {})
@Index("perfiles_de_usuario_pk", ["prfUsrId"], { unique: true })
@Index("pk_perfiles_de_usuario", ["prfUsrId"], { unique: true })
@Index("relationship_48_fk", ["usrRuc"], {})
@Entity("perfiles_de_usuario", { schema: "public" })
export class PerfilesDeUsuario {
  @Column("integer", { name: "prf_id" })
  prfId: number;

  @Column("character varying", { name: "usr_ruc", length: 30 })
  usrRuc: string;

  @PrimaryGeneratedColumn({ type: "integer", name: "prf_usr_id" })
  prfUsrId: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.perfilesDeUsuarios, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "usr_ruc", referencedColumnName: "usrRuc" }])
  usrRuc2: Usuario;

  @ManyToOne(() => Perfiles, (perfiles) => perfiles.perfilesDeUsuarios, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "prf_id", referencedColumnName: "prfId" }])
  prf: Perfiles;
}
