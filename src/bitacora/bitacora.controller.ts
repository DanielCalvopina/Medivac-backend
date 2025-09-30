import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { BitacoraService } from "./bitacora.service";
import { CreateBitacoraDto } from "../common/dto/create-bitacora.dto";

@Controller("bitacora")
export class BitacoraController {
  constructor(private readonly service: BitacoraService) {}

  @Post()
  add(@Body() dto: CreateBitacoraDto) {
    return this.service.add(dto);
  }

  @Get("trip/:tripId")
  listByTrip(@Param("tripId") tripId: string) {
    return this.service.listByTrip(tripId);
  }
}
