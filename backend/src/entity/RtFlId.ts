import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Rutas } from "./Rutas";
import { Viaje } from "./Viaje";

@Entity("rt_fl_id", { schema: "public" })
export class RtFlId {
  @PrimaryGeneratedColumn({ type: "integer", name: "rts_vij_id" })
  rtsVijId: number;

  @Column("integer", { name: "viaje_id" })
  viajeId: number;

  @Column("integer", { name: "etns_id2" })
  etnsId2: number;

  @ManyToOne(() => Rutas, (rutas) => rutas.rtFlS)
  @JoinColumn([{ name: "etns_id2", referencedColumnName: "etnsId2" }])
  ruta: Rutas; // Renombrado a 'ruta' para claridad

  @ManyToOne(() => Viaje, (viaje) => viaje.rtFlS)
  @JoinColumn([{ name: "viaje_id", referencedColumnName: "viajeId" }])
  viaje: Viaje;
}