import * as z from 'zod'
import { CreateUserInput, SkillInput } from './types'

type Properties<T> = {
  [K in keyof T]: z.ZodType<T[K], T[K] | undefined>;
};

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny => v !== undefined && v !== null;

export const definedNonNullAnySchema = z.any().refine((v) => isDefinedNonNullAny(v));

export function CreateUserInputSchema(): z.ZodObject<Properties<CreateUserInput>> {
  return z.object({
    age: z.number().min(0).max(1),
    name: z.string().min(10).max(11),
    nicknames: z.array(z.string()).min(20).max(21),
    nicknamesFullNullable: z.array(z.string().nullable()).min(30).max(31).nullish(),
    nicknamesNullable: z.array(z.string()).min(40).max(41).nullish(),
    nicknamesPartialNullable: z.array(z.string().nullable()).min(50).max(51),
    skills: z.array(z.lazy(() => SkillInputSchema())).min(60).max(61),
    skillsFullNullable: z.array(z.lazy(() => SkillInputSchema().nullable())).min(70).max(71).nullish(),
    skillsNullable: z.array(z.lazy(() => SkillInputSchema())).min(80).max(81).nullish(),
    skillsPartialNullable: z.array(z.lazy(() => SkillInputSchema().nullable())).min(90).max(91)
  })
}

export function SkillInputSchema(): z.ZodObject<Properties<SkillInput>> {
  return z.object({
    level: z.number().min(1000).max(1001),
    name: z.string().min(1010).max(1011)
  })
}
