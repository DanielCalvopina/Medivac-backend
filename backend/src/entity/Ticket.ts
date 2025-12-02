import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pk_ticket", ["ticketId"], { unique: true })
@Index("ticket_pk", ["ticketId"], { unique: true })
@Entity("ticket", { schema: "public" })
export class Ticket {
  @PrimaryGeneratedColumn({ type: "integer", name: "ticket_id" })
  ticketId: number;

  @Column("character varying", { name: "op_ced", nullable: true, length: 30 })
  opCed: string | null;

  @Column("character varying", {
    name: "ticket_desc",
    nullable: true,
    length: 255,
  })
  ticketDesc: string | null;

  @Column("character varying", { name: "status", nullable: true, length: 60 })
  status: string | null;

  @Column("date", { name: "created_at", nullable: true })
  createdAt: string | null;

  @Column("date", { name: "updated_at", nullable: true })
  updatedAt: string | null;

  @Column("date", { name: "deleted_at", nullable: true })
  deletedAt: string | null;
}
