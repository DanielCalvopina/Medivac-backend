import { Column, Entity, Index } from "typeorm";

@Index("pk_admin", ["adminCed"], { unique: true })
@Index("admin_pk", ["adminCed"], { unique: true })
@Entity("admin", { schema: "public" })
export class Admin {
  @Column("character varying", { primary: true, name: "admin_ced", length: 30 })
  adminCed: string;

  @Column("character varying", { name: "admin_nombre", length: 60 })
  adminNombre: string;

  @Column("character varying", { name: "admin_apellido", length: 60 })
  adminApellido: string;

  @Column("character varying", { name: "admin_correo", length: 60 })
  adminCorreo: string;

  @Column("character varying", { name: "admin_password", length: 255 })
  adminPassword: string;

  @Column("boolean", { name: "admin_verificate", nullable: true })
  adminVerificate: boolean | null;

  @Column("character varying", {
    name: "admin_code_auth",
    nullable: true,
    length: 60,
  })
  adminCodeAuth: string | null;

  @Column("date", { name: "admin_time_to_exp", nullable: true })
  adminTimeToExp: string | null;

  @Column("date", { name: "created_at" })
  createdAt: string;

  @Column("date", { name: "updated_at", nullable: true })
  updatedAt: string | null;

  @Column("date", { name: "deleted_at", nullable: true })
  deletedAt: string | null;
}
