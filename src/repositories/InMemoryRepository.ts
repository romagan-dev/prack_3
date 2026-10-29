import type { BaseEntity } from "../types/BaseEntity"
import { UpdateDto } from "../types/Dto"
import type { IRepository } from "./IRepository"

export class InMemoryRepository<T extends BaseEntity> implements IRepository<T> {
    protected items: T[] = []

    create (item: T): T {
        this.items.push(item)
        return item
    }
   findById (id: string): T | null {
     return this.items.find((item) => item.id === id) ?? null;
  
    }

    findAll (): T[] {
        return [ ... this .items ]
    }
    deleteById(id: string): boolean {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) {
        return false;
    }
    this.items.splice(index, 1);
    return true;
    }

    update(id: string, patch: UpdateDto<T>): T | null {
        const index = this.items.findIndex((item) => item.id === id);
        if (index === -1) {
            return null;
        }
        const existing = this.items[index];
        if (!existing) {
            return null;
        }
        const updated = { ...existing, ...patch, id: existing.id, updatedAt: new Date() };
        this.items[index] = updated;
        return updated;
    }
}


