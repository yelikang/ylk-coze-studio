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

// Code generated by MockGen. DO NOT EDIT.
// Source: database.go
//
// Generated by this command:
//
//	mockgen -destination databasemock/database_mock.go --package databasemock -source database.go
//

// Package databasemock is a generated GoMock package.
package databasemock

import (
	context "context"
	reflect "reflect"

	database "github.com/coze-dev/coze-studio/backend/domain/workflow/crossdomain/database"
	gomock "go.uber.org/mock/gomock"
)

// MockDatabaseOperator is a mock of DatabaseOperator interface.
type MockDatabaseOperator struct {
	ctrl     *gomock.Controller
	recorder *MockDatabaseOperatorMockRecorder
	isgomock struct{}
}

// MockDatabaseOperatorMockRecorder is the mock recorder for MockDatabaseOperator.
type MockDatabaseOperatorMockRecorder struct {
	mock *MockDatabaseOperator
}

// NewMockDatabaseOperator creates a new mock instance.
func NewMockDatabaseOperator(ctrl *gomock.Controller) *MockDatabaseOperator {
	mock := &MockDatabaseOperator{ctrl: ctrl}
	mock.recorder = &MockDatabaseOperatorMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockDatabaseOperator) EXPECT() *MockDatabaseOperatorMockRecorder {
	return m.recorder
}

// Delete mocks base method.
func (m *MockDatabaseOperator) Delete(arg0 context.Context, arg1 *database.DeleteRequest) (*database.Response, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Delete", arg0, arg1)
	ret0, _ := ret[0].(*database.Response)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Delete indicates an expected call of Delete.
func (mr *MockDatabaseOperatorMockRecorder) Delete(arg0, arg1 any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Delete", reflect.TypeOf((*MockDatabaseOperator)(nil).Delete), arg0, arg1)
}

// Execute mocks base method.
func (m *MockDatabaseOperator) Execute(ctx context.Context, request *database.CustomSQLRequest) (*database.Response, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Execute", ctx, request)
	ret0, _ := ret[0].(*database.Response)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Execute indicates an expected call of Execute.
func (mr *MockDatabaseOperatorMockRecorder) Execute(ctx, request any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Execute", reflect.TypeOf((*MockDatabaseOperator)(nil).Execute), ctx, request)
}

// Insert mocks base method.
func (m *MockDatabaseOperator) Insert(ctx context.Context, request *database.InsertRequest) (*database.Response, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Insert", ctx, request)
	ret0, _ := ret[0].(*database.Response)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Insert indicates an expected call of Insert.
func (mr *MockDatabaseOperatorMockRecorder) Insert(ctx, request any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Insert", reflect.TypeOf((*MockDatabaseOperator)(nil).Insert), ctx, request)
}

// Query mocks base method.
func (m *MockDatabaseOperator) Query(ctx context.Context, request *database.QueryRequest) (*database.Response, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Query", ctx, request)
	ret0, _ := ret[0].(*database.Response)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Query indicates an expected call of Query.
func (mr *MockDatabaseOperatorMockRecorder) Query(ctx, request any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Query", reflect.TypeOf((*MockDatabaseOperator)(nil).Query), ctx, request)
}

// Update mocks base method.
func (m *MockDatabaseOperator) Update(arg0 context.Context, arg1 *database.UpdateRequest) (*database.Response, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Update", arg0, arg1)
	ret0, _ := ret[0].(*database.Response)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// Update indicates an expected call of Update.
func (mr *MockDatabaseOperatorMockRecorder) Update(arg0, arg1 any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Update", reflect.TypeOf((*MockDatabaseOperator)(nil).Update), arg0, arg1)
}
