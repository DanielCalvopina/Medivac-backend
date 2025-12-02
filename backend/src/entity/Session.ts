import { Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("session_pk", ["ticketId2"], { unique: true })
@Index("pk_session", ["ticketId2"], { unique: true })
@Entity("session", { schema: "public" })
export class Session {
  @PrimaryGeneratedColumn({ type: "integer", name: "ticket_id2" })
  ticketId2: number;
}
