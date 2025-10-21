export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Void: { input: any; output: any; }
};

export type CreateUserInput = {
  age: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  nicknames: Array<Scalars['String']['input']>;
  nicknamesFullNullable?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nicknamesNullable?: InputMaybe<Array<Scalars['String']['input']>>;
  nicknamesPartialNullable: Array<InputMaybe<Scalars['String']['input']>>;
  skills: Array<SkillInput>;
  skillsFullNullable?: InputMaybe<Array<InputMaybe<SkillInput>>>;
  skillsNullable?: InputMaybe<Array<SkillInput>>;
  skillsPartialNullable: Array<InputMaybe<SkillInput>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<Scalars['Void']['output']>;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type SkillInput = {
  level: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};
