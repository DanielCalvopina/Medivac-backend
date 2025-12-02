"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Admin_1 = require("../entity/Admin");
const admin_service_1 = require("../service/admin.service");
const admin_controller_1 = require("../controller/admin.controller");
const rutas_module_1 = require("./rutas.module");
const mancuerna_module_1 = require("./mancuerna.module");
const bitacora_module_1 = require("./bitacora.module");
const folio_module_1 = require("./folio.module");
const producto_module_1 = require("./producto.module");
const files_module_1 = require("./files.module");
let AdminModule = class AdminModule {
};
exports.AdminModule = AdminModule;
exports.AdminModule = AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Admin_1.Admin]), rutas_module_1.RutasModule, mancuerna_module_1.MancuernaModule, bitacora_module_1.BitacoraModule, folio_module_1.FolioModule, producto_module_1.ProductoModule, files_module_1.FilesModule],
        controllers: [admin_controller_1.AdminController],
        providers: [admin_service_1.AdminService],
        exports: [admin_service_1.AdminService],
    })
], AdminModule);
//# sourceMappingURL=admin.module.js.map