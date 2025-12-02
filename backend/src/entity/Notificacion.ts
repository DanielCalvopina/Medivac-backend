import { Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("notificacion_pk", ["ntId"], { unique: true })
@Index("pk_notificacion", ["ntId"], { unique: true })
@Entity("notificacion", { schema: "public" })
export class Notificacion {
  @PrimaryGeneratedColumn({ type: "integer", name: "nt_id" })
  ntId: number;
}
