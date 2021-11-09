/* eslint-disable no-console */
/**
 * (C) Copyright IBM Corp. 2021.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
const DataVirtualizationV1 = require('../../dist/data-virtualization/v1');
const { readExternalSources } = require('ibm-cloud-sdk-core');
const authHelper = require('../resources/auth-helper.js');

// testcase timeout value (200s).
const timeout = 200000;

// Location of our config file.
const configFile = 'data_virtualization_v1.env';

const describe = authHelper.prepareTests(configFile);

describe('DataVirtualizationV1_integration', () => {
  const dataVirtualizationService = DataVirtualizationV1.newInstance({});

  expect(dataVirtualizationService).not.toBeNull();

  const config = readExternalSources(DataVirtualizationV1.DEFAULT_SERVICE_NAME);
  expect(config).not.toBeNull();

  jest.setTimeout(timeout);

  test('listDatasourceConnections()', async () => {
    const res = await dataVirtualizationService.listDatasourceConnections();
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('addDatasourceConnection()', async () => {
    // Request models needed by this operation.

    // PostDatasourceConnectionParametersProperties
    const postDatasourceConnectionParametersPropertiesModel = {
      access_token: 'ya29.Il-_',
      account_name: 'ibmdatastage.us-east-1',
      api_key: 'ApiKey-a31d60c5-0f7b-4995-a4ae-69bf09d3de50',
      auth_type: 'Bearer Token',
      client_id: '81571342315',
      client_secret: 'uIn8rVyIRsd',
      collection: 'test_collection',
      credentials: '-----BEGIN PRIVATE KEY-----',
      database: 'TPCDS',
      host: '192.168.0.1',
      http_path: 'cliservice',
      jar_uris: '/v2/asset_files/dbdrivers/ngdbc.jar',
      jdbc_driver: 'Snowflake',
      jdbc_url: '/v2/asset_files/dbdrivers/ngdbc.jar',
      password: 'password',
      port: '50000',
      project_id: 'housecanary-com',
      properties: 'key=value',
      refresh_token: '1//06uwhP7_312g',
      role: 'SYSADMIN',
      sap_gateway_url: 'https://sapes5.sapdevcenter.com',
      server: 'ol_informix1410',
      service_name: 'pdborcl.fyre.ibm.com',
      sid: 'orcl',
      ssl: 'false',
      ssl_certificate: '-----BEGIN CERTIFICATE-----',
      ssl_certificate_host: 'test.com',
      ssl_certificate_validation: 'false',
      username: 'db2inst1',
      warehouse: 'wdpcondev',
    };

    const params = {
      datasourceType: 'DB2',
      name: 'DB2',
      originCountry: 'us',
      properties: postDatasourceConnectionParametersPropertiesModel,
      assetCategory: 'USER',
    };

    const res = await dataVirtualizationService.addDatasourceConnection(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('getObjectStoreConnectionsV2()', async () => {
    const params = {
      jwtAuthUserPayload: 'testString',
    };

    const res = await dataVirtualizationService.getObjectStoreConnectionsV2(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('grantUserToVirtualTable()', async () => {
    const params = {
      tableName: 'EMPLOYEE',
      tableSchema: 'dv_ibmid_060000s4y5',
      authid: 'PUBLIC',
    };

    const res = await dataVirtualizationService.grantUserToVirtualTable(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('grantRolesToVirtualizedTable()', async () => {
    const params = {
      tableName: 'EMPLOYEE',
      tableSchema: 'dv_ibmid_060000s4y5',
      roleName: 'PUBLIC',
    };

    const res = await dataVirtualizationService.grantRolesToVirtualizedTable(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('listTablesForRole()', async () => {
    const params = {
      rolename: 'MANAGER | STEWARD | ENGINEER | USER',
    };

    const res = await dataVirtualizationService.listTablesForRole(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('turnOnPolicyV2()', async () => {
    const params = {
      status: 'enabled',
    };

    const res = await dataVirtualizationService.turnOnPolicyV2(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('checkPolicyStatusV2()', async () => {
    const res = await dataVirtualizationService.checkPolicyStatusV2();
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('dvaasVirtualizeTable()', async () => {
    // Request models needed by this operation.

    // VirtualizeTableParameterSourceTableDefItem
    const virtualizeTableParameterSourceTableDefItemModel = {
      column_name: 'Column1',
      column_type: 'INTEGER',
    };

    // VirtualizeTableParameterVirtualTableDefItem
    const virtualizeTableParameterVirtualTableDefItemModel = {
      column_name: 'Column_1',
      column_type: 'INTEGER',
    };

    const params = {
      sourceName: 'Tab1',
      sourceTableDef: [virtualizeTableParameterSourceTableDefItemModel],
      sources: ['DB210001:"Hjq1"'],
      virtualName: 'Tab1',
      virtualSchema: 'dv_ibmid_060000s4y5',
      virtualTableDef: [virtualizeTableParameterVirtualTableDefItemModel],
      isIncludedColumns: 'Y, Y, N',
      replace: false,
    };

    const res = await dataVirtualizationService.dvaasVirtualizeTable(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('virtualizeCosV2()', async () => {
    // Request models needed by this operation.

    // VirtualizeCosV2RequestVirtualTableDefItem
    const virtualizeCosV2RequestVirtualTableDefItemModel = {
      column_name: 'Column_1',
      column_type: 'INTEGER',
    };

    const params = {
      url: 's3a://testBucket/home/data.csv',
      virtualName: 'testString',
      virtualSchema: 'testString',
      virtualTableDef: [virtualizeCosV2RequestVirtualTableDefItemModel],
      isReplace: true,
      options: 'INCPARTS=true',
      jwtAuthUserPayload: 'testString',
    };

    const res = await dataVirtualizationService.virtualizeCosV2(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('getPrimaryCatalog()', async () => {
    const res = await dataVirtualizationService.getPrimaryCatalog();
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('postPrimaryCatalog()', async () => {
    const params = {
      guid: 'd77fc432-9b1a-4938-a2a5-9f37e08041f6',
    };

    const res = await dataVirtualizationService.postPrimaryCatalog(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('publishAssets()', async () => {
    // Request models needed by this operation.

    // PostPrimaryCatalogParametersAssetsItem
    const postPrimaryCatalogParametersAssetsItemModel = {
      schema: 'db2inst1',
      table: 'EMPLOYEE',
    };

    const params = {
      catalogId: '2b6b9fc5-626c-47a9-a836-56b76c0bc826',
      allowDuplicates: false,
      assets: [postPrimaryCatalogParametersAssetsItemModel],
    };

    const res = await dataVirtualizationService.publishAssets(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('getCachesList()', async () => {
    const res = await dataVirtualizationService.getCachesList();
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('getCache()', async () => {
    const params = {
      id: 'DV20210810191252390327',
    };

    const res = await dataVirtualizationService.getCache(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('getCacheStorageDetail()', async () => {
    const res = await dataVirtualizationService.getCacheStorageDetail();
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('revokeUserFromObject()', async () => {
    const params = {
      authid: 'PUBLIC',
      tableName: 'EMPLOYEE',
      tableSchema: 'dv_ibmid_060000s4y5',
    };

    const res = await dataVirtualizationService.revokeUserFromObject(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('dvaasRevokeRoleFromTable()', async () => {
    const params = {
      roleName: 'DV_ENGINEER',
      tableName: 'EMPLOYEE',
      tableSchema: 'dv_ibmid_060000s4y5',
    };

    const res = await dataVirtualizationService.dvaasRevokeRoleFromTable(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('deleteTable()', async () => {
    const params = {
      virtualSchema: 'testString',
      virtualName: 'testString',
    };

    const res = await dataVirtualizationService.deleteTable(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('deletePrimaryCatalog()', async () => {
    const params = {
      guid: 'd77fc432-9b1a-4938-a2a5-9f37e08041f6',
    };

    const res = await dataVirtualizationService.deletePrimaryCatalog(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
  test('deleteDatasourceConnection()', async () => {
    const params = {
      connectionId: '75e4d01b-7417-4abc-b267-8ffb393fb970',
      cid: 'DB210013',
    };

    const res = await dataVirtualizationService.deleteDatasourceConnection(params);
    expect(res).toBeDefined();
    expect(res.result).toBeDefined();
  });
});
