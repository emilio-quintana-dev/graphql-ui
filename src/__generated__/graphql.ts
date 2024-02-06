/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  /** An ISO 8601-encoded date */
  ISO8601Date: { input: any; output: any; }
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: { input: any; output: any; }
};

export type Item = {
  __typename?: 'Item';
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  identifier?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  modifier?: Maybe<Modifier>;
  modifierGroups: Array<ModifierGroup>;
  price?: Maybe<Scalars['Float']['output']>;
  sectionItem: SectionItem;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type Menu = {
  __typename?: 'Menu';
  createdAt: Scalars['ISO8601DateTime']['output'];
  endDate?: Maybe<Scalars['ISO8601Date']['output']>;
  id: Scalars['ID']['output'];
  identifier?: Maybe<Scalars['String']['output']>;
  items: Array<Item>;
  label?: Maybe<Scalars['String']['output']>;
  menuSections: Array<MenuSection>;
  sections: Array<Section>;
  startDate?: Maybe<Scalars['ISO8601Date']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type MenuSection = {
  __typename?: 'MenuSection';
  createdAt: Scalars['ISO8601DateTime']['output'];
  displayOrder?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  menuId: Scalars['Int']['output'];
  sectionId: Scalars['Int']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type Modifier = {
  __typename?: 'Modifier';
  createdAt: Scalars['ISO8601DateTime']['output'];
  defaultQuantity?: Maybe<Scalars['Int']['output']>;
  displayOrder?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  item: Item;
  itemId: Scalars['Int']['output'];
  modifierGroup: ModifierGroup;
  modifierGroupId: Scalars['Int']['output'];
  priceOverride?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type ModifierGroup = {
  __typename?: 'ModifierGroup';
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  identifier?: Maybe<Scalars['String']['output']>;
  item?: Maybe<Item>;
  items: Array<Item>;
  label?: Maybe<Scalars['String']['output']>;
  modifiers: Array<Modifier>;
  selectionRequiredMax?: Maybe<Scalars['Int']['output']>;
  selectionRequiredMin?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a new item */
  createItem: Item;
  /** Create a new menu */
  createMenu: Menu;
  /** Create a new modifier */
  createModifier: Modifier;
  /** Create a new modifier group */
  createModifierGroup: ModifierGroup;
  /** Create a new section */
  createSection: Section;
  /** Delete an item */
  deleteItem: Item;
  /** Delete a menu */
  deleteMenu: Menu;
  /** Delete a modifier */
  deleteModifier: Modifier;
  /** Delete a modifier group */
  deleteModifierGroup: ModifierGroup;
  /** Delete a section */
  deleteSection: Section;
  /** A field that returns the input string */
  testField: Scalars['String']['output'];
  /** Update an item */
  updateItem: Item;
  /** Update a menu */
  updateMenu: Menu;
  /** Update a modifier */
  updateModifier: Modifier;
  /** Update a modifier group */
  updateModifierGroup: ModifierGroup;
  /** Update a section */
  updateSection: Section;
};


export type MutationCreateItemArgs = {
  description: Scalars['String']['input'];
  identifier: Scalars['String']['input'];
  label: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  type: Scalars['String']['input'];
};


export type MutationCreateMenuArgs = {
  endDate: Scalars['ISO8601Date']['input'];
  identifier: Scalars['String']['input'];
  label: Scalars['String']['input'];
  startDate: Scalars['ISO8601Date']['input'];
  state: Scalars['String']['input'];
};


export type MutationCreateModifierArgs = {
  defaultQuantity?: InputMaybe<Scalars['Int']['input']>;
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  itemId: Scalars['Int']['input'];
  modifierGroupId: Scalars['Int']['input'];
  priceOverride?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationCreateModifierGroupArgs = {
  identifier: Scalars['String']['input'];
  label: Scalars['String']['input'];
  selectionRequiredMax: Scalars['Int']['input'];
  selectionRequiredMin: Scalars['Int']['input'];
};


export type MutationCreateSectionArgs = {
  description: Scalars['String']['input'];
  displayOrder: Scalars['Int']['input'];
  identifier: Scalars['String']['input'];
  label: Scalars['String']['input'];
};


export type MutationDeleteItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMenuArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteModifierArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteModifierGroupArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSectionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationTestFieldArgs = {
  inputString: Scalars['String']['input'];
};


export type MutationUpdateItemArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  identifier?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateMenuArgs = {
  endDate?: InputMaybe<Scalars['ISO8601Date']['input']>;
  id: Scalars['ID']['input'];
  identifier?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['ISO8601Date']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateModifierArgs = {
  defaultQuantity?: InputMaybe<Scalars['Int']['input']>;
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  itemId?: InputMaybe<Scalars['Int']['input']>;
  modifierGroupId?: InputMaybe<Scalars['Int']['input']>;
  priceOverride?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationUpdateModifierGroupArgs = {
  id: Scalars['ID']['input'];
  identifier?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  selectionRequiredMax?: InputMaybe<Scalars['Int']['input']>;
  selectionRequiredMin?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateSectionArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  identifier?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  /** Endpoint to retrieve an item */
  item?: Maybe<Item>;
  /** Endpoint to retrieve all items */
  items?: Maybe<Array<Item>>;
  /** Endpoint to retrieve a menu */
  menu?: Maybe<Menu>;
  /** Endpoint to retrieve all menus */
  menus?: Maybe<Array<Menu>>;
  /** Endpoint to retrieve a modifier */
  modifier?: Maybe<Modifier>;
  /** Endpoint to retrieve a modifier group */
  modifierGroup?: Maybe<ModifierGroup>;
  /** Endpoint to retrieve all modifier groups */
  modifierGroups?: Maybe<Array<ModifierGroup>>;
  /** Endpoint to retrieve all modifiers */
  modifiers?: Maybe<Array<Modifier>>;
  /** Endpoint to retrieve a section */
  section?: Maybe<Section>;
  /** Endpoint to retrieve all sections */
  sections?: Maybe<Array<Section>>;
};


export type QueryItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMenuArgs = {
  id: Scalars['ID']['input'];
};


export type QueryModifierArgs = {
  id: Scalars['ID']['input'];
};


export type QueryModifierGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySectionArgs = {
  id: Scalars['ID']['input'];
};

export type Section = {
  __typename?: 'Section';
  createdAt: Scalars['ISO8601DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  displayOrder?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  identifier?: Maybe<Scalars['String']['output']>;
  items: Array<Item>;
  label?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type SectionItem = {
  __typename?: 'SectionItem';
  createdAt: Scalars['ISO8601DateTime']['output'];
  displayOrder?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  itemId: Scalars['Int']['output'];
  sectionId: Scalars['Int']['output'];
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type GetMenuQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMenuQuery = { __typename?: 'Query', menu?: { __typename?: 'Menu', id: string, label?: string | null, sections: Array<{ __typename?: 'Section', id: string, identifier?: string | null, label?: string | null, description?: string | null, displayOrder?: number | null, items: Array<{ __typename?: 'Item', id: string, type?: string | null, identifier?: string | null, label?: string | null, description?: string | null, price?: number | null }> }> } | null };


export const GetMenuDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMenu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menu"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"1","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"displayOrder"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"identifier"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMenuQuery, GetMenuQueryVariables>;