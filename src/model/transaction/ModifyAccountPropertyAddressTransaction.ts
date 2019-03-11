/*
 * Copyright 2019 NEM
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

import { AccountPropertiesAddressTransaction as AccountPropertiesAddressTransactionLibrary, VerifiableTransaction } from 'nem2-library';
import { PropertyType } from '../account/PropertyType';
import { PublicAccount } from '../account/PublicAccount';
import { NetworkType } from '../blockchain/NetworkType';
import { UInt64 } from '../UInt64';
import { AccountPropertyModification } from './AccountPropertyModification';
import { Deadline } from './Deadline';
import { Transaction } from './Transaction';
import { TransactionInfo } from './TransactionInfo';
import { TransactionType } from './TransactionType';
import { TransactionVersion } from './TransactionVersion';

export class ModifyAccountPropertyAddressTransaction extends Transaction {

    /**
     * Create a modify account property address transaction object
     * @param deadline - The deadline to include the transaction.
     * @param propertyType - The account property type.
     * @param modifications - The array of modifications.
     * @param networkType - The network type.
     * @returns {ModifyAccountPropertyAddressTransaction}
     */
    public static create(deadline: Deadline,
                         propertyType: PropertyType,
                         modifications: Array<AccountPropertyModification<string>>,
                         networkType: NetworkType): ModifyAccountPropertyAddressTransaction {
        return new ModifyAccountPropertyAddressTransaction(networkType,
            TransactionVersion.MODIFY_ACCOUNT_PROPERTY_ADDRESS,
            deadline,
            new UInt64([0, 0]),
            propertyType,
            modifications);
    }

    /**
     * @param networkType
     * @param version
     * @param deadline
     * @param fee
     * @param minApprovalDelta
     * @param minRemovalDelta
     * @param modifications
     * @param signature
     * @param signer
     * @param transactionInfo
     */
    constructor(networkType: NetworkType,
                version: number,
                deadline: Deadline,
                fee: UInt64,
                public readonly propertyType: PropertyType,
                public readonly modifications: Array<AccountPropertyModification<string>>,
                signature?: string,
                signer?: PublicAccount,
                transactionInfo?: TransactionInfo) {
        super(TransactionType.MODIFY_ACCOUNT_PROPERTY_ADDRESS, networkType, version, deadline, fee, signature, signer, transactionInfo);
    }

    /**
     * @internal
     * @returns {VerifiableTransaction}
     */
    protected buildTransaction(): VerifiableTransaction {
        return new AccountPropertiesAddressTransactionLibrary.Builder()
            .addDeadline(this.deadline.toDTO())
            .addFee(this.fee.toDTO())
            .addVersion(this.versionToDTO())
            .addPropertyType(this.propertyType)
            .addModifications(this.modifications.map((modification) => modification.toDTO()))
            .build();
    }

}