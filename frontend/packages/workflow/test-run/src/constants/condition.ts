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
 
import { merge } from 'lodash-es';
import { ConditionType } from '@coze-workflow/base/api';
import { I18n } from '@coze-arch/i18n';

export const conditionRelationField = 'relation';
export const referenceNameField = 'param';
export const conditionField = 'conditionType';
export const compareValueField = 'value';
export const isQuotedField = 'isQuote';
export const quotedField = 'quotedValue';
export const fixedField = 'fixedValue';
export const compareIsQuotedField = `${compareValueField}.${isQuotedField}`;
export const compareQuotedField = `${compareValueField}.${quotedField}`;
export const compareFixedField = `${compareValueField}.${fixedField}`;

export const equalValue = {
  [ConditionType.Equal]: () => I18n.t('workflow_detail_condition_select_equal'),
};
export const notEqualValue = {
  [ConditionType.NotEqual]: () =>
    I18n.t('workflow_detail_condition_select_not_equal'),
};
export const lengthBiggerValue = {
  [ConditionType.LengthGt]: () =>
    I18n.t('workflow_detail_condition_select_longer'),
};
export const lengthBiggerEqualValue = {
  [ConditionType.LengthGtEqual]: () =>
    I18n.t('workflow_detail_condition_select_longer_equal'),
};
export const lengthSmallerValue = {
  [ConditionType.LengthLt]: () =>
    I18n.t('workflow_detail_condition_select_shorter'),
};
export const lengthSmallerEqualValue = {
  [ConditionType.LengthLtEqual]: () =>
    I18n.t('workflow_detail_condition_select_shorter_equal'),
};
export const includeValue = {
  [ConditionType.Contains]: () =>
    I18n.t('workflow_detail_condition_select_contain'),
};
export const excludeValue = {
  [ConditionType.NotContains]: () =>
    I18n.t('workflow_detail_condition_select_not_contain'),
};

export const includeKeyValue = {
  [ConditionType.Contains]: () => I18n.t('workflow_condition_obj_contain'),
};
export const excludeKeyValue = {
  [ConditionType.NotContains]: () =>
    I18n.t('workflow_condition_obj_not_contain'),
};

export const emptyValue = {
  [ConditionType.Null]: () => I18n.t('workflow_detail_condition_select_empty'),
};
export const notEmptyValue = {
  [ConditionType.NotNull]: () =>
    I18n.t('workflow_detail_condition_select_not_empty'),
};
export const biggerValue = {
  [ConditionType.Gt]: () => I18n.t('workflow_detail_condition_select_greater'),
};
export const biggerEqualValue = {
  [ConditionType.GtEqual]: () =>
    I18n.t('workflow_detail_condition_select_greater_equal'),
};
export const smallerValue = {
  [ConditionType.Lt]: () => I18n.t('workflow_detail_condition_select_less'),
};
export const smallerEqualValue = {
  [ConditionType.LtEqual]: () =>
    I18n.t('workflow_detail_condition_select_less_equal'),
};
export const trueValue = {
  [ConditionType.True]: () => I18n.t('workflow_detail_condition_select_true'),
};
export const falseValue = {
  [ConditionType.False]: () => I18n.t('workflow_detail_condition_select_false'),
};

// 等于、不等于、长度大于、长度大于等于、长度小于、长度小于等于、包含、不包含、为空、不为空
export const stringConditionValueMap = merge(
  {},
  equalValue,
  notEqualValue,
  lengthBiggerValue,
  lengthBiggerEqualValue,
  lengthSmallerValue,
  lengthSmallerEqualValue,
  includeValue,
  excludeValue,
  emptyValue,
  notEmptyValue,
);

// 等于、不等于、大于、大于等于、小于、小于等于、为空、不为空
export const intConditionValueMap = merge(
  {},
  equalValue,
  notEqualValue,
  emptyValue,
  notEmptyValue,
  biggerValue,
  biggerEqualValue,
  smallerValue,
  smallerEqualValue,
);

// 等于、不等于、为True、为False、为空、不为空
export const booleanConditionValueMap = merge(
  {},
  equalValue,
  notEqualValue,
  emptyValue,
  notEmptyValue,
  trueValue,
  falseValue,
);

// 等于、不等于、大于等于、小于等于、大于、小于、为空、不为空
export const numberConditionValueMap = merge(
  {},
  equalValue,
  notEqualValue,
  biggerValue,
  biggerEqualValue,
  smallerValue,
  smallerEqualValue,
  emptyValue,
  notEmptyValue,
);

// 包含、不包含、为空、不为空
export const objectConditionValueMap = merge(
  {},
  includeKeyValue,
  excludeKeyValue,
  emptyValue,
  notEmptyValue,
);

// 长度大于、长度大于等于、长度小于、长度小于等于、包含、不包含、为空、不为空
export const arrayConditionValueMap = merge(
  {},
  lengthBiggerValue,
  lengthBiggerEqualValue,
  lengthSmallerValue,
  lengthSmallerEqualValue,
  includeValue,
  excludeValue,
  emptyValue,
  notEmptyValue,
);

// 所有的值的集合
export const totalConditionValueMap = merge(
  {},
  equalValue,
  notEqualValue,
  lengthBiggerValue,
  lengthBiggerEqualValue,
  lengthSmallerValue,
  lengthSmallerEqualValue,
  includeValue,
  excludeValue,
  emptyValue,
  notEmptyValue,
  biggerValue,
  biggerEqualValue,
  smallerValue,
  smallerEqualValue,
  trueValue,
  falseValue,
);

export const fileConditionValueMap = merge({}, notEmptyValue, emptyValue);

export enum ConditionRightType {
  Ref = 'ref',
  Literal = 'literal',
}

export enum Logic {
  OR = 1,
  AND = 2,
}

export const logicTextMap = new Map<number, string>([
  [Logic.OR, I18n.t('workflow_detail_condition_or')],
  [Logic.AND, I18n.t('workflow_detail_condition_and')],
]);
