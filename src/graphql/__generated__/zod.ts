import * as z from 'zod'
import { CreateUserInput, SkillInput } from './types'

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny => v !== undefined && v !== null;

export const definedNonNullAnySchema = z.any().refine((v) => isDefinedNonNullAny(v));

export function CreateUserInputSchema(): z.ZodObject<Properties<CreateUserInput>> {
  return z.object({
    age: z.number(),
    name: z.string(),
    nicknames: z.array(z.string()),
    nicknamesFullNullable: z.array(z.string().nullable()).nullish(),
    nicknamesNullable: z.array(z.string()).nullish(),
    nicknamesPartialNullable: z.array(z.string().nullable()),
    skills: z.array(z.lazy(() => SkillInputSchema())),
    skillsFullNullable: z.array(z.lazy(() => SkillInputSchema().nullable())).nullish(),
    skillsNullable: z.array(z.lazy(() => SkillInputSchema())).nullish(),
    skillsPartialNullable: z.array(z.lazy(() => SkillInputSchema().nullable()))
  })
}

export function SkillInputSchema(): z.ZodObject<Properties<SkillInput>> {
  return z.object({
    level: z.number(),
    name: z.string()
  })
}
