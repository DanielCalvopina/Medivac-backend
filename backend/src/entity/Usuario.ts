import { Column, Entity, Index, OneToMany } from "typeorm";
import { PerfilesDeUsuario } from "./PerfilesDeUsuario";

@Index("usuario_pk", ["usrRuc"], { unique: true })
@Index("pk_usuario", ["usrRuc"], { unique: true })
@Entity("usuario", { schema: "public" })
export class Usuario {
  @Column("character varying", { primary: true, name: "usr_ruc", length: 30 })
  usrRuc: string;

  @Column("character varying", { name: "usr_nombre", length: 60 })
  usrNombre: string;

  @Column("character varying", { name: "usr_apellido", length: 60 })
  usrApellido: string;

  @Column("boolean", { name: "usr_is_verf", nullable: true })
  usrIsVerf: boolean | null;

  @Column("character varying", {
    name: "usr_code_verf",
    nullable: true,
    length: 60,
  })
  usrCodeVerf: string | null;

  @Column("character varying", { name: "usr_password", length: 60 })
  usrPassword: string;

  @Column("boolean", { name: "usr_status" })
  usrStatus: boolean;

  @Column("date", { name: "created_at" })
  createdAt: string;

  @Column("date", { name: "updated_at" })
  updatedAt: string;

  @Column("date", { name: "deleted_at", nullable: true })
  deletedAt: string | null;

  @Column("character varying", {
    name: "usr_telefono",
    nullable: true,
    length: 15,
  })
  usrTelefono: string | null;

  @Column("character varying", {
    name: "usr_correo",
    nullable: true,
    length: 60,
  })
  usrCorreo: string | null;

  @OneToMany(
    () => PerfilesDeUsuario,
    (perfilesDeUsuario) => perfilesDeUsuario.usrRuc2
  )
  perfilesDeUsuarios: PerfilesDeUsuario[];
}
