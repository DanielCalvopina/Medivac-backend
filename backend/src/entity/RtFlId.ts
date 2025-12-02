import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Rutas } from "./Rutas";
import { Viaje } from "./Viaje";

@Index("relationship_28_fk", ["etnsId2"], {})
@Index("rt_fl_id_pk", ["rtsVijId"], { unique: true })
@Index("pk_rt_fl_id", ["rtsVijId"], { unique: true })
@Index("relationship_27_fk", ["viajeId"], {})
@Entity("rt_fl_id", { schema: "public" })
export class RtFlId {
  @Column("integer", { primary: true, name: "rts_vij_id" })
  rtsVijId: number;

  @Column("integer", { name: "viaje_id" })
  viajeId: number;

  @Column("integer", { name: "etns_id2" })
  etnsId2: number;

  @ManyToOne(() => Rutas, (rutas) => rutas.rtFlS, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "etns_id2", referencedColumnName: "etnsId2" }])
  etnsId: Rutas;

  @ManyToOne(() => Viaje, (viaje) => viaje.rtFlS, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "viaje_id", referencedColumnName: "viajeId" }])
  viaje: Viaje;
}
