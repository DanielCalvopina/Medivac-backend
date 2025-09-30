"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripController = void 0;
const common_1 = require("@nestjs/common");
const trip_service_1 = require("./trip.service");
const create_trip_dto_1 = require("../common/dto/create-trip.dto");
const create_load_dto_1 = require("../common/dto/create-load.dto");
const create_unload_dto_1 = require("../common/dto/create-unload.dto");
let TripController = class TripController {
    constructor(trips) {
        this.trips = trips;
    }
    createTrip(dto) {
        return this.trips.createTrip(dto);
    }
    get(id) {
        return this.trips.get(id);
    }
    findByFolio(folio) {
        if (!folio)
            return [];
        return this.trips.findByFolio(folio);
    }
    addLoad(tripId, dto) {
        return this.trips.addLoad(tripId, dto);
    }
    listLoads(tripId) {
        return this.trips.listLoads(tripId);
    }
    addUnload(tripId, dto) {
        return this.trips.addUnload(tripId, dto);
    }
    listUnloads(tripId) {
        return this.trips.listUnloads(tripId);
    }
};
exports.TripController = TripController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_trip_dto_1.CreateTripDto]),
    __metadata("design:returntype", void 0)
], TripController.prototype, "createTrip", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TripController.prototype, "get", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)("folio")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TripController.prototype, "findByFolio", null);
__decorate([
    (0, common_1.Post)(":tripId/carga"),
    __param(0, (0, common_1.Param)("tripId")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_load_dto_1.CreateLoadDto]),
    __metadata("design:returntype", void 0)
], TripController.prototype, "addLoad", null);
__decorate([
    (0, common_1.Get)(":tripId/carga"),
    __param(0, (0, common_1.Param)("tripId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TripController.prototype, "listLoads", null);
__decorate([
    (0, common_1.Post)(":tripId/descarga"),
    __param(0, (0, common_1.Param)("tripId")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_unload_dto_1.CreateUnloadDto]),
    __metadata("design:returntype", void 0)
], TripController.prototype, "addUnload", null);
__decorate([
    (0, common_1.Get)(":tripId/descarga"),
    __param(0, (0, common_1.Param)("tripId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TripController.prototype, "listUnloads", null);
exports.TripController = TripController = __decorate([
    (0, common_1.Controller)("trips"),
    __metadata("design:paramtypes", [trip_service_1.TripService])
], TripController);
