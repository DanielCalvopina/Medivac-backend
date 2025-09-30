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

  /** Buscar por folio: /trips?folio=ABC123 */
  @Get()
  findByFolio(@Query("folio") folio?: string) {
    if (!folio) return [];
    return this.trips.findByFolio(folio);
  }

  // ----- CARGA -----
  @Post(":tripId/carga")
  addLoad(@Param("tripId") tripId: string, @Body() dto: CreateLoadDto) {
    return this.trips.addLoad(tripId, dto);
  }

  @Get(":tripId/carga")
  listLoads(@Param("tripId") tripId: string) {
    return this.trips.listLoads(tripId);
  }

  // ----- DESCARGA -----
  @Post(":tripId/descarga")
  addUnload(@Param("tripId") tripId: string, @Body() dto: CreateUnloadDto) {
    return this.trips.addUnload(tripId, dto);
  }

  @Get(":tripId/descarga")
  listUnloads(@Param("tripId") tripId: string) {
    return this.trips.listUnloads(tripId);
  }
}
