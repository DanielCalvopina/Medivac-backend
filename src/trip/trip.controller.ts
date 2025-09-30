// src/trip/trip.controller.ts
import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { TripService } from "./trip.service";
import { CreateTripDto } from "../common/dto/create-trip.dto";
import { CreateLoadDto } from "../common/dto/create-load.dto";
import { CreateUnloadDto } from "../common/dto/create-unload.dto";

@Controller("trips")
export class TripController {
  constructor(private readonly trips: TripService) {}

  @Post()
  createTrip(@Body() dto: CreateTripDto) {
    return this.trips.createTrip(dto);
  }

  @Get(":id")
  get(@Param("id") id: string) {
    return this.trips.get(id);
  }

  @Get()
  listOrFind(
    @Query("folio") folio?: string,
    @Query("q") q?: string,
    @Query("skip") skip = "0",
    @Query("take") take = "50"
  ) {
    if (folio) return this.trips.findByFolio(folio);
    return this.trips.list({
      q: q?.trim() || undefined,
      skip: Number(skip) || 0,
      take: Math.min(Number(take) || 50, 200),
    });
  }

  // Solo folios (ligero): devuelve [{id, folio}]
  @Get("folios/all")
  listFolios(
    @Query("q") q?: string,
    @Query("skip") skip = "0",
    @Query("take") take = "200"
  ) {
    return this.trips.listFolios({
      q: q?.trim() || undefined,
      skip: Number(skip) || 0,
      take: Math.min(Number(take) || 200, 1000),
    });
  }

  @Post(":tripId/carga")
  addLoad(@Param("tripId") tripId: string, @Body() dto: CreateLoadDto) {
    return this.trips.addLoad(tripId, dto);
  }

  @Get(":tripId/carga")
  listLoads(@Param("tripId") tripId: string) {
    return this.trips.listLoads(tripId);
  }

  @Post(":tripId/descarga")
  addUnload(@Param("tripId") tripId: string, @Body() dto: CreateUnloadDto) {
    return this.trips.addUnload(tripId, dto);
  }

  @Get(":tripId/descarga")
  listUnloads(@Param("tripId") tripId: string) {
    return this.trips.listUnloads(tripId);
  }
}
