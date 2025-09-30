import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../../prisma/prisma.services";
import { CreateBitacoraDto } from "../common/dto/create-bitacora.dto";

@Injectable()
export class BitacoraService {
  constructor(private prisma: PrismaService) {}

  async add(dto: CreateBitacoraDto) {
    // TODO: Ajusta los campos según tu `model Bitacora` en Prisma.
    // Ejemplo tentativo:
    // id autogen; createdAt autogen en Prisma
    // evento/detalle/categoria/createdBy pueden ser opcionales
    await this.ensureTrip(dto.tripId);

    return this.prisma.bitacora.create({
      data: {
        tripId: dto.tripId,
        // Asegúrate de que estos nombres existan en schema.prisma
        evento: dto.evento ?? null,
        detalle: dto.detalle ?? null,
        categoria: dto.categoria ?? null,
        createdBy: dto.createdBy ?? null,
      } as any,
    });
  }

  async listByTrip(tripId: string) {
    await this.ensureTrip(tripId);
    return this.prisma.bitacora.findMany({
      where: { tripId },
      orderBy: { createdAt: "desc" },
    });
  }

  private async ensureTrip(id: string) {
    const trip = await this.prisma.trip.findUnique({ where: { id } });
    if (!trip) throw new NotFoundException("Trip no encontrado");
  }
}
