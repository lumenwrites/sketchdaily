/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import { Context } from "./../../apollo/context"
import { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  FileInput: { // input type
    id?: string | null; // String
    name?: string | null; // String
    url?: string | null; // String
  }
  PostCreateInput: { // input type
    content?: string | null; // String
    title: string; // String!
  }
  UserCreateInput: { // input type
    email: string; // String!
    name?: string | null; // String
    posts?: NexusGenInputs['PostCreateInput'][] | null; // [PostCreateInput!]
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  AuthPayload: { // root type
    token?: string | null; // String
    user?: NexusGenRootTypes['User'] | null; // User
  }
  File: { // root type
    id: string; // String!
    name: string; // String!
    url: string; // String!
  }
  Mutation: {};
  Post: { // root type
    body?: string | null; // String
    id: string; // String!
    published?: boolean | null; // Boolean
    slug: string; // String!
    title: string; // String!
  }
  PresignedUrl: { // root type
    filepath?: string | null; // String
    url?: string | null; // String
  }
  Query: {};
  User: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    id: string; // String!
    username: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
  }
  File: { // field return type
    id: string; // String!
    name: string; // String!
    url: string; // String!
  }
  Mutation: { // field return type
    createPost: NexusGenRootTypes['Post'] | null; // Post
    deletePost: NexusGenRootTypes['Post'] | null; // Post
    join: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
    login: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
    updatePost: NexusGenRootTypes['Post'] | null; // Post
  }
  Post: { // field return type
    author: NexusGenRootTypes['User'] | null; // User
    body: string | null; // String
    id: string; // String!
    images: Array<NexusGenRootTypes['File'] | null> | null; // [File]
    published: boolean | null; // Boolean
    slug: string; // String!
    title: string; // String!
  }
  PresignedUrl: { // field return type
    filepath: string | null; // String
    url: string | null; // String
  }
  Query: { // field return type
    getPresignedUrl: NexusGenRootTypes['PresignedUrl'] | null; // PresignedUrl
    me: NexusGenRootTypes['User'] | null; // User
    post: NexusGenRootTypes['Post'] | null; // Post
    posts: NexusGenRootTypes['Post'][]; // [Post!]!
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  User: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    id: string; // String!
    posts: NexusGenRootTypes['Post'][]; // [Post!]!
    username: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayload: { // field return type name
    token: 'String'
    user: 'User'
  }
  File: { // field return type name
    id: 'String'
    name: 'String'
    url: 'String'
  }
  Mutation: { // field return type name
    createPost: 'Post'
    deletePost: 'Post'
    join: 'AuthPayload'
    login: 'AuthPayload'
    updatePost: 'Post'
  }
  Post: { // field return type name
    author: 'User'
    body: 'String'
    id: 'String'
    images: 'File'
    published: 'Boolean'
    slug: 'String'
    title: 'String'
  }
  PresignedUrl: { // field return type name
    filepath: 'String'
    url: 'String'
  }
  Query: { // field return type name
    getPresignedUrl: 'PresignedUrl'
    me: 'User'
    post: 'Post'
    posts: 'Post'
    user: 'User'
    users: 'User'
  }
  User: { // field return type name
    createdAt: 'DateTime'
    email: 'String'
    id: 'String'
    posts: 'Post'
    username: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createPost: { // args
      body?: string | null; // String
      images?: Array<NexusGenInputs['FileInput'] | null> | null; // [FileInput]
      title: string; // String!
    }
    deletePost: { // args
      slug: string; // String!
    }
    join: { // args
      email: string; // String!
      password: string; // String!
      username: string; // String!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    updatePost: { // args
      body?: string | null; // String
      images?: Array<NexusGenInputs['FileInput'] | null> | null; // [FileInput]
      published?: boolean | null; // Boolean
      slug: string; // String!
      title: string; // String!
    }
  }
  Query: {
    getPresignedUrl: { // args
      extension?: string | null; // String
      filename?: string | null; // String
      filetype?: string | null; // String
    }
    post: { // args
      slug?: string | null; // String
    }
    posts: { // args
      published?: boolean | null; // Boolean
      username?: string | null; // String
    }
    user: { // args
      username?: string | null; // String
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}