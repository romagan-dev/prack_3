import type { BaseEntity } from "./BaseEntity"
import type { EntityStatus } from "./EntityStatus"

export type CreateDto<T extends BaseEntity>  = Omit<T, "id" | "createdAt" | "updatedAt">

export type UpdateDto<T extends BaseEntity> = Partial<CreateDto<T>>

export type EntitySummary<T extends BaseEntity & { id: string; title: string; price: number }> = Pick<T, "id" | "title" | "price">

export  type EntityAnalytics<T extends BaseEntity & { status: EntityStatus }> = Record<EntityStatus, number>
/* 


◦ Створити словник аналітики EntityAnalytics<T>: за допомогою Record<EntityStatus,
number> типізувати об’єкт-лічильник кількості сутностей за їхніми статусами.

*/