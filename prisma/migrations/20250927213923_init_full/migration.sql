/*
  Warnings:

  - A unique constraint covering the columns `[googleSub]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "TravelType" AS ENUM ('CARGADO', 'VACIO');

-- CreateEnum
CREATE TYPE "OwnerType" AS ENUM ('LOAD', 'UNLOAD', 'BITACORA', 'UNIT', 'TICKET');

-- CreateEnum
CREATE TYPE "DocTipo" AS ENUM ('TarjetaCirculacion', 'Seguro', 'Verificacion', 'NOM005', 'Otro');

-- CreateEnum
CREATE TYPE "EvidenceCategoria" AS ENUM ('CARGA', 'DESCARGA', 'BITACORA', 'UNIDAD', 'TICKET');

-- CreateEnum
CREATE TYPE "TicketEstado" AS ENUM ('Pendiente', 'Parcial', 'Completo');

-- CreateEnum
CREATE TYPE "PuntoTipo" AS ENUM ('Ruta', 'Gasolinera', 'Pension', 'Comedor', 'Caseta', 'PermitStop');

-- CreateEnum
CREATE TYPE "MetodoPeso" AS ENUM ('Tirillas', 'CuentaLitros', 'Bascula', 'Otro');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "googleSub" TEXT;

-- CreateTable
CREATE TABLE "Group" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "tipo" TEXT,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserGroup" (
    "userId" TEXT NOT NULL,
    "groupId" TEXT NOT NULL,

    CONSTRAINT "UserGroup_pkey" PRIMARY KEY ("userId","groupId")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Producto" (
    "id" TEXT NOT NULL,
    "clienteId" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "constantes" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ciudad" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "estado" TEXT,
    "pais" TEXT DEFAULT 'MX',

    CONSTRAINT "Ciudad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Terminal" (
    "id" TEXT NOT NULL,
    "ciudadId" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Terminal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PLEstacion" (
    "id" TEXT NOT NULL,
    "ciudadId" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PLEstacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unidad" (
    "id" TEXT NOT NULL,
    "eco" TEXT NOT NULL,
    "placas" TEXT,
    "tipo" TEXT NOT NULL,
    "extra" JSONB,
    "grupoId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Unidad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DocUnidad" (
    "id" TEXT NOT NULL,
    "unidadId" TEXT NOT NULL,
    "tipo" "DocTipo" NOT NULL,
    "numero" TEXT,
    "emision" TIMESTAMP(3),
    "vencimiento" TIMESTAMP(3),
    "driveFileId" TEXT,
    "webViewLink" TEXT,
    "mimeType" TEXT,
    "bytes" INTEGER,
    "checksum" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DocUnidad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mancuerna" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "tractoId" TEXT NOT NULL,
    "tanque1Id" TEXT,
    "dollyId" TEXT,
    "tanque2Id" TEXT,
    "disponible" BOOLEAN NOT NULL DEFAULT true,
    "grupoId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Mancuerna_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ruta" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "origenId" TEXT,
    "destinoId" TEXT,
    "version" INTEGER NOT NULL DEFAULT 1,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ruta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RutaVersion" (
    "id" TEXT NOT NULL,
    "rutaId" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "cambios" JSONB NOT NULL,
    "nombre" TEXT NOT NULL,
    "origenId" TEXT,
    "destinoId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RutaVersion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RutaPunto" (
    "id" TEXT NOT NULL,
    "rutaId" TEXT NOT NULL,
    "orden" INTEGER NOT NULL,
    "tipo" "PuntoTipo" NOT NULL,
    "nombre" TEXT,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "tiempoMin" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RutaPunto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RutaCaseta" (
    "id" TEXT NOT NULL,
    "rutaId" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "costo" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "km" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RutaCaseta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RutaParada" (
    "id" TEXT NOT NULL,
    "rutaId" TEXT NOT NULL,
    "tipo" "PuntoTipo" NOT NULL,
    "nombre" TEXT NOT NULL,
    "lat" DOUBLE PRECISION,
    "lng" DOUBLE PRECISION,
    "tiempoMin" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RutaParada_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trip" (
    "id" TEXT NOT NULL,
    "folio" TEXT NOT NULL,
    "clienteId" TEXT,
    "productoId" TEXT,
    "operadorId" TEXT,
    "unidadId" TEXT,
    "mancuernaId" TEXT,
    "rutaId" TEXT,
    "tipo" "TravelType" NOT NULL,
    "eta" TIMESTAMP(3),
    "estado" TEXT NOT NULL DEFAULT 'Planeado',
    "origenId" TEXT,
    "destinoId" TEXT,
    "startedAt" TIMESTAMP(3),
    "finishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "kmsPlan" DOUBLE PRECISION,
    "tiempoPlanMin" INTEGER,
    "costoCasetas" DOUBLE PRECISION,

    CONSTRAINT "Trip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TripCambioDestino" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "usuarioId" TEXT,
    "deNombre" TEXT,
    "aNombre" TEXT,
    "detalle" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TripCambioDestino_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoadOp" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "lecturas" JSONB NOT NULL,
    "variacion" DOUBLE PRECISION,
    "flags" JSONB,
    "createdBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LoadOp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UnloadOp" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "lecturas" JSONB NOT NULL,
    "createdBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UnloadOp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bitacora" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "fechaHora" TIMESTAMP(3) NOT NULL,
    "anotacion" TEXT NOT NULL,
    "observaciones" TEXT,
    "kmsRecorridos" DOUBLE PRECISION,
    "casetas" DOUBLE PRECISION,
    "desvio" TEXT,
    "createdBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bitacora_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evidence" (
    "id" TEXT NOT NULL,
    "ownerType" "OwnerType" NOT NULL,
    "ownerId" TEXT NOT NULL,
    "driveFileId" TEXT NOT NULL,
    "webViewLink" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "bytes" INTEGER NOT NULL,
    "checksum" TEXT,
    "categoria" "EvidenceCategoria",
    "createdBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Evidence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TripGPS" (
    "id" TEXT NOT NULL,
    "tripId" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "ts" TIMESTAMP(3) NOT NULL,
    "fuente" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TripGPS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Param" (
    "id" TEXT NOT NULL,
    "scope" TEXT NOT NULL,
    "scopeId" TEXT,
    "key" TEXT NOT NULL,
    "value" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Param_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" TEXT NOT NULL,
    "folio" TEXT NOT NULL,
    "tipoUnidad" TEXT NOT NULL,
    "placas" TEXT,
    "descripcion" TEXT NOT NULL,
    "estado" "TicketEstado" NOT NULL DEFAULT 'Pendiente',
    "fechas" JSONB,
    "costo" DOUBLE PRECISION,
    "createdBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL,
    "actorId" TEXT,
    "evento" TEXT NOT NULL,
    "entity" TEXT,
    "entityId" TEXT,
    "diff" JSONB,
    "ip" TEXT,
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "UserGroup_groupId_idx" ON "UserGroup"("groupId");

-- CreateIndex
CREATE INDEX "UserGroup_userId_idx" ON "UserGroup"("userId");

-- CreateIndex
CREATE INDEX "Producto_clienteId_idx" ON "Producto"("clienteId");

-- CreateIndex
CREATE INDEX "Terminal_ciudadId_idx" ON "Terminal"("ciudadId");

-- CreateIndex
CREATE INDEX "PLEstacion_ciudadId_activo_idx" ON "PLEstacion"("ciudadId", "activo");

-- CreateIndex
CREATE UNIQUE INDEX "Unidad_eco_key" ON "Unidad"("eco");

-- CreateIndex
CREATE INDEX "DocUnidad_unidadId_idx" ON "DocUnidad"("unidadId");

-- CreateIndex
CREATE INDEX "DocUnidad_vencimiento_idx" ON "DocUnidad"("vencimiento");

-- CreateIndex
CREATE UNIQUE INDEX "Mancuerna_code_key" ON "Mancuerna"("code");

-- CreateIndex
CREATE INDEX "Mancuerna_tractoId_idx" ON "Mancuerna"("tractoId");

-- CreateIndex
CREATE INDEX "Mancuerna_grupoId_idx" ON "Mancuerna"("grupoId");

-- CreateIndex
CREATE INDEX "RutaVersion_rutaId_version_idx" ON "RutaVersion"("rutaId", "version");

-- CreateIndex
CREATE INDEX "RutaPunto_rutaId_orden_idx" ON "RutaPunto"("rutaId", "orden");

-- CreateIndex
CREATE INDEX "RutaPunto_tipo_idx" ON "RutaPunto"("tipo");

-- CreateIndex
CREATE INDEX "RutaCaseta_rutaId_idx" ON "RutaCaseta"("rutaId");

-- CreateIndex
CREATE INDEX "RutaParada_rutaId_idx" ON "RutaParada"("rutaId");

-- CreateIndex
CREATE INDEX "RutaParada_tipo_idx" ON "RutaParada"("tipo");

-- CreateIndex
CREATE UNIQUE INDEX "Trip_folio_key" ON "Trip"("folio");

-- CreateIndex
CREATE INDEX "Trip_clienteId_estado_idx" ON "Trip"("clienteId", "estado");

-- CreateIndex
CREATE INDEX "Trip_rutaId_idx" ON "Trip"("rutaId");

-- CreateIndex
CREATE INDEX "Trip_operadorId_idx" ON "Trip"("operadorId");

-- CreateIndex
CREATE INDEX "TripCambioDestino_tripId_idx" ON "TripCambioDestino"("tripId");

-- CreateIndex
CREATE INDEX "LoadOp_tripId_idx" ON "LoadOp"("tripId");

-- CreateIndex
CREATE INDEX "LoadOp_createdAt_idx" ON "LoadOp"("createdAt");

-- CreateIndex
CREATE INDEX "UnloadOp_tripId_idx" ON "UnloadOp"("tripId");

-- CreateIndex
CREATE INDEX "UnloadOp_createdAt_idx" ON "UnloadOp"("createdAt");

-- CreateIndex
CREATE INDEX "Bitacora_tripId_fechaHora_idx" ON "Bitacora"("tripId", "fechaHora");

-- CreateIndex
CREATE INDEX "Evidence_ownerType_idx" ON "Evidence"("ownerType");

-- CreateIndex
CREATE INDEX "Evidence_ownerId_idx" ON "Evidence"("ownerId");

-- CreateIndex
CREATE INDEX "Evidence_createdAt_idx" ON "Evidence"("createdAt");

-- CreateIndex
CREATE INDEX "TripGPS_tripId_ts_idx" ON "TripGPS"("tripId", "ts");

-- CreateIndex
CREATE INDEX "TripGPS_ts_idx" ON "TripGPS"("ts");

-- CreateIndex
CREATE INDEX "Param_scope_scopeId_key_idx" ON "Param"("scope", "scopeId", "key");

-- CreateIndex
CREATE UNIQUE INDEX "param_scope_key_unique" ON "Param"("scope", "scopeId", "key");

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_folio_key" ON "Ticket"("folio");

-- CreateIndex
CREATE INDEX "AuditLog_evento_createdAt_idx" ON "AuditLog"("evento", "createdAt");

-- CreateIndex
CREATE INDEX "AuditLog_entity_entityId_idx" ON "AuditLog"("entity", "entityId");

-- CreateIndex
CREATE UNIQUE INDEX "User_googleSub_key" ON "User"("googleSub");

-- AddForeignKey
ALTER TABLE "UserGroup" ADD CONSTRAINT "UserGroup_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGroup" ADD CONSTRAINT "UserGroup_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Producto" ADD CONSTRAINT "Producto_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Terminal" ADD CONSTRAINT "Terminal_ciudadId_fkey" FOREIGN KEY ("ciudadId") REFERENCES "Ciudad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PLEstacion" ADD CONSTRAINT "PLEstacion_ciudadId_fkey" FOREIGN KEY ("ciudadId") REFERENCES "Ciudad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocUnidad" ADD CONSTRAINT "DocUnidad_unidadId_fkey" FOREIGN KEY ("unidadId") REFERENCES "Unidad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mancuerna" ADD CONSTRAINT "Mancuerna_tractoId_fkey" FOREIGN KEY ("tractoId") REFERENCES "Unidad"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mancuerna" ADD CONSTRAINT "Mancuerna_tanque1Id_fkey" FOREIGN KEY ("tanque1Id") REFERENCES "Unidad"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mancuerna" ADD CONSTRAINT "Mancuerna_dollyId_fkey" FOREIGN KEY ("dollyId") REFERENCES "Unidad"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mancuerna" ADD CONSTRAINT "Mancuerna_tanque2Id_fkey" FOREIGN KEY ("tanque2Id") REFERENCES "Unidad"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RutaVersion" ADD CONSTRAINT "RutaVersion_rutaId_fkey" FOREIGN KEY ("rutaId") REFERENCES "Ruta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RutaPunto" ADD CONSTRAINT "RutaPunto_rutaId_fkey" FOREIGN KEY ("rutaId") REFERENCES "Ruta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RutaCaseta" ADD CONSTRAINT "RutaCaseta_rutaId_fkey" FOREIGN KEY ("rutaId") REFERENCES "Ruta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RutaParada" ADD CONSTRAINT "RutaParada_rutaId_fkey" FOREIGN KEY ("rutaId") REFERENCES "Ruta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_operadorId_fkey" FOREIGN KEY ("operadorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_unidadId_fkey" FOREIGN KEY ("unidadId") REFERENCES "Unidad"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_mancuernaId_fkey" FOREIGN KEY ("mancuernaId") REFERENCES "Mancuerna"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_rutaId_fkey" FOREIGN KEY ("rutaId") REFERENCES "Ruta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripCambioDestino" ADD CONSTRAINT "TripCambioDestino_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripCambioDestino" ADD CONSTRAINT "TripCambioDestino_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoadOp" ADD CONSTRAINT "LoadOp_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnloadOp" ADD CONSTRAINT "UnloadOp_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bitacora" ADD CONSTRAINT "Bitacora_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripGPS" ADD CONSTRAINT "TripGPS_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
