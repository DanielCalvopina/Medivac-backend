// src/trip/trip.service.ts
import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.services";
import { CreateTripDto } from "../common/dto/create-trip.dto";
import { CreateLoadDto } from "../common/dto/create-load.dto";
import { CreateUnloadDto } from "../common/dto/create-unload.dto";

type ListParams = { q?: string; skip?: number; take?: number };

@Injectable()
export class TripService {
  constructor(private prisma: PrismaService) {}

  async createTrip(dto: CreateTripDto) {
    return this.prisma.trip.create({
      data: {
        folio: dto.folio,
        tipo: dto.tipo,
        clienteId: dto.clienteId ?? null,
        productoId: dto.productoId ?? null,
      },
    });
  }

  async findByFolio(folio: string) {
    const trip = await this.prisma.trip.findUnique({ where: { folio } });
    if (!trip) throw new NotFoundException("Trip no encontrado");
    return trip;
  }

  async get(id: string) {
    const trip = await this.prisma.trip.findUnique({ where: { id } });
    if (!trip) throw new NotFoundException("Trip no encontrado");
    return trip;
  }

  // NUEVO: listar viajes (opcional q = búsqueda parcial por folio)
  async list(params: ListParams) {
    const { q, skip = 0, take = 50 } = params;
    const where = q
      ? { folio: { contains: q, mode: "insensitive" as const } }
      : undefined;

    const [items, total] = await this.prisma.$transaction([
      this.prisma.trip.findMany({
        where,
        orderBy: { folio: "asc" },
        skip,
        take,
        select: {
          id: true,
          folio: true,
          tipo: true,
          clienteId: true,
          productoId: true,
        },
      }),
      this.prisma.trip.count({ where }),
    ]);

    return { items, total, skip, take };
  }

  // NUEVO: solo folios (ligero)
  async listFolios(params: ListParams) {
    const { q, skip = 0, take = 200 } = params;
    const where = q
      ? { folio: { contains: q, mode: "insensitive" as const } }
      : undefined;

    const [items, total] = await this.prisma.$transaction([
      this.prisma.trip.findMany({
        where,
        orderBy: { folio: "asc" },
        skip,
        take,
        select: { id: true, folio: true },
      }),
      this.prisma.trip.count({ where }),
    ]);

    return { items, total, skip, take };
  }

  async addLoad(tripId: string, dto: CreateLoadDto) {
    await this.ensureTrip(tripId);
    return this.prisma.loadOp.create({
      data: {
        tripId,
        lecturas: (dto as any).lecturas ?? dto, // por compatibilidad
        createdBy: (dto as any).createdBy ?? null,
      } as any,
    });
  }

  async addUnload(tripId: string, dto: CreateUnloadDto) {
    await this.ensureTrip(tripId);
    return this.prisma.unloadOp.create({
      data: {
        tripId,
        lecturas: (dto as any).lecturas ?? dto,
        createdBy: (dto as any).createdBy ?? null,
      } as any,
    });
  }

  async listLoads(tripId: string) {
    await this.ensureTrip(tripId);
    return this.prisma.loadOp.findMany({
      where: { tripId },
      orderBy: { createdAt: "desc" },
    });
  }

  async listUnloads(tripId: string) {
    await this.ensureTrip(tripId);
    return this.prisma.unloadOp.findMany({
      where: { tripId },
      orderBy: { createdAt: "desc" },
    });
  }

  private async ensureTrip(id: string) {
    const ok = await this.prisma.trip.findUnique({ where: { id } });
    if (!ok) throw new NotFoundException("Trip no encontrado");
  }
}
