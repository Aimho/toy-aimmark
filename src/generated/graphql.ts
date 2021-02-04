import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** columns and relationships of "item" */
export type Item = {
  __typename?: 'item';
  base_url: Scalars['String'];
  created_at: Scalars['date'];
  id: Scalars['uuid'];
  is_private: Scalars['Boolean'];
  name: Scalars['String'];
  url: Scalars['String'];
  user_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "item" */
export type Item_Aggregate = {
  __typename?: 'item_aggregate';
  aggregate?: Maybe<Item_Aggregate_Fields>;
  nodes: Array<Item>;
};

/** aggregate fields of "item" */
export type Item_Aggregate_Fields = {
  __typename?: 'item_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Item_Max_Fields>;
  min?: Maybe<Item_Min_Fields>;
};


/** aggregate fields of "item" */
export type Item_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Item_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "item" */
export type Item_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Item_Max_Order_By>;
  min?: Maybe<Item_Min_Order_By>;
};

/** input type for inserting array relation for remote table "item" */
export type Item_Arr_Rel_Insert_Input = {
  data: Array<Item_Insert_Input>;
  on_conflict?: Maybe<Item_On_Conflict>;
};

/** Boolean expression to filter rows from the table "item". All fields are combined with a logical 'AND'. */
export type Item_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Item_Bool_Exp>>>;
  _not?: Maybe<Item_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Item_Bool_Exp>>>;
  base_url?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Date_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_private?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  url?: Maybe<String_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "item" */
export enum Item_Constraint {
  /** unique or primary key constraint */
  ItemPkey = 'item_pkey'
}

/** input type for inserting data into table "item" */
export type Item_Insert_Input = {
  base_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  is_private?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Item_Max_Fields = {
  __typename?: 'item_max_fields';
  base_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "item" */
export type Item_Max_Order_By = {
  base_url?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Item_Min_Fields = {
  __typename?: 'item_min_fields';
  base_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "item" */
export type Item_Min_Order_By = {
  base_url?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "item" */
export type Item_Mutation_Response = {
  __typename?: 'item_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Item>;
};

/** input type for inserting object relation for remote table "item" */
export type Item_Obj_Rel_Insert_Input = {
  data: Item_Insert_Input;
  on_conflict?: Maybe<Item_On_Conflict>;
};

/** on conflict condition type for table "item" */
export type Item_On_Conflict = {
  constraint: Item_Constraint;
  update_columns: Array<Item_Update_Column>;
  where?: Maybe<Item_Bool_Exp>;
};

/** ordering options when selecting data from "item" */
export type Item_Order_By = {
  base_url?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_private?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "item" */
export type Item_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "item" */
export enum Item_Select_Column {
  /** column name */
  BaseUrl = 'base_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsPrivate = 'is_private',
  /** column name */
  Name = 'name',
  /** column name */
  Url = 'url',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "item" */
export type Item_Set_Input = {
  base_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  is_private?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "item" */
export enum Item_Update_Column {
  /** column name */
  BaseUrl = 'base_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsPrivate = 'is_private',
  /** column name */
  Name = 'name',
  /** column name */
  Url = 'url',
  /** column name */
  UserId = 'user_id'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "item" */
  delete_item?: Maybe<Item_Mutation_Response>;
  /** delete single row from the table: "item" */
  delete_item_by_pk?: Maybe<Item>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "item" */
  insert_item?: Maybe<Item_Mutation_Response>;
  /** insert a single row into the table: "item" */
  insert_item_one?: Maybe<Item>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "item" */
  update_item?: Maybe<Item_Mutation_Response>;
  /** update single row of the table: "item" */
  update_item_by_pk?: Maybe<Item>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootDelete_ItemArgs = {
  where: Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Item_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  uid: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_ItemArgs = {
  objects: Array<Item_Insert_Input>;
  on_conflict?: Maybe<Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Item_OneArgs = {
  object: Item_Insert_Input;
  on_conflict?: Maybe<Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ItemArgs = {
  _set?: Maybe<Item_Set_Input>;
  where: Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Item_By_PkArgs = {
  _set?: Maybe<Item_Set_Input>;
  pk_columns: Item_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "item" */
  item: Array<Item>;
  /** fetch aggregated fields from the table: "item" */
  item_aggregate: Item_Aggregate;
  /** fetch data from the table: "item" using primary key columns */
  item_by_pk?: Maybe<Item>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


/** query root */
export type Query_RootItemArgs = {
  distinct_on?: Maybe<Array<Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Item_Order_By>>;
  where?: Maybe<Item_Bool_Exp>;
};


/** query root */
export type Query_RootItem_AggregateArgs = {
  distinct_on?: Maybe<Array<Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Item_Order_By>>;
  where?: Maybe<Item_Bool_Exp>;
};


/** query root */
export type Query_RootItem_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** query root */
export type Query_RootUser_By_PkArgs = {
  uid: Scalars['String'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "item" */
  item: Array<Item>;
  /** fetch aggregated fields from the table: "item" */
  item_aggregate: Item_Aggregate;
  /** fetch data from the table: "item" using primary key columns */
  item_by_pk?: Maybe<Item>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


/** subscription root */
export type Subscription_RootItemArgs = {
  distinct_on?: Maybe<Array<Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Item_Order_By>>;
  where?: Maybe<Item_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootItem_AggregateArgs = {
  distinct_on?: Maybe<Array<Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Item_Order_By>>;
  where?: Maybe<Item_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootItem_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  uid: Scalars['String'];
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  email: Scalars['String'];
  id: Scalars['String'];
  /** An array relationship */
  items: Array<Item>;
  /** An aggregated array relationship */
  items_aggregate: Item_Aggregate;
  search_engine?: Maybe<Scalars['String']>;
  uid: Scalars['String'];
};


/** columns and relationships of "user" */
export type UserItemsArgs = {
  distinct_on?: Maybe<Array<Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Item_Order_By>>;
  where?: Maybe<Item_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserItems_AggregateArgs = {
  distinct_on?: Maybe<Array<Item_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Item_Order_By>>;
  where?: Maybe<Item_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  items?: Maybe<Item_Bool_Exp>;
  search_engine?: Maybe<String_Comparison_Exp>;
  uid?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint */
  UserIdKey = 'user_id_key',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey',
  /** unique or primary key constraint */
  UserUidKey = 'user_uid_key'
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  items?: Maybe<Item_Arr_Rel_Insert_Input>;
  search_engine?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  search_engine?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  search_engine?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  search_engine?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  search_engine?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  items_aggregate?: Maybe<Item_Aggregate_Order_By>;
  search_engine?: Maybe<Order_By>;
  uid?: Maybe<Order_By>;
};

/** primary key columns input for table: "user" */
export type User_Pk_Columns_Input = {
  uid: Scalars['String'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  SearchEngine = 'search_engine',
  /** column name */
  Uid = 'uid'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  search_engine?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  SearchEngine = 'search_engine',
  /** column name */
  Uid = 'uid'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type GetUserItemQueryVariables = Exact<{
  user_id: Scalars['String'];
  is_private?: Maybe<Scalars['Boolean']>;
}>;


export type GetUserItemQuery = { __typename?: 'query_root', item: Array<{ __typename?: 'item', id: any, url: string, name: string, base_url: string, is_private: boolean }> };

export type GetAllItemQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllItemQuery = { __typename?: 'query_root', item: Array<{ __typename?: 'item', base_url: string, id: any, name: string, url: string }> };

export type InsertItemMutationVariables = Exact<{
  url: Scalars['String'];
  base_url: Scalars['String'];
  name: Scalars['String'];
  user_id: Scalars['String'];
  is_private: Scalars['Boolean'];
}>;


export type InsertItemMutation = { __typename?: 'mutation_root', insert_item_one?: Maybe<{ __typename?: 'item', id: any }> };

export type DeleteItemMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteItemMutation = { __typename?: 'mutation_root', delete_item_by_pk?: Maybe<{ __typename?: 'item', id: any }> };

export type InsertUserMutationVariables = Exact<{
  id: Scalars['String'];
  uid: Scalars['String'];
  email: Scalars['String'];
}>;


export type InsertUserMutation = { __typename?: 'mutation_root', insert_user_one?: Maybe<{ __typename?: 'user', id: string, uid: string, email: string }> };

export type GetUserQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'query_root', user_by_pk?: Maybe<{ __typename?: 'user', id: string, uid: string, email: string, search_engine?: Maybe<string> }> };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['String'];
  search_engine: Scalars['String'];
}>;


export type UpdateUserMutation = { __typename?: 'mutation_root', update_user?: Maybe<{ __typename?: 'user_mutation_response', returning: Array<{ __typename?: 'user', search_engine?: Maybe<string> }> }> };


export const GetUserItemDocument = gql`
    query getUserItem($user_id: String!, $is_private: Boolean) {
  item(
    order_by: {name: asc}
    where: {user_id: {_eq: $user_id}, is_private: {_eq: $is_private}}
  ) {
    id
    url
    name
    base_url
    is_private
  }
}
    `;

/**
 * __useGetUserItemQuery__
 *
 * To run a query within a React component, call `useGetUserItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserItemQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      is_private: // value for 'is_private'
 *   },
 * });
 */
export function useGetUserItemQuery(baseOptions: Apollo.QueryHookOptions<GetUserItemQuery, GetUserItemQueryVariables>) {
        return Apollo.useQuery<GetUserItemQuery, GetUserItemQueryVariables>(GetUserItemDocument, baseOptions);
      }
export function useGetUserItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserItemQuery, GetUserItemQueryVariables>) {
          return Apollo.useLazyQuery<GetUserItemQuery, GetUserItemQueryVariables>(GetUserItemDocument, baseOptions);
        }
export type GetUserItemQueryHookResult = ReturnType<typeof useGetUserItemQuery>;
export type GetUserItemLazyQueryHookResult = ReturnType<typeof useGetUserItemLazyQuery>;
export type GetUserItemQueryResult = Apollo.QueryResult<GetUserItemQuery, GetUserItemQueryVariables>;
export const GetAllItemDocument = gql`
    query getAllItem {
  item(limit: 20, order_by: {created_at: desc}, where: {is_private: {_eq: false}}) {
    base_url
    id
    name
    url
  }
}
    `;

/**
 * __useGetAllItemQuery__
 *
 * To run a query within a React component, call `useGetAllItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllItemQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllItemQuery(baseOptions?: Apollo.QueryHookOptions<GetAllItemQuery, GetAllItemQueryVariables>) {
        return Apollo.useQuery<GetAllItemQuery, GetAllItemQueryVariables>(GetAllItemDocument, baseOptions);
      }
export function useGetAllItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllItemQuery, GetAllItemQueryVariables>) {
          return Apollo.useLazyQuery<GetAllItemQuery, GetAllItemQueryVariables>(GetAllItemDocument, baseOptions);
        }
export type GetAllItemQueryHookResult = ReturnType<typeof useGetAllItemQuery>;
export type GetAllItemLazyQueryHookResult = ReturnType<typeof useGetAllItemLazyQuery>;
export type GetAllItemQueryResult = Apollo.QueryResult<GetAllItemQuery, GetAllItemQueryVariables>;
export const InsertItemDocument = gql`
    mutation insertItem($url: String!, $base_url: String!, $name: String!, $user_id: String!, $is_private: Boolean!) {
  insert_item_one(
    object: {url: $url, base_url: $base_url, name: $name, user_id: $user_id, is_private: $is_private}
  ) {
    id
  }
}
    `;
export type InsertItemMutationFn = Apollo.MutationFunction<InsertItemMutation, InsertItemMutationVariables>;

/**
 * __useInsertItemMutation__
 *
 * To run a mutation, you first call `useInsertItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertItemMutation, { data, loading, error }] = useInsertItemMutation({
 *   variables: {
 *      url: // value for 'url'
 *      base_url: // value for 'base_url'
 *      name: // value for 'name'
 *      user_id: // value for 'user_id'
 *      is_private: // value for 'is_private'
 *   },
 * });
 */
export function useInsertItemMutation(baseOptions?: Apollo.MutationHookOptions<InsertItemMutation, InsertItemMutationVariables>) {
        return Apollo.useMutation<InsertItemMutation, InsertItemMutationVariables>(InsertItemDocument, baseOptions);
      }
export type InsertItemMutationHookResult = ReturnType<typeof useInsertItemMutation>;
export type InsertItemMutationResult = Apollo.MutationResult<InsertItemMutation>;
export type InsertItemMutationOptions = Apollo.BaseMutationOptions<InsertItemMutation, InsertItemMutationVariables>;
export const DeleteItemDocument = gql`
    mutation deleteItem($id: uuid!) {
  delete_item_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteItemMutationFn = Apollo.MutationFunction<DeleteItemMutation, DeleteItemMutationVariables>;

/**
 * __useDeleteItemMutation__
 *
 * To run a mutation, you first call `useDeleteItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteItemMutation, { data, loading, error }] = useDeleteItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteItemMutation(baseOptions?: Apollo.MutationHookOptions<DeleteItemMutation, DeleteItemMutationVariables>) {
        return Apollo.useMutation<DeleteItemMutation, DeleteItemMutationVariables>(DeleteItemDocument, baseOptions);
      }
export type DeleteItemMutationHookResult = ReturnType<typeof useDeleteItemMutation>;
export type DeleteItemMutationResult = Apollo.MutationResult<DeleteItemMutation>;
export type DeleteItemMutationOptions = Apollo.BaseMutationOptions<DeleteItemMutation, DeleteItemMutationVariables>;
export const InsertUserDocument = gql`
    mutation insertUser($id: String!, $uid: String!, $email: String!) {
  insert_user_one(object: {id: $id, uid: $uid, email: $email}) {
    id
    uid
    email
  }
}
    `;
export type InsertUserMutationFn = Apollo.MutationFunction<InsertUserMutation, InsertUserMutationVariables>;

/**
 * __useInsertUserMutation__
 *
 * To run a mutation, you first call `useInsertUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserMutation, { data, loading, error }] = useInsertUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      uid: // value for 'uid'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useInsertUserMutation(baseOptions?: Apollo.MutationHookOptions<InsertUserMutation, InsertUserMutationVariables>) {
        return Apollo.useMutation<InsertUserMutation, InsertUserMutationVariables>(InsertUserDocument, baseOptions);
      }
export type InsertUserMutationHookResult = ReturnType<typeof useInsertUserMutation>;
export type InsertUserMutationResult = Apollo.MutationResult<InsertUserMutation>;
export type InsertUserMutationOptions = Apollo.BaseMutationOptions<InsertUserMutation, InsertUserMutationVariables>;
export const GetUserDocument = gql`
    query getUser($uid: String!) {
  user_by_pk(uid: $uid) {
    id
    uid
    email
    search_engine
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($id: String!, $search_engine: String!) {
  update_user(where: {id: {_eq: $id}}, _set: {search_engine: $search_engine}) {
    returning {
      search_engine
    }
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      search_engine: // value for 'search_engine'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;