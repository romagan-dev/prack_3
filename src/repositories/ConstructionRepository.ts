import { InMemoryRepository } from "./InMemoryRepository";
import { LogExecutionTime } from "../decorators";
import type { ConstructionEntity,  } from "../types";
import type { UpdateDto } from "../types";

export class ConstructionRepository extends InMemoryRepository<ConstructionEntity> {
    @LogExecutionTime()
    override create(item: ConstructionEntity): ConstructionEntity {
        return super.create(item);
    }

    @LogExecutionTime()
    override update(id: string, patch: UpdateDto<ConstructionEntity>): ConstructionEntity | null {
        return super.update(id, patch);
    }

    @LogExecutionTime()
    override findAll(): ConstructionEntity[] {
        return super.findAll();
    }
}