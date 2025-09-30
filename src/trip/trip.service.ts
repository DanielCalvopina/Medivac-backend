import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.services";
import { CreateTripDto } from "../common/dto/create-trip.dto";
import { CreateLoadDto } from "../common/dto/create-load.dto";
import { CreateUnloadDto } from "../common/dto/create-unload.dto";

@Injectable()
export class TripService {
  constructor(private prisma: PrismaService) {}

  async createTrip(dto: CreateTripDto) {
    return this.prisma.trip.create({
      data: {
        folio: dto.folio,
        tipo: dto.tipo, // <-- pasar el tipo requerido
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

  async addLoad(tripId: string, dto: CreateLoadDto) {
    await this.ensureTrip(tripId);
    return this.prisma.loadOp.create({
      data: {
        tripId,
        lecturas: dto.lecturas,
        createdBy: dto.createdBy ?? null,
      } as any,
    });
  }

  async addUnload(tripId: string, dto: CreateUnloadDto) {
    await this.ensureTrip(tripId);
    return this.prisma.unloadOp.create({
      data: {
        tripId,
        lecturas: dto.lecturas,
        createdBy: dto.createdBy ?? null,
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
