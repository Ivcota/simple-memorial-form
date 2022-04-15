import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Attendant = {
  __typename?: 'Attendant';
  badgeIsCheckedIn?: Maybe<Scalars['Boolean']>;
  congregation?: Maybe<Congregation>;
  department?: Maybe<Department>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  keyman?: Maybe<Department>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type AttendantCreateInput = {
  badgeIsCheckedIn?: InputMaybe<Scalars['Boolean']>;
  congregation?: InputMaybe<CongregationRelateToOneForCreateInput>;
  department?: InputMaybe<DepartmentRelateToOneForCreateInput>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  keyman?: InputMaybe<DepartmentRelateToOneForCreateInput>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type AttendantManyRelationFilter = {
  every?: InputMaybe<AttendantWhereInput>;
  none?: InputMaybe<AttendantWhereInput>;
  some?: InputMaybe<AttendantWhereInput>;
};

export type AttendantOrderByInput = {
  badgeIsCheckedIn?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  firstName?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  lastName?: InputMaybe<OrderDirection>;
  phone?: InputMaybe<OrderDirection>;
};

export type AttendantRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<AttendantWhereUniqueInput>>;
  create?: InputMaybe<Array<AttendantCreateInput>>;
};

export type AttendantRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<AttendantWhereUniqueInput>>;
  create?: InputMaybe<Array<AttendantCreateInput>>;
  disconnect?: InputMaybe<Array<AttendantWhereUniqueInput>>;
  set?: InputMaybe<Array<AttendantWhereUniqueInput>>;
};

export type AttendantRelateToOneForCreateInput = {
  connect?: InputMaybe<AttendantWhereUniqueInput>;
  create?: InputMaybe<AttendantCreateInput>;
};

export type AttendantRelateToOneForUpdateInput = {
  connect?: InputMaybe<AttendantWhereUniqueInput>;
  create?: InputMaybe<AttendantCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type AttendantUpdateArgs = {
  data: AttendantUpdateInput;
  where: AttendantWhereUniqueInput;
};

export type AttendantUpdateInput = {
  badgeIsCheckedIn?: InputMaybe<Scalars['Boolean']>;
  congregation?: InputMaybe<CongregationRelateToOneForUpdateInput>;
  department?: InputMaybe<DepartmentRelateToOneForUpdateInput>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  keyman?: InputMaybe<DepartmentRelateToOneForUpdateInput>;
  lastName?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type AttendantWhereInput = {
  AND?: InputMaybe<Array<AttendantWhereInput>>;
  NOT?: InputMaybe<Array<AttendantWhereInput>>;
  OR?: InputMaybe<Array<AttendantWhereInput>>;
  badgeIsCheckedIn?: InputMaybe<BooleanFilter>;
  congregation?: InputMaybe<CongregationWhereInput>;
  department?: InputMaybe<DepartmentWhereInput>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  keyman?: InputMaybe<DepartmentWhereInput>;
  lastName?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
};

export type AttendantWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type AuthenticatedItem = User;

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilter>;
};

export type Congregation = {
  __typename?: 'Congregation';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  publishers?: Maybe<Array<Attendant>>;
  publishersCount?: Maybe<Scalars['Int']>;
};


export type CongregationPublishersArgs = {
  orderBy?: Array<AttendantOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: AttendantWhereInput;
};


export type CongregationPublishersCountArgs = {
  where?: AttendantWhereInput;
};

export type CongregationCreateInput = {
  name?: InputMaybe<Scalars['String']>;
  publishers?: InputMaybe<AttendantRelateToManyForCreateInput>;
};

export type CongregationOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type CongregationRelateToOneForCreateInput = {
  connect?: InputMaybe<CongregationWhereUniqueInput>;
  create?: InputMaybe<CongregationCreateInput>;
};

export type CongregationRelateToOneForUpdateInput = {
  connect?: InputMaybe<CongregationWhereUniqueInput>;
  create?: InputMaybe<CongregationCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type CongregationUpdateArgs = {
  data: CongregationUpdateInput;
  where: CongregationWhereUniqueInput;
};

export type CongregationUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  publishers?: InputMaybe<AttendantRelateToManyForUpdateInput>;
};

export type CongregationWhereInput = {
  AND?: InputMaybe<Array<CongregationWhereInput>>;
  NOT?: InputMaybe<Array<CongregationWhereInput>>;
  OR?: InputMaybe<Array<CongregationWhereInput>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  publishers?: InputMaybe<AttendantManyRelationFilter>;
};

export type CongregationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Department = {
  __typename?: 'Department';
  attendants?: Maybe<Array<Attendant>>;
  attendantsCount?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  keyman?: Maybe<Attendant>;
  name?: Maybe<Scalars['String']>;
};


export type DepartmentAttendantsArgs = {
  orderBy?: Array<AttendantOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: AttendantWhereInput;
};


export type DepartmentAttendantsCountArgs = {
  where?: AttendantWhereInput;
};

export type DepartmentCreateInput = {
  attendants?: InputMaybe<AttendantRelateToManyForCreateInput>;
  keyman?: InputMaybe<AttendantRelateToOneForCreateInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type DepartmentOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type DepartmentRelateToOneForCreateInput = {
  connect?: InputMaybe<DepartmentWhereUniqueInput>;
  create?: InputMaybe<DepartmentCreateInput>;
};

export type DepartmentRelateToOneForUpdateInput = {
  connect?: InputMaybe<DepartmentWhereUniqueInput>;
  create?: InputMaybe<DepartmentCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type DepartmentUpdateArgs = {
  data: DepartmentUpdateInput;
  where: DepartmentWhereUniqueInput;
};

export type DepartmentUpdateInput = {
  attendants?: InputMaybe<AttendantRelateToManyForUpdateInput>;
  keyman?: InputMaybe<AttendantRelateToOneForUpdateInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type DepartmentWhereInput = {
  AND?: InputMaybe<Array<DepartmentWhereInput>>;
  NOT?: InputMaybe<Array<DepartmentWhereInput>>;
  OR?: InputMaybe<Array<DepartmentWhereInput>>;
  attendants?: InputMaybe<AttendantManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  keyman?: InputMaybe<AttendantWhereInput>;
  name?: InputMaybe<StringFilter>;
};

export type DepartmentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  enableSessionItem: Scalars['Boolean'];
  enableSignout: Scalars['Boolean'];
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']>;
  fieldMeta?: Maybe<Scalars['JSON']>;
  isFilterable: Scalars['Boolean'];
  isOrderable: Scalars['Boolean'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  initialColumns: Array<Scalars['String']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
  itemQueryName: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
  labelField: Scalars['String'];
  listQueryName: Scalars['String'];
  pageSize: Scalars['Int'];
  path: Scalars['String'];
  plural: Scalars['String'];
  singular: Scalars['String'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createAttendant?: Maybe<Attendant>;
  createAttendants?: Maybe<Array<Maybe<Attendant>>>;
  createCongregation?: Maybe<Congregation>;
  createCongregations?: Maybe<Array<Maybe<Congregation>>>;
  createDepartment?: Maybe<Department>;
  createDepartments?: Maybe<Array<Maybe<Department>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteAttendant?: Maybe<Attendant>;
  deleteAttendants?: Maybe<Array<Maybe<Attendant>>>;
  deleteCongregation?: Maybe<Congregation>;
  deleteCongregations?: Maybe<Array<Maybe<Congregation>>>;
  deleteDepartment?: Maybe<Department>;
  deleteDepartments?: Maybe<Array<Maybe<Department>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean'];
  updateAttendant?: Maybe<Attendant>;
  updateAttendants?: Maybe<Array<Maybe<Attendant>>>;
  updateCongregation?: Maybe<Congregation>;
  updateCongregations?: Maybe<Array<Maybe<Congregation>>>;
  updateDepartment?: Maybe<Department>;
  updateDepartments?: Maybe<Array<Maybe<Department>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateAttendantArgs = {
  data: AttendantCreateInput;
};


export type MutationCreateAttendantsArgs = {
  data: Array<AttendantCreateInput>;
};


export type MutationCreateCongregationArgs = {
  data: CongregationCreateInput;
};


export type MutationCreateCongregationsArgs = {
  data: Array<CongregationCreateInput>;
};


export type MutationCreateDepartmentArgs = {
  data: DepartmentCreateInput;
};


export type MutationCreateDepartmentsArgs = {
  data: Array<DepartmentCreateInput>;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteAttendantArgs = {
  where: AttendantWhereUniqueInput;
};


export type MutationDeleteAttendantsArgs = {
  where: Array<AttendantWhereUniqueInput>;
};


export type MutationDeleteCongregationArgs = {
  where: CongregationWhereUniqueInput;
};


export type MutationDeleteCongregationsArgs = {
  where: Array<CongregationWhereUniqueInput>;
};


export type MutationDeleteDepartmentArgs = {
  where: DepartmentWhereUniqueInput;
};


export type MutationDeleteDepartmentsArgs = {
  where: Array<DepartmentWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationUpdateAttendantArgs = {
  data: AttendantUpdateInput;
  where: AttendantWhereUniqueInput;
};


export type MutationUpdateAttendantsArgs = {
  data: Array<AttendantUpdateArgs>;
};


export type MutationUpdateCongregationArgs = {
  data: CongregationUpdateInput;
  where: CongregationWhereUniqueInput;
};


export type MutationUpdateCongregationsArgs = {
  data: Array<CongregationUpdateArgs>;
};


export type MutationUpdateDepartmentArgs = {
  data: DepartmentUpdateInput;
  where: DepartmentWhereUniqueInput;
};


export type MutationUpdateDepartmentsArgs = {
  data: Array<DepartmentUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  attendant?: Maybe<Attendant>;
  attendants?: Maybe<Array<Attendant>>;
  attendantsCount?: Maybe<Scalars['Int']>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  congregation?: Maybe<Congregation>;
  congregations?: Maybe<Array<Congregation>>;
  congregationsCount?: Maybe<Scalars['Int']>;
  department?: Maybe<Department>;
  departments?: Maybe<Array<Department>>;
  departmentsCount?: Maybe<Scalars['Int']>;
  keystone: KeystoneMeta;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']>;
};


export type QueryAttendantArgs = {
  where: AttendantWhereUniqueInput;
};


export type QueryAttendantsArgs = {
  orderBy?: Array<AttendantOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: AttendantWhereInput;
};


export type QueryAttendantsCountArgs = {
  where?: AttendantWhereInput;
};


export type QueryCongregationArgs = {
  where: CongregationWhereUniqueInput;
};


export type QueryCongregationsArgs = {
  orderBy?: Array<CongregationOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CongregationWhereInput;
};


export type QueryCongregationsCountArgs = {
  where?: CongregationWhereInput;
};


export type QueryDepartmentArgs = {
  where: DepartmentWhereUniqueInput;
};


export type QueryDepartmentsArgs = {
  orderBy?: Array<DepartmentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: DepartmentWhereInput;
};


export type QueryDepartmentsCountArgs = {
  where?: DepartmentWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  password?: Maybe<PasswordState>;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String'];
};

export type UserCreateInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UserOrderByInput = {
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type GetAttendantsQueryVariables = Exact<{
  where: AttendantWhereInput;
}>;


export type GetAttendantsQuery = { __typename?: 'Query', attendants?: Array<{ __typename?: 'Attendant', id: string, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, badgeIsCheckedIn?: boolean | null, department?: { __typename?: 'Department', name?: string | null, keyman?: { __typename?: 'Attendant', id: string, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null } | null } | null }> | null };

export type UpdateBadgeMutationVariables = Exact<{
  where: AttendantWhereUniqueInput;
  data: AttendantUpdateInput;
}>;


export type UpdateBadgeMutation = { __typename?: 'Mutation', updateAttendant?: { __typename?: 'Attendant', id: string, firstName?: string | null, lastName?: string | null, email?: string | null, phone?: string | null, badgeIsCheckedIn?: boolean | null } | null };


export const GetAttendantsDocument = gql`
    query GetAttendants($where: AttendantWhereInput!) {
  attendants(where: $where) {
    id
    firstName
    lastName
    email
    phone
    department {
      name
      keyman {
        id
        firstName
        lastName
        email
        phone
      }
    }
    badgeIsCheckedIn
  }
}
    `;

export function useGetAttendantsQuery(options: Omit<Urql.UseQueryArgs<GetAttendantsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetAttendantsQuery>({ query: GetAttendantsDocument, ...options });
};
export const UpdateBadgeDocument = gql`
    mutation UpdateBadge($where: AttendantWhereUniqueInput!, $data: AttendantUpdateInput!) {
  updateAttendant(where: $where, data: $data) {
    id
    firstName
    lastName
    email
    phone
    badgeIsCheckedIn
  }
}
    `;

export function useUpdateBadgeMutation() {
  return Urql.useMutation<UpdateBadgeMutation, UpdateBadgeMutationVariables>(UpdateBadgeDocument);
};