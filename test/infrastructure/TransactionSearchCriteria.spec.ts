/*
 * Copyright 2020 NEM
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

import { expect } from 'chai';
import { Order, TransactionGroupSubsetEnum } from 'symbol-openapi-typescript-node-client';
import { TransactionSearchCriteria } from '../../src/infrastructure/searchCriteria/TransactionSearchCriteria';
import { TestingAccount } from '../conf/conf.spec';
import { UInt64, TransactionType, Address } from '../../src/model/model';
import { deepEqual } from 'assert';

describe('TransactionSearchCriteria', () => {
    const account = TestingAccount;

    it('should create TransactionSearchCriteria', () => {
        let criteria: TransactionSearchCriteria = {
            order: Order.Asc,
            pageNumber: 1,
            pageSize: 1,
            address: account.address,
            embedded: true,
            group: TransactionGroupSubsetEnum.Confirmed,
            height: UInt64.fromUint(1),
            id: '12345',
            offset: '6789',
            recipientAddress: account.address,
            signerPublicKey: account.publicKey,
            transactionTypes: [TransactionType.ACCOUNT_ADDRESS_RESTRICTION],
        };

        expect(criteria.order?.valueOf()).to.be.equal('asc');
        expect(criteria.pageNumber).to.be.equal(1);
        expect(criteria.pageSize).to.be.equal(1);
        expect(criteria.address?.plain()).to.be.equal(account.address.plain());
        expect(criteria.embedded).to.be.equal(true);
        expect(criteria.group).to.be.equal(TransactionGroupSubsetEnum.Confirmed);
        expect(criteria.height?.toString()).to.be.equal('1');
        expect(criteria.id).to.be.equal('12345');
        expect(criteria.offset).to.be.equal('6789');
        expect(criteria.recipientAddress?.plain()).to.be.equal(account.address.plain());
        expect(criteria.signerPublicKey).to.be.equal(account.publicKey);
        deepEqual(criteria.transactionTypes, [TransactionType.ACCOUNT_ADDRESS_RESTRICTION]);

        const address = Address.createFromRawAddress('MCTVW23D2MN5VE4AQ4TZIDZENGNOZXPRPR72DYSX');
        criteria = {
            order: Order.Desc,
            pageNumber: 2,
            pageSize: 2,
            address: address,
            embedded: false,
            group: TransactionGroupSubsetEnum.Unconfirmed,
            height: UInt64.fromUint(2),
            id: 'aaa',
            offset: 'bbb',
            recipientAddress: address,
            signerPublicKey: 'publicKey',
            transactionTypes: [TransactionType.TRANSFER],
        };

        expect(criteria.order?.valueOf()).to.be.equal('desc');
        expect(criteria.pageNumber).to.be.equal(2);
        expect(criteria.pageSize).to.be.equal(2);
        expect(criteria.address?.plain()).to.be.equal(address.plain());
        expect(criteria.embedded).to.be.equal(false);
        expect(criteria.group).to.be.equal(TransactionGroupSubsetEnum.Unconfirmed);
        expect(criteria.height?.toString()).to.be.equal('2');
        expect(criteria.id).to.be.equal('aaa');
        expect(criteria.offset).to.be.equal('bbb');
        expect(criteria.recipientAddress?.plain()).to.be.equal(address.plain());
        expect(criteria.signerPublicKey).to.be.equal('publicKey');
        deepEqual(criteria.transactionTypes, [TransactionType.TRANSFER]);
    });

    it('should create TransactionSearchCriteria - default', () => {
        const criteria: TransactionSearchCriteria = {};

        expect(criteria.order).to.be.undefined;
        expect(criteria.address).to.be.undefined;
        expect(criteria.embedded).to.be.undefined;
        expect(criteria.group).to.be.undefined;
        expect(criteria.height).to.be.undefined;
        expect(criteria.id).to.be.undefined;
        expect(criteria.offset).to.be.undefined;
        expect(criteria.pageNumber).to.be.undefined;
        expect(criteria.pageSize).to.be.undefined;
        expect(criteria.recipientAddress).to.be.undefined;
        expect(criteria.signerPublicKey).to.be.undefined;
        expect(criteria.transactionTypes).to.be.undefined;
    });
});
