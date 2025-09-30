import { Module } from "@nestjs/common";
import { BitacoraController } from "./bitacora.controller";
import { BitacoraService } from "./bitacora.service";
import { PrismaService } from "../../prisma/prisma.services";

@Module({
  controllers: [BitacoraController],
  providers: [BitacoraService, PrismaService],
  exports: [BitacoraService],
})
export class BitacoraModule {}
