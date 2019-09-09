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

import { MosaicPropertiesDTO } from './mosaicPropertiesDTO';

export class MosaicDTO {
    /**
    * Mosaic identifier.
    */
    'id': string;
    /**
    * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
    */
    'supply': string;
    /**
    * Height of the blockchain.
    */
    'startHeight': string;
    'ownerPublicKey': string;
    'ownerAddress': string;
    /**
    * Number of definitions for the same mosaic.
    */
    'revision': number;
    'properties': MosaicPropertiesDTO;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "supply",
            "baseName": "supply",
            "type": "string"
        },
        {
            "name": "startHeight",
            "baseName": "startHeight",
            "type": "string"
        },
        {
            "name": "ownerPublicKey",
            "baseName": "ownerPublicKey",
            "type": "string"
        },
        {
            "name": "ownerAddress",
            "baseName": "ownerAddress",
            "type": "string"
        },
        {
            "name": "revision",
            "baseName": "revision",
            "type": "number"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "MosaicPropertiesDTO"
        }    ];

    static getAttributeTypeMap() {
        return MosaicDTO.attributeTypeMap;
    }
}

