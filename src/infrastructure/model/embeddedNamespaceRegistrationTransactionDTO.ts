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
 * The version of the OpenAPI document: 0.7.21
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EmbeddedTransactionDTO } from './embeddedTransactionDTO';
import { NamespaceRegistrationTransactionBodyDTO } from './namespaceRegistrationTransactionBodyDTO';
import { NamespaceRegistrationTypeEnum } from './namespaceRegistrationTypeEnum';
import { NetworkTypeEnum } from './networkTypeEnum';

export class EmbeddedNamespaceRegistrationTransactionDTO {
    'signerPublicKey': string;
    /**
    * Entity version.
    */
    'version': number;
    'network': NetworkTypeEnum;
    'type': number;
    /**
    * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
    */
    'maxFee': string;
    /**
    * Duration expressed in number of blocks.
    */
    'deadline': string;
    /**
    * Duration expressed in number of blocks.
    */
    'duration': string;
    /**
    * Namespace identifier.
    */
    'parentId': string;
    /**
    * Namespace identifier.
    */
    'id': string;
    'registrationType': NamespaceRegistrationTypeEnum;
    /**
    * Namespace name.
    */
    'name': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "signerPublicKey",
            "baseName": "signerPublicKey",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        },
        {
            "name": "network",
            "baseName": "network",
            "type": "NetworkTypeEnum"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "number"
        },
        {
            "name": "maxFee",
            "baseName": "maxFee",
            "type": "string"
        },
        {
            "name": "deadline",
            "baseName": "deadline",
            "type": "string"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "string"
        },
        {
            "name": "parentId",
            "baseName": "parentId",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "registrationType",
            "baseName": "registrationType",
            "type": "NamespaceRegistrationTypeEnum"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return EmbeddedNamespaceRegistrationTransactionDTO.attributeTypeMap;
    }
}

