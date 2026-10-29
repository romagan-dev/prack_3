import { ConstructionRepository } from "./repositories";
import { ConstructionItem } from "./entities";
import { EntityStatus } from "./types";
import type { ApiResponse, ConstructionEntity, CreateDto, UpdateDto, EntityAnalytics } from "./types";

function createFromDto(dto: CreateDto<ConstructionEntity>): ConstructionEntity {
    const item = new ConstructionItem(
        dto.title, dto.price, dto.unitOfMeasure,
        dto.weightPerUnitKg, dto.isHeavyCargo, dto.status
    );
    return item;
}

console.log("=== ІНІЦІАЛІЗАЦІЯ GENERIC SERVICE LAYER ===");

const repo = new ConstructionRepository();

const dtos: CreateDto<ConstructionEntity>[] = [
    { title: "Цемент М500", price: 250, unitOfMeasure: "kg", weightPerUnitKg: 25, isHeavyCargo: true, status: EntityStatus.Active },
    { title: "Плитка керамічна", price: 480, unitOfMeasure: "m2", weightPerUnitKg: 18, isHeavyCargo: false, status: EntityStatus.Active },
    { title: "Пісок річковий", price: 120, unitOfMeasure: "m3", weightPerUnitKg: 1500, isHeavyCargo: true, status: EntityStatus.Archived },
];

const created = dtos.map((dto) => repo.create(createFromDto(dto)));
created.forEach((c) =>
    console.log(`- Створено сутність ID: ${c.id} | Статус: ${c.status} | Назва: [${c.title}]`)
);

const first = created[0]!;
const patch: UpdateDto<ConstructionEntity> = { price: 299 };
const updated = repo.update(first.id, patch);
if (updated) {
    console.log(`- Оновлено сутність ID: ${updated.id} | Актуалізовано ціну та updatedAt.`);
}

const all = repo.findAll();
console.log(`Отримано сутностей у репозиторії: ${all.length}`);

console.log("=== СТАТИСТИКА СТАТУСІВ (RECORD) ===");
const stats: EntityAnalytics<ConstructionEntity> = {
    [EntityStatus.Active]: 0,
    [EntityStatus.Archived]: 0,
    [EntityStatus.Draft]: 0,
};
for (const entity of all) {
    stats[entity.status] += 1;
}
console.log(JSON.stringify(stats, null, 2));

console.log("=== СТАНДАРТИЗОВАНА ВІДПОВІДЬ API (GENERIC API RESPONSE) ===");
if (updated) {
    const response: ApiResponse<ConstructionEntity> = {
        success: true,
        data: updated,
        timestamp: new Date(),
        meta: { totalCount: all.length, version: "1.0.0" },
    };
    console.log(JSON.stringify(response, null, 2));
}