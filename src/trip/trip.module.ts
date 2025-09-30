import { Module } from "@nestjs/common";
import { TripController } from "./trip.controller";
import { TripService } from "./trip.service";
import { PrismaService } from "../../prisma/prisma.services";

@Module({
  controllers: [TripController],
  providers: [TripService, PrismaService],
  exports: [TripService],
})
export class TripModule {}
