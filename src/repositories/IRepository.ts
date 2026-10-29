import type { BaseEntity } from "../types/BaseEntity";
import type { UpdateDto } from "../types/Dto";

export interface IRepository<T extends BaseEntity> {
    create(item: T): T;
    findById(id: string): T | null;
    findAll(): T[];
    deleteById(id: string): boolean;
    
    update(id: string, patch: UpdateDto<T>): T | null;

    
}