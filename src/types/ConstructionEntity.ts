import type { BaseEntity } from "./BaseEntity";
import { EntityStatus } from "./EntityStatus";

export interface ConstructionEntity extends BaseEntity {

    title: string;
    price: number;
    unitOfMeasure: 'kg' | 'm2' | 'm3';
    weightPerUnitKg: number;
    isHeavyCargo: boolean;
    status: EntityStatus;
    
}