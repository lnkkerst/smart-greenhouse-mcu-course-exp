import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const ClientScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','lastUploaded']);

export const DataScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','clientId','temperature','humidity','pressure','illuminance','soilMoisture','precipitation','raining','smoke']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// CLIENT SCHEMA
/////////////////////////////////////////

export const ClientSchema = z.object({
  id: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  lastUploaded: z.coerce.date(),
})

export type Client = z.infer<typeof ClientSchema>

/////////////////////////////////////////
// DATA SCHEMA
/////////////////////////////////////////

export const DataSchema = z.object({
  id: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  clientId: z.string(),
  temperature: z.number().nullable(),
  humidity: z.number().nullable(),
  pressure: z.number().nullable(),
  illuminance: z.number().nullable(),
  soilMoisture: z.number().nullable(),
  precipitation: z.number().nullable(),
  raining: z.boolean().nullable(),
  smoke: z.boolean().nullable(),
})

export type Data = z.infer<typeof DataSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// CLIENT
//------------------------------------------------------

export const ClientIncludeSchema: z.ZodType<Prisma.ClientInclude> = z.object({
  data: z.union([z.boolean(),z.lazy(() => DataFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ClientCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ClientArgsSchema: z.ZodType<Prisma.ClientDefaultArgs> = z.object({
  select: z.lazy(() => ClientSelectSchema).optional(),
  include: z.lazy(() => ClientIncludeSchema).optional(),
}).strict();

export const ClientCountOutputTypeArgsSchema: z.ZodType<Prisma.ClientCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ClientCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ClientCountOutputTypeSelectSchema: z.ZodType<Prisma.ClientCountOutputTypeSelect> = z.object({
  data: z.boolean().optional(),
}).strict();

export const ClientSelectSchema: z.ZodType<Prisma.ClientSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  lastUploaded: z.boolean().optional(),
  data: z.union([z.boolean(),z.lazy(() => DataFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ClientCountOutputTypeArgsSchema)]).optional(),
}).strict()

// DATA
//------------------------------------------------------

export const DataIncludeSchema: z.ZodType<Prisma.DataInclude> = z.object({
  client: z.union([z.boolean(),z.lazy(() => ClientArgsSchema)]).optional(),
}).strict()

export const DataArgsSchema: z.ZodType<Prisma.DataDefaultArgs> = z.object({
  select: z.lazy(() => DataSelectSchema).optional(),
  include: z.lazy(() => DataIncludeSchema).optional(),
}).strict();

export const DataSelectSchema: z.ZodType<Prisma.DataSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  clientId: z.boolean().optional(),
  temperature: z.boolean().optional(),
  humidity: z.boolean().optional(),
  pressure: z.boolean().optional(),
  illuminance: z.boolean().optional(),
  soilMoisture: z.boolean().optional(),
  precipitation: z.boolean().optional(),
  raining: z.boolean().optional(),
  smoke: z.boolean().optional(),
  client: z.union([z.boolean(),z.lazy(() => ClientArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const ClientWhereInputSchema: z.ZodType<Prisma.ClientWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ClientWhereInputSchema),z.lazy(() => ClientWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClientWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClientWhereInputSchema),z.lazy(() => ClientWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastUploaded: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  data: z.lazy(() => DataListRelationFilterSchema).optional()
}).strict() as z.ZodType<Prisma.ClientWhereInput>;

export const ClientOrderByWithRelationInputSchema: z.ZodType<Prisma.ClientOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  lastUploaded: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => DataOrderByRelationAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClientOrderByWithRelationInput>;

export const ClientWhereUniqueInputSchema: z.ZodType<Prisma.ClientWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => ClientWhereInputSchema),z.lazy(() => ClientWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClientWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClientWhereInputSchema),z.lazy(() => ClientWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastUploaded: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  data: z.lazy(() => DataListRelationFilterSchema).optional()
}).strict()) as z.ZodType<Prisma.ClientWhereUniqueInput>;

export const ClientOrderByWithAggregationInputSchema: z.ZodType<Prisma.ClientOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  lastUploaded: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ClientCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ClientMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ClientMinOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClientOrderByWithAggregationInput>;

export const ClientScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ClientScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ClientScalarWhereWithAggregatesInputSchema),z.lazy(() => ClientScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClientScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClientScalarWhereWithAggregatesInputSchema),z.lazy(() => ClientScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  lastUploaded: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict() as z.ZodType<Prisma.ClientScalarWhereWithAggregatesInput>;

export const DataWhereInputSchema: z.ZodType<Prisma.DataWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DataWhereInputSchema),z.lazy(() => DataWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DataWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DataWhereInputSchema),z.lazy(() => DataWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  clientId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  temperature: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  humidity: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  pressure: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  illuminance: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  soilMoisture: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  precipitation: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  raining: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  smoke: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  client: z.union([ z.lazy(() => ClientRelationFilterSchema),z.lazy(() => ClientWhereInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.DataWhereInput>;

export const DataOrderByWithRelationInputSchema: z.ZodType<Prisma.DataOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  clientId: z.lazy(() => SortOrderSchema).optional(),
  temperature: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  humidity: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pressure: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  illuminance: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  soilMoisture: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  precipitation: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  raining: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  smoke: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  client: z.lazy(() => ClientOrderByWithRelationInputSchema).optional()
}).strict() as z.ZodType<Prisma.DataOrderByWithRelationInput>;

export const DataWhereUniqueInputSchema: z.ZodType<Prisma.DataWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => DataWhereInputSchema),z.lazy(() => DataWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DataWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DataWhereInputSchema),z.lazy(() => DataWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  clientId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  temperature: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  humidity: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  pressure: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  illuminance: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  soilMoisture: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  precipitation: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  raining: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  smoke: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  client: z.union([ z.lazy(() => ClientRelationFilterSchema),z.lazy(() => ClientWhereInputSchema) ]).optional(),
}).strict()) as z.ZodType<Prisma.DataWhereUniqueInput>;

export const DataOrderByWithAggregationInputSchema: z.ZodType<Prisma.DataOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  clientId: z.lazy(() => SortOrderSchema).optional(),
  temperature: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  humidity: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  pressure: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  illuminance: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  soilMoisture: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  precipitation: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  raining: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  smoke: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => DataCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => DataAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DataMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DataMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => DataSumOrderByAggregateInputSchema).optional()
}).strict() as z.ZodType<Prisma.DataOrderByWithAggregationInput>;

export const DataScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DataScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => DataScalarWhereWithAggregatesInputSchema),z.lazy(() => DataScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => DataScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DataScalarWhereWithAggregatesInputSchema),z.lazy(() => DataScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  clientId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  temperature: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  humidity: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  pressure: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  illuminance: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  soilMoisture: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  precipitation: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  raining: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  smoke: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.DataScalarWhereWithAggregatesInput>;

export const ClientCreateInputSchema: z.ZodType<Prisma.ClientCreateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lastUploaded: z.coerce.date().optional(),
  data: z.lazy(() => DataCreateNestedManyWithoutClientInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClientCreateInput>;

export const ClientUncheckedCreateInputSchema: z.ZodType<Prisma.ClientUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lastUploaded: z.coerce.date().optional(),
  data: z.lazy(() => DataUncheckedCreateNestedManyWithoutClientInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClientUncheckedCreateInput>;

export const ClientUpdateInputSchema: z.ZodType<Prisma.ClientUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastUploaded: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  data: z.lazy(() => DataUpdateManyWithoutClientNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClientUpdateInput>;

export const ClientUncheckedUpdateInputSchema: z.ZodType<Prisma.ClientUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastUploaded: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  data: z.lazy(() => DataUncheckedUpdateManyWithoutClientNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClientUncheckedUpdateInput>;

export const ClientCreateManyInputSchema: z.ZodType<Prisma.ClientCreateManyInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lastUploaded: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.ClientCreateManyInput>;

export const ClientUpdateManyMutationInputSchema: z.ZodType<Prisma.ClientUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastUploaded: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.ClientUpdateManyMutationInput>;

export const ClientUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ClientUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastUploaded: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.ClientUncheckedUpdateManyInput>;

export const DataCreateInputSchema: z.ZodType<Prisma.DataCreateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  temperature: z.number().optional().nullable(),
  humidity: z.number().optional().nullable(),
  pressure: z.number().optional().nullable(),
  illuminance: z.number().optional().nullable(),
  soilMoisture: z.number().optional().nullable(),
  precipitation: z.number().optional().nullable(),
  raining: z.boolean().optional().nullable(),
  smoke: z.boolean().optional().nullable(),
  client: z.lazy(() => ClientCreateNestedOneWithoutDataInputSchema)
}).strict() as z.ZodType<Prisma.DataCreateInput>;

export const DataUncheckedCreateInputSchema: z.ZodType<Prisma.DataUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  clientId: z.string(),
  temperature: z.number().optional().nullable(),
  humidity: z.number().optional().nullable(),
  pressure: z.number().optional().nullable(),
  illuminance: z.number().optional().nullable(),
  soilMoisture: z.number().optional().nullable(),
  precipitation: z.number().optional().nullable(),
  raining: z.boolean().optional().nullable(),
  smoke: z.boolean().optional().nullable()
}).strict() as z.ZodType<Prisma.DataUncheckedCreateInput>;

export const DataUpdateInputSchema: z.ZodType<Prisma.DataUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  temperature: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  humidity: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pressure: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  illuminance: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  soilMoisture: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  precipitation: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  raining: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  smoke: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  client: z.lazy(() => ClientUpdateOneRequiredWithoutDataNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.DataUpdateInput>;

export const DataUncheckedUpdateInputSchema: z.ZodType<Prisma.DataUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  clientId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  temperature: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  humidity: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pressure: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  illuminance: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  soilMoisture: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  precipitation: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  raining: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  smoke: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.DataUncheckedUpdateInput>;

export const DataCreateManyInputSchema: z.ZodType<Prisma.DataCreateManyInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  clientId: z.string(),
  temperature: z.number().optional().nullable(),
  humidity: z.number().optional().nullable(),
  pressure: z.number().optional().nullable(),
  illuminance: z.number().optional().nullable(),
  soilMoisture: z.number().optional().nullable(),
  precipitation: z.number().optional().nullable(),
  raining: z.boolean().optional().nullable(),
  smoke: z.boolean().optional().nullable()
}).strict() as z.ZodType<Prisma.DataCreateManyInput>;

export const DataUpdateManyMutationInputSchema: z.ZodType<Prisma.DataUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  temperature: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  humidity: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pressure: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  illuminance: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  soilMoisture: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  precipitation: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  raining: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  smoke: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.DataUpdateManyMutationInput>;

export const DataUncheckedUpdateManyInputSchema: z.ZodType<Prisma.DataUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  clientId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  temperature: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  humidity: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pressure: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  illuminance: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  soilMoisture: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  precipitation: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  raining: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  smoke: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.DataUncheckedUpdateManyInput>;

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.StringFilter>;

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.DateTimeFilter>;

export const DataListRelationFilterSchema: z.ZodType<Prisma.DataListRelationFilter> = z.object({
  every: z.lazy(() => DataWhereInputSchema).optional(),
  some: z.lazy(() => DataWhereInputSchema).optional(),
  none: z.lazy(() => DataWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.DataListRelationFilter>;

export const DataOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DataOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.DataOrderByRelationAggregateInput>;

export const ClientCountOrderByAggregateInputSchema: z.ZodType<Prisma.ClientCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  lastUploaded: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.ClientCountOrderByAggregateInput>;

export const ClientMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ClientMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  lastUploaded: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.ClientMaxOrderByAggregateInput>;

export const ClientMinOrderByAggregateInputSchema: z.ZodType<Prisma.ClientMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  lastUploaded: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.ClientMinOrderByAggregateInput>;

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict() as z.ZodType<Prisma.StringWithAggregatesFilter>;

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict() as z.ZodType<Prisma.DateTimeWithAggregatesFilter>;

export const FloatNullableFilterSchema: z.ZodType<Prisma.FloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.FloatNullableFilter>;

export const BoolNullableFilterSchema: z.ZodType<Prisma.BoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.BoolNullableFilter>;

export const ClientRelationFilterSchema: z.ZodType<Prisma.ClientRelationFilter> = z.object({
  is: z.lazy(() => ClientWhereInputSchema).optional(),
  isNot: z.lazy(() => ClientWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClientRelationFilter>;

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict() as z.ZodType<Prisma.SortOrderInput>;

export const DataCountOrderByAggregateInputSchema: z.ZodType<Prisma.DataCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  clientId: z.lazy(() => SortOrderSchema).optional(),
  temperature: z.lazy(() => SortOrderSchema).optional(),
  humidity: z.lazy(() => SortOrderSchema).optional(),
  pressure: z.lazy(() => SortOrderSchema).optional(),
  illuminance: z.lazy(() => SortOrderSchema).optional(),
  soilMoisture: z.lazy(() => SortOrderSchema).optional(),
  precipitation: z.lazy(() => SortOrderSchema).optional(),
  raining: z.lazy(() => SortOrderSchema).optional(),
  smoke: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.DataCountOrderByAggregateInput>;

export const DataAvgOrderByAggregateInputSchema: z.ZodType<Prisma.DataAvgOrderByAggregateInput> = z.object({
  temperature: z.lazy(() => SortOrderSchema).optional(),
  humidity: z.lazy(() => SortOrderSchema).optional(),
  pressure: z.lazy(() => SortOrderSchema).optional(),
  illuminance: z.lazy(() => SortOrderSchema).optional(),
  soilMoisture: z.lazy(() => SortOrderSchema).optional(),
  precipitation: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.DataAvgOrderByAggregateInput>;

export const DataMaxOrderByAggregateInputSchema: z.ZodType<Prisma.DataMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  clientId: z.lazy(() => SortOrderSchema).optional(),
  temperature: z.lazy(() => SortOrderSchema).optional(),
  humidity: z.lazy(() => SortOrderSchema).optional(),
  pressure: z.lazy(() => SortOrderSchema).optional(),
  illuminance: z.lazy(() => SortOrderSchema).optional(),
  soilMoisture: z.lazy(() => SortOrderSchema).optional(),
  precipitation: z.lazy(() => SortOrderSchema).optional(),
  raining: z.lazy(() => SortOrderSchema).optional(),
  smoke: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.DataMaxOrderByAggregateInput>;

export const DataMinOrderByAggregateInputSchema: z.ZodType<Prisma.DataMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  clientId: z.lazy(() => SortOrderSchema).optional(),
  temperature: z.lazy(() => SortOrderSchema).optional(),
  humidity: z.lazy(() => SortOrderSchema).optional(),
  pressure: z.lazy(() => SortOrderSchema).optional(),
  illuminance: z.lazy(() => SortOrderSchema).optional(),
  soilMoisture: z.lazy(() => SortOrderSchema).optional(),
  precipitation: z.lazy(() => SortOrderSchema).optional(),
  raining: z.lazy(() => SortOrderSchema).optional(),
  smoke: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.DataMinOrderByAggregateInput>;

export const DataSumOrderByAggregateInputSchema: z.ZodType<Prisma.DataSumOrderByAggregateInput> = z.object({
  temperature: z.lazy(() => SortOrderSchema).optional(),
  humidity: z.lazy(() => SortOrderSchema).optional(),
  pressure: z.lazy(() => SortOrderSchema).optional(),
  illuminance: z.lazy(() => SortOrderSchema).optional(),
  soilMoisture: z.lazy(() => SortOrderSchema).optional(),
  precipitation: z.lazy(() => SortOrderSchema).optional()
}).strict() as z.ZodType<Prisma.DataSumOrderByAggregateInput>;

export const FloatNullableWithAggregatesFilterSchema: z.ZodType<Prisma.FloatNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatNullableFilterSchema).optional()
}).strict() as z.ZodType<Prisma.FloatNullableWithAggregatesFilter>;

export const BoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.BoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional()
}).strict() as z.ZodType<Prisma.BoolNullableWithAggregatesFilter>;

export const DataCreateNestedManyWithoutClientInputSchema: z.ZodType<Prisma.DataCreateNestedManyWithoutClientInput> = z.object({
  create: z.union([ z.lazy(() => DataCreateWithoutClientInputSchema),z.lazy(() => DataCreateWithoutClientInputSchema).array(),z.lazy(() => DataUncheckedCreateWithoutClientInputSchema),z.lazy(() => DataUncheckedCreateWithoutClientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DataCreateOrConnectWithoutClientInputSchema),z.lazy(() => DataCreateOrConnectWithoutClientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DataCreateManyClientInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DataWhereUniqueInputSchema),z.lazy(() => DataWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.DataCreateNestedManyWithoutClientInput>;

export const DataUncheckedCreateNestedManyWithoutClientInputSchema: z.ZodType<Prisma.DataUncheckedCreateNestedManyWithoutClientInput> = z.object({
  create: z.union([ z.lazy(() => DataCreateWithoutClientInputSchema),z.lazy(() => DataCreateWithoutClientInputSchema).array(),z.lazy(() => DataUncheckedCreateWithoutClientInputSchema),z.lazy(() => DataUncheckedCreateWithoutClientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DataCreateOrConnectWithoutClientInputSchema),z.lazy(() => DataCreateOrConnectWithoutClientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DataCreateManyClientInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DataWhereUniqueInputSchema),z.lazy(() => DataWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.DataUncheckedCreateNestedManyWithoutClientInput>;

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict() as z.ZodType<Prisma.StringFieldUpdateOperationsInput>;

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput>;

export const DataUpdateManyWithoutClientNestedInputSchema: z.ZodType<Prisma.DataUpdateManyWithoutClientNestedInput> = z.object({
  create: z.union([ z.lazy(() => DataCreateWithoutClientInputSchema),z.lazy(() => DataCreateWithoutClientInputSchema).array(),z.lazy(() => DataUncheckedCreateWithoutClientInputSchema),z.lazy(() => DataUncheckedCreateWithoutClientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DataCreateOrConnectWithoutClientInputSchema),z.lazy(() => DataCreateOrConnectWithoutClientInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DataUpsertWithWhereUniqueWithoutClientInputSchema),z.lazy(() => DataUpsertWithWhereUniqueWithoutClientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DataCreateManyClientInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DataWhereUniqueInputSchema),z.lazy(() => DataWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DataWhereUniqueInputSchema),z.lazy(() => DataWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DataWhereUniqueInputSchema),z.lazy(() => DataWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DataWhereUniqueInputSchema),z.lazy(() => DataWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DataUpdateWithWhereUniqueWithoutClientInputSchema),z.lazy(() => DataUpdateWithWhereUniqueWithoutClientInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DataUpdateManyWithWhereWithoutClientInputSchema),z.lazy(() => DataUpdateManyWithWhereWithoutClientInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DataScalarWhereInputSchema),z.lazy(() => DataScalarWhereInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.DataUpdateManyWithoutClientNestedInput>;

export const DataUncheckedUpdateManyWithoutClientNestedInputSchema: z.ZodType<Prisma.DataUncheckedUpdateManyWithoutClientNestedInput> = z.object({
  create: z.union([ z.lazy(() => DataCreateWithoutClientInputSchema),z.lazy(() => DataCreateWithoutClientInputSchema).array(),z.lazy(() => DataUncheckedCreateWithoutClientInputSchema),z.lazy(() => DataUncheckedCreateWithoutClientInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DataCreateOrConnectWithoutClientInputSchema),z.lazy(() => DataCreateOrConnectWithoutClientInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DataUpsertWithWhereUniqueWithoutClientInputSchema),z.lazy(() => DataUpsertWithWhereUniqueWithoutClientInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DataCreateManyClientInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DataWhereUniqueInputSchema),z.lazy(() => DataWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DataWhereUniqueInputSchema),z.lazy(() => DataWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DataWhereUniqueInputSchema),z.lazy(() => DataWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DataWhereUniqueInputSchema),z.lazy(() => DataWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DataUpdateWithWhereUniqueWithoutClientInputSchema),z.lazy(() => DataUpdateWithWhereUniqueWithoutClientInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DataUpdateManyWithWhereWithoutClientInputSchema),z.lazy(() => DataUpdateManyWithWhereWithoutClientInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DataScalarWhereInputSchema),z.lazy(() => DataScalarWhereInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.DataUncheckedUpdateManyWithoutClientNestedInput>;

export const ClientCreateNestedOneWithoutDataInputSchema: z.ZodType<Prisma.ClientCreateNestedOneWithoutDataInput> = z.object({
  create: z.union([ z.lazy(() => ClientCreateWithoutDataInputSchema),z.lazy(() => ClientUncheckedCreateWithoutDataInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutDataInputSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClientCreateNestedOneWithoutDataInput>;

export const NullableFloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableFloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict() as z.ZodType<Prisma.NullableFloatFieldUpdateOperationsInput>;

export const NullableBoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableBoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional().nullable()
}).strict() as z.ZodType<Prisma.NullableBoolFieldUpdateOperationsInput>;

export const ClientUpdateOneRequiredWithoutDataNestedInputSchema: z.ZodType<Prisma.ClientUpdateOneRequiredWithoutDataNestedInput> = z.object({
  create: z.union([ z.lazy(() => ClientCreateWithoutDataInputSchema),z.lazy(() => ClientUncheckedCreateWithoutDataInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClientCreateOrConnectWithoutDataInputSchema).optional(),
  upsert: z.lazy(() => ClientUpsertWithoutDataInputSchema).optional(),
  connect: z.lazy(() => ClientWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ClientUpdateToOneWithWhereWithoutDataInputSchema),z.lazy(() => ClientUpdateWithoutDataInputSchema),z.lazy(() => ClientUncheckedUpdateWithoutDataInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.ClientUpdateOneRequiredWithoutDataNestedInput>;

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.NestedStringFilter>;

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.NestedDateTimeFilter>;

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict() as z.ZodType<Prisma.NestedStringWithAggregatesFilter>;

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.NestedIntFilter>;

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict() as z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter>;

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.NestedFloatNullableFilter>;

export const NestedBoolNullableFilterSchema: z.ZodType<Prisma.NestedBoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.NestedBoolNullableFilter>;

export const NestedFloatNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatNullableFilterSchema).optional()
}).strict() as z.ZodType<Prisma.NestedFloatNullableWithAggregatesFilter>;

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.NestedIntNullableFilter>;

export const NestedBoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional()
}).strict() as z.ZodType<Prisma.NestedBoolNullableWithAggregatesFilter>;

export const DataCreateWithoutClientInputSchema: z.ZodType<Prisma.DataCreateWithoutClientInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  temperature: z.number().optional().nullable(),
  humidity: z.number().optional().nullable(),
  pressure: z.number().optional().nullable(),
  illuminance: z.number().optional().nullable(),
  soilMoisture: z.number().optional().nullable(),
  precipitation: z.number().optional().nullable(),
  raining: z.boolean().optional().nullable(),
  smoke: z.boolean().optional().nullable()
}).strict() as z.ZodType<Prisma.DataCreateWithoutClientInput>;

export const DataUncheckedCreateWithoutClientInputSchema: z.ZodType<Prisma.DataUncheckedCreateWithoutClientInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  temperature: z.number().optional().nullable(),
  humidity: z.number().optional().nullable(),
  pressure: z.number().optional().nullable(),
  illuminance: z.number().optional().nullable(),
  soilMoisture: z.number().optional().nullable(),
  precipitation: z.number().optional().nullable(),
  raining: z.boolean().optional().nullable(),
  smoke: z.boolean().optional().nullable()
}).strict() as z.ZodType<Prisma.DataUncheckedCreateWithoutClientInput>;

export const DataCreateOrConnectWithoutClientInputSchema: z.ZodType<Prisma.DataCreateOrConnectWithoutClientInput> = z.object({
  where: z.lazy(() => DataWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DataCreateWithoutClientInputSchema),z.lazy(() => DataUncheckedCreateWithoutClientInputSchema) ]),
}).strict() as z.ZodType<Prisma.DataCreateOrConnectWithoutClientInput>;

export const DataCreateManyClientInputEnvelopeSchema: z.ZodType<Prisma.DataCreateManyClientInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => DataCreateManyClientInputSchema),z.lazy(() => DataCreateManyClientInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict() as z.ZodType<Prisma.DataCreateManyClientInputEnvelope>;

export const DataUpsertWithWhereUniqueWithoutClientInputSchema: z.ZodType<Prisma.DataUpsertWithWhereUniqueWithoutClientInput> = z.object({
  where: z.lazy(() => DataWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DataUpdateWithoutClientInputSchema),z.lazy(() => DataUncheckedUpdateWithoutClientInputSchema) ]),
  create: z.union([ z.lazy(() => DataCreateWithoutClientInputSchema),z.lazy(() => DataUncheckedCreateWithoutClientInputSchema) ]),
}).strict() as z.ZodType<Prisma.DataUpsertWithWhereUniqueWithoutClientInput>;

export const DataUpdateWithWhereUniqueWithoutClientInputSchema: z.ZodType<Prisma.DataUpdateWithWhereUniqueWithoutClientInput> = z.object({
  where: z.lazy(() => DataWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DataUpdateWithoutClientInputSchema),z.lazy(() => DataUncheckedUpdateWithoutClientInputSchema) ]),
}).strict() as z.ZodType<Prisma.DataUpdateWithWhereUniqueWithoutClientInput>;

export const DataUpdateManyWithWhereWithoutClientInputSchema: z.ZodType<Prisma.DataUpdateManyWithWhereWithoutClientInput> = z.object({
  where: z.lazy(() => DataScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DataUpdateManyMutationInputSchema),z.lazy(() => DataUncheckedUpdateManyWithoutClientInputSchema) ]),
}).strict() as z.ZodType<Prisma.DataUpdateManyWithWhereWithoutClientInput>;

export const DataScalarWhereInputSchema: z.ZodType<Prisma.DataScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DataScalarWhereInputSchema),z.lazy(() => DataScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DataScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DataScalarWhereInputSchema),z.lazy(() => DataScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  clientId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  temperature: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  humidity: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  pressure: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  illuminance: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  soilMoisture: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  precipitation: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  raining: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  smoke: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.DataScalarWhereInput>;

export const ClientCreateWithoutDataInputSchema: z.ZodType<Prisma.ClientCreateWithoutDataInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lastUploaded: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.ClientCreateWithoutDataInput>;

export const ClientUncheckedCreateWithoutDataInputSchema: z.ZodType<Prisma.ClientUncheckedCreateWithoutDataInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lastUploaded: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.ClientUncheckedCreateWithoutDataInput>;

export const ClientCreateOrConnectWithoutDataInputSchema: z.ZodType<Prisma.ClientCreateOrConnectWithoutDataInput> = z.object({
  where: z.lazy(() => ClientWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClientCreateWithoutDataInputSchema),z.lazy(() => ClientUncheckedCreateWithoutDataInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClientCreateOrConnectWithoutDataInput>;

export const ClientUpsertWithoutDataInputSchema: z.ZodType<Prisma.ClientUpsertWithoutDataInput> = z.object({
  update: z.union([ z.lazy(() => ClientUpdateWithoutDataInputSchema),z.lazy(() => ClientUncheckedUpdateWithoutDataInputSchema) ]),
  create: z.union([ z.lazy(() => ClientCreateWithoutDataInputSchema),z.lazy(() => ClientUncheckedCreateWithoutDataInputSchema) ]),
  where: z.lazy(() => ClientWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClientUpsertWithoutDataInput>;

export const ClientUpdateToOneWithWhereWithoutDataInputSchema: z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutDataInput> = z.object({
  where: z.lazy(() => ClientWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ClientUpdateWithoutDataInputSchema),z.lazy(() => ClientUncheckedUpdateWithoutDataInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClientUpdateToOneWithWhereWithoutDataInput>;

export const ClientUpdateWithoutDataInputSchema: z.ZodType<Prisma.ClientUpdateWithoutDataInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastUploaded: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.ClientUpdateWithoutDataInput>;

export const ClientUncheckedUpdateWithoutDataInputSchema: z.ZodType<Prisma.ClientUncheckedUpdateWithoutDataInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastUploaded: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.ClientUncheckedUpdateWithoutDataInput>;

export const DataCreateManyClientInputSchema: z.ZodType<Prisma.DataCreateManyClientInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  temperature: z.number().optional().nullable(),
  humidity: z.number().optional().nullable(),
  pressure: z.number().optional().nullable(),
  illuminance: z.number().optional().nullable(),
  soilMoisture: z.number().optional().nullable(),
  precipitation: z.number().optional().nullable(),
  raining: z.boolean().optional().nullable(),
  smoke: z.boolean().optional().nullable()
}).strict() as z.ZodType<Prisma.DataCreateManyClientInput>;

export const DataUpdateWithoutClientInputSchema: z.ZodType<Prisma.DataUpdateWithoutClientInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  temperature: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  humidity: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pressure: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  illuminance: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  soilMoisture: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  precipitation: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  raining: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  smoke: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.DataUpdateWithoutClientInput>;

export const DataUncheckedUpdateWithoutClientInputSchema: z.ZodType<Prisma.DataUncheckedUpdateWithoutClientInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  temperature: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  humidity: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pressure: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  illuminance: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  soilMoisture: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  precipitation: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  raining: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  smoke: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.DataUncheckedUpdateWithoutClientInput>;

export const DataUncheckedUpdateManyWithoutClientInputSchema: z.ZodType<Prisma.DataUncheckedUpdateManyWithoutClientInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  temperature: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  humidity: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  pressure: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  illuminance: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  soilMoisture: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  precipitation: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  raining: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  smoke: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.DataUncheckedUpdateManyWithoutClientInput>;

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const ClientFindFirstArgsSchema: z.ZodType<Prisma.ClientFindFirstArgs> = z.object({
  select: ClientSelectSchema.optional(),
  include: ClientIncludeSchema.optional(),
  where: ClientWhereInputSchema.optional(),
  orderBy: z.union([ ClientOrderByWithRelationInputSchema.array(),ClientOrderByWithRelationInputSchema ]).optional(),
  cursor: ClientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ClientScalarFieldEnumSchema,ClientScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.ClientFindFirstArgs>;

export const ClientFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ClientFindFirstOrThrowArgs> = z.object({
  select: ClientSelectSchema.optional(),
  include: ClientIncludeSchema.optional(),
  where: ClientWhereInputSchema.optional(),
  orderBy: z.union([ ClientOrderByWithRelationInputSchema.array(),ClientOrderByWithRelationInputSchema ]).optional(),
  cursor: ClientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ClientScalarFieldEnumSchema,ClientScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.ClientFindFirstOrThrowArgs>;

export const ClientFindManyArgsSchema: z.ZodType<Prisma.ClientFindManyArgs> = z.object({
  select: ClientSelectSchema.optional(),
  include: ClientIncludeSchema.optional(),
  where: ClientWhereInputSchema.optional(),
  orderBy: z.union([ ClientOrderByWithRelationInputSchema.array(),ClientOrderByWithRelationInputSchema ]).optional(),
  cursor: ClientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ClientScalarFieldEnumSchema,ClientScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.ClientFindManyArgs>;

export const ClientAggregateArgsSchema: z.ZodType<Prisma.ClientAggregateArgs> = z.object({
  where: ClientWhereInputSchema.optional(),
  orderBy: z.union([ ClientOrderByWithRelationInputSchema.array(),ClientOrderByWithRelationInputSchema ]).optional(),
  cursor: ClientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ClientAggregateArgs>;

export const ClientGroupByArgsSchema: z.ZodType<Prisma.ClientGroupByArgs> = z.object({
  where: ClientWhereInputSchema.optional(),
  orderBy: z.union([ ClientOrderByWithAggregationInputSchema.array(),ClientOrderByWithAggregationInputSchema ]).optional(),
  by: ClientScalarFieldEnumSchema.array(),
  having: ClientScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ClientGroupByArgs>;

export const ClientFindUniqueArgsSchema: z.ZodType<Prisma.ClientFindUniqueArgs> = z.object({
  select: ClientSelectSchema.optional(),
  include: ClientIncludeSchema.optional(),
  where: ClientWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ClientFindUniqueArgs>;

export const ClientFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ClientFindUniqueOrThrowArgs> = z.object({
  select: ClientSelectSchema.optional(),
  include: ClientIncludeSchema.optional(),
  where: ClientWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ClientFindUniqueOrThrowArgs>;

export const DataFindFirstArgsSchema: z.ZodType<Prisma.DataFindFirstArgs> = z.object({
  select: DataSelectSchema.optional(),
  include: DataIncludeSchema.optional(),
  where: DataWhereInputSchema.optional(),
  orderBy: z.union([ DataOrderByWithRelationInputSchema.array(),DataOrderByWithRelationInputSchema ]).optional(),
  cursor: DataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DataScalarFieldEnumSchema,DataScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.DataFindFirstArgs>;

export const DataFindFirstOrThrowArgsSchema: z.ZodType<Prisma.DataFindFirstOrThrowArgs> = z.object({
  select: DataSelectSchema.optional(),
  include: DataIncludeSchema.optional(),
  where: DataWhereInputSchema.optional(),
  orderBy: z.union([ DataOrderByWithRelationInputSchema.array(),DataOrderByWithRelationInputSchema ]).optional(),
  cursor: DataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DataScalarFieldEnumSchema,DataScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.DataFindFirstOrThrowArgs>;

export const DataFindManyArgsSchema: z.ZodType<Prisma.DataFindManyArgs> = z.object({
  select: DataSelectSchema.optional(),
  include: DataIncludeSchema.optional(),
  where: DataWhereInputSchema.optional(),
  orderBy: z.union([ DataOrderByWithRelationInputSchema.array(),DataOrderByWithRelationInputSchema ]).optional(),
  cursor: DataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DataScalarFieldEnumSchema,DataScalarFieldEnumSchema.array() ]).optional(),
}).strict() as z.ZodType<Prisma.DataFindManyArgs>;

export const DataAggregateArgsSchema: z.ZodType<Prisma.DataAggregateArgs> = z.object({
  where: DataWhereInputSchema.optional(),
  orderBy: z.union([ DataOrderByWithRelationInputSchema.array(),DataOrderByWithRelationInputSchema ]).optional(),
  cursor: DataWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.DataAggregateArgs>;

export const DataGroupByArgsSchema: z.ZodType<Prisma.DataGroupByArgs> = z.object({
  where: DataWhereInputSchema.optional(),
  orderBy: z.union([ DataOrderByWithAggregationInputSchema.array(),DataOrderByWithAggregationInputSchema ]).optional(),
  by: DataScalarFieldEnumSchema.array(),
  having: DataScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.DataGroupByArgs>;

export const DataFindUniqueArgsSchema: z.ZodType<Prisma.DataFindUniqueArgs> = z.object({
  select: DataSelectSchema.optional(),
  include: DataIncludeSchema.optional(),
  where: DataWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.DataFindUniqueArgs>;

export const DataFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.DataFindUniqueOrThrowArgs> = z.object({
  select: DataSelectSchema.optional(),
  include: DataIncludeSchema.optional(),
  where: DataWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.DataFindUniqueOrThrowArgs>;

export const ClientCreateArgsSchema: z.ZodType<Prisma.ClientCreateArgs> = z.object({
  select: ClientSelectSchema.optional(),
  include: ClientIncludeSchema.optional(),
  data: z.union([ ClientCreateInputSchema,ClientUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.ClientCreateArgs>;

export const ClientUpsertArgsSchema: z.ZodType<Prisma.ClientUpsertArgs> = z.object({
  select: ClientSelectSchema.optional(),
  include: ClientIncludeSchema.optional(),
  where: ClientWhereUniqueInputSchema,
  create: z.union([ ClientCreateInputSchema,ClientUncheckedCreateInputSchema ]),
  update: z.union([ ClientUpdateInputSchema,ClientUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.ClientUpsertArgs>;

export const ClientCreateManyArgsSchema: z.ZodType<Prisma.ClientCreateManyArgs> = z.object({
  data: z.union([ ClientCreateManyInputSchema,ClientCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.ClientCreateManyArgs>;

export const ClientCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ClientCreateManyAndReturnArgs> = z.object({
  data: z.union([ ClientCreateManyInputSchema,ClientCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.ClientCreateManyAndReturnArgs>;

export const ClientDeleteArgsSchema: z.ZodType<Prisma.ClientDeleteArgs> = z.object({
  select: ClientSelectSchema.optional(),
  include: ClientIncludeSchema.optional(),
  where: ClientWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ClientDeleteArgs>;

export const ClientUpdateArgsSchema: z.ZodType<Prisma.ClientUpdateArgs> = z.object({
  select: ClientSelectSchema.optional(),
  include: ClientIncludeSchema.optional(),
  data: z.union([ ClientUpdateInputSchema,ClientUncheckedUpdateInputSchema ]),
  where: ClientWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ClientUpdateArgs>;

export const ClientUpdateManyArgsSchema: z.ZodType<Prisma.ClientUpdateManyArgs> = z.object({
  data: z.union([ ClientUpdateManyMutationInputSchema,ClientUncheckedUpdateManyInputSchema ]),
  where: ClientWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.ClientUpdateManyArgs>;

export const ClientDeleteManyArgsSchema: z.ZodType<Prisma.ClientDeleteManyArgs> = z.object({
  where: ClientWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.ClientDeleteManyArgs>;

export const DataCreateArgsSchema: z.ZodType<Prisma.DataCreateArgs> = z.object({
  select: DataSelectSchema.optional(),
  include: DataIncludeSchema.optional(),
  data: z.union([ DataCreateInputSchema,DataUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.DataCreateArgs>;

export const DataUpsertArgsSchema: z.ZodType<Prisma.DataUpsertArgs> = z.object({
  select: DataSelectSchema.optional(),
  include: DataIncludeSchema.optional(),
  where: DataWhereUniqueInputSchema,
  create: z.union([ DataCreateInputSchema,DataUncheckedCreateInputSchema ]),
  update: z.union([ DataUpdateInputSchema,DataUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.DataUpsertArgs>;

export const DataCreateManyArgsSchema: z.ZodType<Prisma.DataCreateManyArgs> = z.object({
  data: z.union([ DataCreateManyInputSchema,DataCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.DataCreateManyArgs>;

export const DataCreateManyAndReturnArgsSchema: z.ZodType<Prisma.DataCreateManyAndReturnArgs> = z.object({
  data: z.union([ DataCreateManyInputSchema,DataCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.DataCreateManyAndReturnArgs>;

export const DataDeleteArgsSchema: z.ZodType<Prisma.DataDeleteArgs> = z.object({
  select: DataSelectSchema.optional(),
  include: DataIncludeSchema.optional(),
  where: DataWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.DataDeleteArgs>;

export const DataUpdateArgsSchema: z.ZodType<Prisma.DataUpdateArgs> = z.object({
  select: DataSelectSchema.optional(),
  include: DataIncludeSchema.optional(),
  data: z.union([ DataUpdateInputSchema,DataUncheckedUpdateInputSchema ]),
  where: DataWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.DataUpdateArgs>;

export const DataUpdateManyArgsSchema: z.ZodType<Prisma.DataUpdateManyArgs> = z.object({
  data: z.union([ DataUpdateManyMutationInputSchema,DataUncheckedUpdateManyInputSchema ]),
  where: DataWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.DataUpdateManyArgs>;

export const DataDeleteManyArgsSchema: z.ZodType<Prisma.DataDeleteManyArgs> = z.object({
  where: DataWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.DataDeleteManyArgs>;