import { FrozenEntity } from "../decorators";
import { EntityStatus } from "../types";
import type { ConstructionEntity } from "../types";

@FrozenEntity()
export class ConstructionItem implements ConstructionEntity {
    id: string;
    title: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    unitOfMeasure: 'kg' | 'm2' | 'm3';
    weightPerUnitKg: number
    isHeavyCargo: boolean;
    status: EntityStatus

    constructor(title: string, price: number, unitOfMeasure: 'kg' | 'm2' | 'm3', weightPerUnitKg: number, isHeavyCargo: boolean, status: EntityStatus) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.price = price;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.unitOfMeasure = unitOfMeasure;
        this.weightPerUnitKg = weightPerUnitKg;
        this.isHeavyCargo = isHeavyCargo;
        this.status = status;
    }
}