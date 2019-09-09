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
/**
 * Catapult REST Endpoints
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.18
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LockHashAlgorithmEnum } from './lockHashAlgorithmEnum';

export class SecretLockTransactionBodyDTO {
    /**
    * Duration expressed in number of blocks.
    */
    'duration': string;
    /**
    * Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias) is used instead of the real  mosaic identifier. 
    */
    'mosaicId': string;
    /**
    * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
    */
    'amount': string;
    'hashAlgorithm': LockHashAlgorithmEnum;
    'secret': string;
    /**
    * Address decoded. If the bit 0 of byte 0 is not set (like in 0x90), then it is a regular address. Else (e.g. 0x91) it represents a namespace id which starts at byte 1. 
    */
    'recipientAddress': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "duration",
            "baseName": "duration",
            "type": "string"
        },
        {
            "name": "mosaicId",
            "baseName": "mosaicId",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string"
        },
        {
            "name": "hashAlgorithm",
            "baseName": "hashAlgorithm",
            "type": "LockHashAlgorithmEnum"
        },
        {
            "name": "secret",
            "baseName": "secret",
            "type": "string"
        },
        {
            "name": "recipientAddress",
            "baseName": "recipientAddress",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SecretLockTransactionBodyDTO.attributeTypeMap;
    }
}

