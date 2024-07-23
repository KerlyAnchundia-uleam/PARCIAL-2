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
exports.ElectrodomesticoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const electrodomestico_entity_1 = require("./entities/electrodomestico.entity");
const typeorm_2 = require("@nestjs/typeorm");
let ElectrodomesticoService = class ElectrodomesticoService {
    constructor(electrodomesticoRepository) {
        this.electrodomesticoRepository = electrodomesticoRepository;
    }
    async create(createElectrodomesticoDto) {
        const electrodomestico = this.electrodomesticoRepository.create(createElectrodomesticoDto);
        await this.electrodomesticoRepository.save(electrodomestico);
        return electrodomestico;
    }
    async findAll() {
        return this.electrodomesticoRepository.find();
    }
    async findOne(id) {
        return this.electrodomesticoRepository.findOneBy({ id });
    }
    async update(id, updateElectrodomesticoDto) {
        const updated = await this.electrodomesticoRepository.update(id, updateElectrodomesticoDto);
        return updated.affected > 0 ? this.electrodomesticoRepository.findOneBy({ id }) : null;
    }
    async remove(id) {
        const electrodomestico = await this.findOne(id);
        if (!electrodomestico) {
            return null;
        }
        await this.electrodomesticoRepository.remove(electrodomestico);
        return electrodomestico;
    }
    async softRemove(id) {
        const electrodomestico = await this.findOne(id);
        if (!electrodomestico) {
            return null;
        }
        electrodomestico.estado = 'Desactivado';
        await this.electrodomesticoRepository.save(electrodomestico);
        return electrodomestico;
    }
    async hardRemove(id) {
        const electrodomestico = await this.findOne(id);
        if (!electrodomestico) {
            return null;
        }
        await this.electrodomesticoRepository.delete(id);
        return electrodomestico;
    }
};
exports.ElectrodomesticoService = ElectrodomesticoService;
exports.ElectrodomesticoService = ElectrodomesticoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(electrodomestico_entity_1.Electrodomestico)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ElectrodomesticoService);
//# sourceMappingURL=electrodomestico.service.js.map