import type { CodegenConfig } from "@graphql-codegen/cli";
import type { ValidationSchemaPluginConfig } from "graphql-codegen-typescript-validation-schema";

const root = `src/graphql/__generated__`;

const config: CodegenConfig = {
  generates: {
    [`${root}/types.ts`]: {
      plugins: [
        {
          typescript: {},
        },
      ],
    },
    [`${root}/zod.ts`]: {
      plugins: [
        {
          "typescript-validation-schema": {
            directives: {
              constraint: {
                max: "max",
                maxItems: "max",
                maxLength: "max",
                min: "min",
                minItems: "min",
                minLength: "min",
              },
            },
            importFrom: "./types",
            schema: "zodv4",
          } satisfies ValidationSchemaPluginConfig,
        },
      ],
    },
  },
  schema: "src/graphql/schema.graphql",
};

// eslint-disable-next-line import/no-default-export -- allow for framework
export default config;
