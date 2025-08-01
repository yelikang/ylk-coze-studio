/*
 * Copyright 2025 coze-dev Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

import * as base from './base';
import * as flow_devops_evaluation_entity from './flow_devops_evaluation_entity';
import * as flow_devops_evaluation_callback_common from './flow_devops_evaluation_callback_common';

export type Int64 = string | number;

export enum DatasetStatus {
  Unknown = 0,
  Normal = 1,
  Locked = 2,
}

export enum DatasetType {
  Unknown = 0,
  Chat = 1,
  KV = 2,
  FunctionCall = 3,
  MultiModalUnderstanding = 4,
}

export enum ProfessionalKnowledgeType {
  /** 官方 */
  Official = 1,
  /** 自定义 */
  Customize = 2,
}

/** # service CreateDataset */
export enum PublishOption {
  /** 评测数据集展示时使用(创建与查询,接口默认值） */
  Publish = 1,
  /** 评测任务创建数据集，不对外展示，只用于评测用例与任务使用 */
  NotPublish = 2,
  /** SFT 数据集展示，创建时需要指定该模式，查询时需要指定该模式 */
  SFTPublish = 3,
  /** 数据集展示，创建时需要指定该模式，查询时需要指定该模式 */
  DataProcessPublish = 4,
  /** 评测业务下的结果集场景 */
  EvalResultPublish = 5,
}

export enum ReplyType {
  /** 最终结果 */
  ReplyTypeFinalAnswer = 0,
  /** 工具调用 */
  ReplyTypeToolCall = 1,
}

export enum ResultState {
  Generated = 1,
  Selected = 2,
  Abandoned = 3,
}

/** # dataset info */
export enum RowGroupSource {
  Unknown = 0,
  ManualAdd = 1,
  RuntimeAutoRecord = 2,
}

export enum SecurityLevel {
  Unknown = 0,
  L4 = 4,
}

export enum StreamState {
  /** 非流式 */
  StreamStateNone = 1,
  /** 流式传输开始（首包） */
  StreamStateBegin = 2,
  /** 流式传输中 */
  StreamStateStreaming = 3,
  /** 流失传输结束（尾包） */
  StreamStateEnd = 4,
}

export enum TaskState {
  /** task 状态流转
初始化状态 */
  GenerateTaskInitState = 1,
  /** 运行状态 */
  GenerateTaskRunningState = 2,
  /** 任务完成状态 */
  GenerateTaskGenFinishedState = 3,
  /** 生成的任务全部做了标注 */
  GenerateTaskSelectCompletedState = 4,
  /** 终止状态 */
  GenerateTaskStoppedState = 5,
  /** 失败状态 */
  GenerateTaskFailedState = 6,
}

/** # service UpdateDataset */
export enum UpdateDatasetField {
  Name = 3,
  Desc = 4,
  Tag = 5,
}

export interface BatchDeleteDatasetReq {
  'FlowDevops-Agw-UserId'?: string;
  space_id: Int64;
  dataset_ids?: Array<Int64>;
  'FlowDevops-Agw-AppId'?: number;
  Base?: base.Base;
}

export interface BatchDeleteDatasetResp {
  BaseResp?: base.BaseResp;
}

export interface BatchDeleteRowGroupsReq {
  dataset_id: Int64;
  'FlowDevops-Agw-UserId'?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  row_group_ids: Array<Int64>;
  Base?: base.Base;
}

export interface BatchDeleteRowGroupsResp {
  BaseResp?: base.BaseResp;
}

export interface BatchGetDatasetReq {
  'FlowDevops-Agw-UserId'?: string;
  space_id: Int64;
  dataset_ids: Array<Int64>;
  'FlowDevops-Agw-AppId'?: number;
  Base?: base.Base;
}

export interface BatchGetDatasetResp {
  dataset_infos?: Array<DatasetInfo>;
  BaseResp?: base.BaseResp;
}

export interface BatchGetRowGroupsReq {
  dataset_id: Int64;
  'FlowDevops-Agw-UserId'?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  row_group_ids: Array<Int64>;
  Base?: base.Base;
}

export interface BatchGetRowGroupsResp {
  row_groups?: Record<Int64, RowGroup>;
  column_schema?: Array<ColumnInfo>;
  BaseResp?: base.BaseResp;
}

export interface BatchUpdateRowGroupsReq {
  dataset_id: Int64;
  'FlowDevops-Agw-UserId'?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  row_groups?: Array<RowGroup>;
  Base?: base.Base;
}

export interface BatchUpdateRowGroupsResp {
  row_group_ids?: Array<Int64>;
  BaseResp?: base.BaseResp;
}

export interface CloneDatasetReq {
  dataset_id: Int64;
  'FlowDevops-Agw-UserId'?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  /** 复制到目标空间，为空时，默认复制到 SpaceID 空间 */
  to_space_id?: Int64;
  clone_name?: string;
  /** 复制部分数据到新评测集 */
  row_group_ids?: Array<Int64>;
  publish_option?: PublishOption;
  Base?: base.Base;
}

export interface CloneDatasetResp {
  dataset_info: DatasetInfo;
  BaseResp?: base.BaseResp;
}

/** common
############# DATASET ##############
 dataset
# Column */
export interface ColumnInfo {
  column_id?: Int64;
  /** len <= 256 */
  name: string;
  /** 字段描述 */
  describe?: string;
  /** 是否为评测系统内置定义列 */
  buildin?: boolean;
}

export interface CreateDatasetReq {
  'FlowDevops-Agw-UserId'?: string;
  name?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  desc?: string;
  column_schema?: Array<ColumnInfo>;
  row_groups?: Array<RowGroup>;
  /** 是否发布到 dataset 列表, 默认不发部 */
  publish_option?: PublishOption;
  /** 是否打上tag, 默认不打上 */
  tag_list?: Array<flow_devops_evaluation_entity.TagInfo>;
  dataset_type?: DatasetType;
  tag_ids?: Array<Int64>;
  /** 密级 */
  security_level?: SecurityLevel;
  Base?: base.Base;
}

export interface CreateDatasetResp {
  dataset_id?: Int64;
  BaseResp?: base.BaseResp;
}

export interface DatasetInfo {
  dataset_id?: Int64;
  name: string;
  space_id: Int64;
  creator_id: Int64;
  desc: string;
  column_schema: Array<ColumnInfo>;
  dataset_status?: DatasetStatus;
  dataset_type?: DatasetType;
  tag?: Array<flow_devops_evaluation_entity.Tag>;
  create_time?: Int64;
  update_time?: Int64;
  /** 密级 */
  security_level?: SecurityLevel;
  /** 过期时间 */
  expire_time?: Int64;
  publish_option?: PublishOption;
  /** 数据集容量, 默认为 5k */
  row_group_capacity?: Int64;
  /** Cell 中文本内容的 bytes 数限制, 默认为 3,2000 */
  max_cell_content_length?: Int64;
  /** 是否允许导出 */
  not_allow_export?: boolean;
}

export interface DatasetRowGroupTrimRightReq {
  dataset_id: Int64;
  'FlowDevops-Agw-UserId'?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  row_group_id: Int64;
  Base?: base.Base;
}

export interface DatasetRowGroupTrimRightResp {
  BaseResp?: base.BaseResp;
}

export interface DeleteColumnReq {
  dataset_id: Int64;
  'FlowDevops-Agw-UserId'?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  column_id: Int64;
  Base?: base.Base;
}

export interface DeleteColumnResp {
  column_schema?: Array<ColumnInfo>;
  BaseResp?: base.BaseResp;
}

export interface DeleteDatasetReq {
  dataset_id: Int64;
  'FlowDevops-Agw-UserId'?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  Base?: base.Base;
}

export interface DeleteDatasetResp {
  BaseResp?: base.BaseResp;
}

/** # service GenerateRowGroups
 生成需要的列与列的语义要求 */
export interface GenerateColumnInfo {
  column_info?: ColumnInfo;
  semantic_require?: string;
  allow_generate?: boolean;
}

export interface GenerateRowGroup {
  row_group: RowGroup;
  authenticity_score: Int64;
  satisfaction_score: Int64;
}

export interface GetColumnSchemaReq {
  dataset_id: Int64;
  'FlowDevops-Agw-UserId'?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  Base?: base.Base;
}

export interface GetColumnSchemaResp {
  column_schema?: Array<ColumnInfo>;
  BaseResp?: base.BaseResp;
}

export interface GetDatasetReq {
  dataset_id: Int64;
  'FlowDevops-Agw-UserId'?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  Base?: base.Base;
}

export interface GetDatasetResp {
  dataset_info?: DatasetInfo;
  BaseResp?: base.BaseResp;
}

export interface GetDatasetTagTreeReq {
  dataset_id: Int64;
  'FlowDevops-Agw-UserId'?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  Base?: base.Base;
}

export interface GetDatasetTagTreeResp {
  node?: flow_devops_evaluation_entity.Node;
  BaseResp?: base.BaseResp;
}

export interface GetGeneratedDatasetRowGroupsReq {
  dataset_id: Int64;
  'FlowDevops-Agw-UserId'?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  task_id?: Int64;
  Base?: base.Base;
}

export interface GetGeneratedDatasetRowGroupsResp {
  generate_row_groups?: Array<GenerateRowGroup>;
  generate_column_info_list?: Array<GenerateColumnInfo>;
  task_id: Int64;
  /** 数据集角色描述 */
  dataset_describe?: string;
  task_state: TaskState;
  total: Int64;
  generate_completed_count: Int64;
  create_time: Int64;
  user_id: Int64;
  selected_count: Int64;
  abandoned_count: Int64;
  already_have_task: boolean;
  /** 时效性 */
  timeliness?: Timeliness;
  /** 专业知识 */
  professional_knowledges?: Array<ProfessionalKnowledge>;
  BaseResp?: base.BaseResp;
}

export interface GetSecurityTokenReq {
  'FlowDevops-Agw-UserId'?: string;
  space_id?: Int64;
  'FlowDevops-Agw-AppId'?: number;
  Base?: base.Base;
}

export interface GetSecurityTokenResp {
  security_token: SecurityToken;
  BaseResp?: base.BaseResp;
}

export interface InsertColumnReq {
  dataset_id: Int64;
  'FlowDevops-Agw-UserId'?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  column_info: ColumnInfo;
  Base?: base.Base;
}

export interface InsertColumnResp {
  column_schema?: Array<ColumnInfo>;
  BaseResp?: base.BaseResp;
}

export interface InsertRowGroupsReq {
  dataset_id: Int64;
  'FlowDevops-Agw-UserId'?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  row_groups: Array<RowGroup>;
  /** append to tail if null */
  before_row_group_id?: Int64;
  /** 跳过限制检查
如果是true则跳过未通过限制检查的行插入其他行，最终返回Statua_Code不为0，并将跳过的行放在返回结构体的SkipLimitCheckInfos字段。
如果是false则发现有未通过限制检查的行时，不插入任何行，并返回Statua_Code不为0。 */
  skip_limit_check?: boolean;
  Base?: base.Base;
}

export interface InsertRowGroupsResp {
  row_group_ids?: Array<Int64>;
  total?: Int64;
  skip_limit_check_infos?: Array<SkipLimitCheckInfo>;
  BaseResp?: base.BaseResp;
}

export interface KillGenerateDatasetTaskReq {
  dataset_id: Int64;
  'FlowDevops-Agw-UserId'?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  task_id: Int64;
  Base?: base.Base;
}

export interface KillGenerateDatasetTaskResp {
  BaseResp?: base.BaseResp;
}

export interface ListDatasetReq {
  'FlowDevops-Agw-UserId'?: string;
  space_id: Int64;
  'FlowDevops-Agw-AppId'?: number;
  tag_name?: string;
  tag_value?: string;
  publish_option?: PublishOption;
  /** 过滤数据集类型, 为空表示不过滤 */
  dataset_types?: Array<DatasetType>;
  page?: Int64;
  page_size?: Int64;
  /** -- search fields --
req cursor 仅在带条件搜索时应用 (tag/SearchFilter) */
  cursor?: string;
  fuzzy_name?: string;
  creator_id?: Int64;
  tag_ids?: Array<Int64>;
  Base?: base.Base;
}

export interface ListDatasetResp {
  dataset_infos?: Array<DatasetInfo>;
  total?: Int64;
  /** resp cursor 无条件生效, 实际是 dataset_id */
  cursor?: string;
  has_more?: boolean;
  BaseResp?: base.BaseResp;
}

export interface ListDatasetV2Req {
  'FlowDevops-Agw-UserId'?: string;
  space_id: Int64;
  'FlowDevops-Agw-AppId'?: number;
  tag_name?: string;
  tag_value?: string;
  publish_option?: PublishOption;
  /** 过滤数据集类型, 为空表示不过滤 */
  dataset_types?: Array<DatasetType>;
  page?: Int64;
  page_size?: Int64;
  /** -- search fields --
req cursor 仅在带条件搜索时应用 (tag/SearchFilter) */
  cursor?: string;
  fuzzy_name?: string;
  creator_id?: Int64;
  tag_ids?: Array<Int64>;
  Base?: base.Base;
}

export interface ListDatasetV2Resp {
  dataset_infos?: Array<DatasetInfo>;
  total?: Int64;
  /** resp cursor 无条件生效, 实际是 dataset_id */
  cursor?: string;
  has_more?: boolean;
  BaseResp?: base.BaseResp;
}

export interface ListRowGroupsReq {
  dataset_id: Int64;
  'FlowDevops-Agw-UserId'?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  tags?: Array<string>;
  page?: Int64;
  page_size?: Int64;
  Base?: base.Base;
}

export interface ListRowGroupsResp {
  row_groups?: Array<RowGroup>;
  column_schema?: Array<ColumnInfo>;
  total?: Int64;
  BaseResp?: base.BaseResp;
}

export interface LockDatasetReq {
  dataset_id: Int64;
  'FlowDevops-Agw-UserId'?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  /** ms; never expire=0 */
  expiration?: Int64;
  Base?: base.Base;
}

export interface LockDatasetResp {
  BaseResp?: base.BaseResp;
}

export interface OptimizeRichDatasetDescribeReq {
  dataset_id: Int64;
  'FlowDevops-Agw-UserId'?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  dataset_describe: string;
  Base?: base.Base;
}

export interface OptimizeRichDatasetDescribeResp {
  item?: ReplyItem;
  BaseResp?: base.BaseResp;
}

export interface OptimizeRichSemanticReq {
  dataset_id: Int64;
  'FlowDevops-Agw-UserId'?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  semantic_describe: string;
  Base?: base.Base;
}

export interface OptimizeRichSemanticResp {
  item?: ReplyItem;
  BaseResp?: base.BaseResp;
}

export interface OverWriteDatasetReq {
  dataset_id: Int64;
  'FlowDevops-Agw-UserId'?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  column_schema?: Array<ColumnInfo>;
  row_groups?: Array<RowGroup>;
  source_dataset_id?: Int64;
  source_space_id?: Int64;
  Base?: base.Base;
}

export interface OverWriteDatasetResp {
  BaseResp?: base.BaseResp;
}

export interface ProfessionalKnowledge {
  /** 知识库key */
  key?: string;
  /** 知识库空间ID */
  knowledge_space_id?: Int64;
  /** 知识库ID */
  id?: Int64;
  professional_knowledge_type?: ProfessionalKnowledgeType;
}

export interface PublishGenerateDatasetReq {
  dataset_id: Int64;
  'FlowDevops-Agw-UserId'?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  /** 待生成数据集角色描述 */
  dataset_describe?: string;
  /** column 字段描述与生成语义需求 */
  generate_column_info_list?: Array<GenerateColumnInfo>;
  /** 期望生成总数 */
  total?: Int64;
  /** 提供的few-shot样例 */
  row_group_examples?: Array<RowGroup>;
  /** 使用引用数据集存量数据 */
  reference_dataset?: boolean;
  /** 时效性 */
  timeliness?: Timeliness;
  /** 专业知识 */
  professional_knowledges?: Array<ProfessionalKnowledge>;
  Base?: base.Base;
}

export interface PublishGenerateDatasetResp {
  task_id: Int64;
  BaseResp?: base.BaseResp;
}

export interface ReleaseDatasetReq {
  dataset_id: Int64;
  'FlowDevops-Agw-UserId'?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  Base?: base.Base;
}

export interface ReleaseDatasetResp {
  BaseResp?: base.BaseResp;
}

export interface ReplaceRowGroupsReq {
  dataset_id: Int64;
  'FlowDevops-Agw-UserId'?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  row_group_id: Int64;
  row_group: RowGroup;
  Base?: base.Base;
}

export interface ReplaceRowGroupsResp {
  row_group_id?: Int64;
  BaseResp?: base.BaseResp;
}

/** 前端使用了Prompt 优化提供的组件，故对齐Prompt 优化返回的数据结构 */
export interface ReplyItem {
  stream_state?: StreamState;
  reply_type?: ReplyType;
  content?: string;
  token_consumption?: TokenConsumption;
}

/** ############# ROW GROUP ############## */
export interface Row {
  row_id?: Int64;
  cells?: Array<string>;
  cells_v2?: Array<flow_devops_evaluation_callback_common.Content>;
}

export interface RowGroup {
  row_group_id?: Int64;
  group_name?: string;
  /** 新增创建时指定tags */
  tags?: Array<string>;
  rows: Array<Row>;
}

export interface ScanRowGroupsReq {
  dataset_id: Int64;
  'FlowDevops-Agw-UserId'?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  filter_rows?: boolean;
  tags?: Array<string>;
  cursor?: Int64;
  limit?: Int64;
  Base?: base.Base;
}

export interface ScanRowGroupsResp {
  row_groups?: Array<RowGroup>;
  column_schema?: Array<ColumnInfo>;
  has_more?: boolean;
  next_cursor?: Int64;
  total?: Int64;
  BaseResp?: base.BaseResp;
}

export interface SearchDatasetReq {
  'FlowDevops-Agw-UserId'?: string;
  name?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  creator?: Int64;
  publish_option?: PublishOption;
  page?: Int64;
  page_size?: Int64;
  Base?: base.Base;
}

export interface SearchDatasetResp {
  dataset_infos?: Array<DatasetInfo>;
  total?: Int64;
  BaseResp?: base.BaseResp;
}

export interface SecurityToken {
  access_key_id: string;
  secret_access_key: string;
  session_token: string;
  expired_time: string;
  current_time: string;
}

export interface SkipLimitCheckInfo {
  row_group?: RowGroup;
  skip_error_code?: number;
  skip_reason?: string;
}

export interface SubmitGeneratedDatasetRowGroupsReq {
  dataset_id: Int64;
  'FlowDevops-Agw-UserId'?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  task_id: Int64;
  /** 生成数据集groupID 对应用户选择状态 初始化为Generated，被选中到数据集为Selected，废弃删除为Abandoned */
  submit_row_groups?: Array<SubmitRowGroup>;
  Base?: base.Base;
}

export interface SubmitGeneratedDatasetRowGroupsResp {
  BaseResp?: base.BaseResp;
}

export interface SubmitRowGroup {
  row_group?: RowGroup;
  result_state?: ResultState;
}

export interface Timeliness {
  /** 开关 */
  switch?: boolean;
}

export interface TokenConsumption {
  input_token?: Int64;
  output_token?: Int64;
}

export interface UpdateColumnReq {
  dataset_id: Int64;
  'FlowDevops-Agw-UserId'?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  column_id: Int64;
  column_info: ColumnInfo;
  Base?: base.Base;
}

export interface UpdateColumnResp {
  column_schema?: Array<ColumnInfo>;
  BaseResp?: base.BaseResp;
}

export interface UpdateDatasetReq {
  dataset_id: Int64;
  'FlowDevops-Agw-UserId'?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  name?: string;
  desc?: string;
  tag_ids?: Array<Int64>;
  update_fields?: Array<UpdateDatasetField>;
  Base?: base.Base;
}

export interface UpdateDatasetResp {
  BaseResp?: base.BaseResp;
}

export interface UpdateRowGroupsReq {
  dataset_id: Int64;
  'FlowDevops-Agw-UserId'?: string;
  'FlowDevops-Agw-AppId'?: number;
  space_id: Int64;
  row_group_id: Int64;
  row_group: RowGroup;
  Base?: base.Base;
}

export interface UpdateRowGroupsResp {
  row_group_id?: Int64;
  BaseResp?: base.BaseResp;
}
/* eslint-enable */
