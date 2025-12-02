  import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { Carga } from "./Carga";
  import { Descarga } from "./Descarga";
  import { DocFolio } from "./DocFolio";
  import { EstacionesFolio } from "./EstacionesFolio";
  import { Producto } from "./Producto";
  import { Viaje } from "./Viaje";

  @Index("pk_folio", ["folId"], { unique: true })
  @Index("detalle_folio_pk", ["folId"], { unique: true })
  @Index("relationship_7_fk", ["prdId"], {})
  @Index("relationship_8_fk", ["viajeId"], {})
  @Entity("folio", { schema: "public" })
  export class Folio {
    @PrimaryGeneratedColumn({ type: "integer", name: "fol_id" })
    folId: number;

    @Column("integer", { name: "prd_id" })
    prdId: number;

    @Column("integer", { name: "viaje_id" })
    viajeId: number;

    @Column("character varying", { name: "fol_cod", length: 255 })
    folCod: string;

    @Column("character varying", { name: "fol_name", length: 255 })
    folName: string;

    @Column("character varying", { name: "fol_desc", length: 255 })
    folDesc: string;

    @Column("character varying", { name: "fol_ov", length: 255 })
    folOv: string;

    @Column("boolean", { name: "status" })
    status: boolean;

    @Column("date", { name: "created_at", nullable: true })
    createdAt: string | null;

    @Column("date", { name: "updated_at", nullable: true })
    updatedAt: string | null;

    @Column("date", { name: "deleted_at", nullable: true })
    deletedAt: string | null;

    @Column("character varying", { name: "tnq_numse", length: 255 })
    tnqNumse: string;

    @OneToMany(() => Carga, (carga) => carga.fol)
    cargas: Carga[];

    @OneToMany(() => Descarga, (descarga) => descarga.fol)
    descargas: Descarga[];

    @OneToMany(() => DocFolio, (docFolio) => docFolio.fol)
    docFolios: DocFolio[];

    @OneToMany(() => EstacionesFolio, (estacionesFolio) => estacionesFolio.fol)
    estacionesFolios: EstacionesFolio[];

    @ManyToOne(() => Producto, (producto) => producto.folios, {
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    })
    @JoinColumn([{ name: "prd_id", referencedColumnName: "prdId" }])
    prd: Producto;

    @ManyToOne(() => Viaje, (viaje) => viaje.folios, {
      onDelete: "RESTRICT",
      onUpdate: "RESTRICT",
    })
    @JoinColumn([{ name: "viaje_id", referencedColumnName: "viajeId" }])
    viaje: Viaje;
  }
