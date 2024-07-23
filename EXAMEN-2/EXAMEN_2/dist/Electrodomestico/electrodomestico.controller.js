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
exports.ElectrodomesticoController = void 0;
const common_1 = require("@nestjs/common");
const electrodomestico_service_1 = require("./electrodomestico.service");
const create_electrodomestico_dto_1 = require("./dto/create-electrodomestico.dto");
const update_electrodomestico_dto_1 = require("./dto/update-electrodomestico.dto");
let ElectrodomesticoController = class ElectrodomesticoController {
    constructor(electrodomesticoService) {
        this.electrodomesticoService = electrodomesticoService;
    }
    create(createElectrodomesticoDto) {
        return this.electrodomesticoService.create(createElectrodomesticoDto);
    }
    findAll() {
        return this.electrodomesticoService.findAll();
    }
    findOne(id) {
        return this.electrodomesticoService.findOne(id);
    }
    update(id, updateElectrodomesticoDto) {
        return this.electrodomesticoService.update(id, updateElectrodomesticoDto);
    }
    remove(id) {
        return this.electrodomesticoService.remove(id);
    }
    softRemove(id) {
        return this.electrodomesticoService.softRemove(id);
    }
};
exports.ElectrodomesticoController = ElectrodomesticoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_electrodomestico_dto_1.CreateElectrodomesticoDto]),
    __metadata("design:returntype", void 0)
], ElectrodomesticoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ElectrodomesticoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ElectrodomesticoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_electrodomestico_dto_1.UpdateElectrodomesticoDto]),
    __metadata("design:returntype", void 0)
], ElectrodomesticoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ElectrodomesticoController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)('soft-remove/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ElectrodomesticoController.prototype, "softRemove", null);
exports.ElectrodomesticoController = ElectrodomesticoController = __decorate([
    (0, common_1.Controller)('electrodomestico'),
    __metadata("design:paramtypes", [electrodomestico_service_1.ElectrodomesticoService])
], ElectrodomesticoController);
//# sourceMappingURL=electrodomestico.controller.js.map