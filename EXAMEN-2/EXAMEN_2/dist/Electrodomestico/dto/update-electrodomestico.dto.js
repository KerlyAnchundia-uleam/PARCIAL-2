"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateElectrodomesticoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_electrodomestico_dto_1 = require("./create-electrodomestico.dto");
class UpdateElectrodomesticoDto extends (0, mapped_types_1.PartialType)(create_electrodomestico_dto_1.CreateElectrodomesticoDto) {
}
exports.UpdateElectrodomesticoDto = UpdateElectrodomesticoDto;
//# sourceMappingURL=update-electrodomestico.dto.js.map