/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as MavenAGI from "../../../../api/index";
import * as core from "../../../../core";
import { Range } from "./Range";
import { EntityIdFilter } from "../../commons/types/EntityIdFilter";

export const FieldValue: core.serialization.Schema<serializers.FieldValue.Raw, MavenAGI.FieldValue> = core.serialization
    .union("type", {
        dateTime: core.serialization.object({
            value: core.serialization.date(),
        }),
        string: core.serialization.object({
            value: core.serialization.string(),
        }),
        double: core.serialization.object({
            value: core.serialization.number(),
        }),
        long: core.serialization.object({
            value: core.serialization.number(),
        }),
        range: Range,
        boolean: core.serialization.object({
            value: core.serialization.boolean(),
        }),
        entityId: EntityIdFilter,
    })
    .transform<MavenAGI.FieldValue>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace FieldValue {
    type Raw =
        | FieldValue.DateTime
        | FieldValue.String
        | FieldValue.Double
        | FieldValue.Long
        | FieldValue.Range
        | FieldValue.Boolean
        | FieldValue.EntityId;

    interface DateTime {
        type: "dateTime";
        value: string;
    }

    interface String {
        type: "string";
        value: string;
    }

    interface Double {
        type: "double";
        value: number;
    }

    interface Long {
        type: "long";
        value: number;
    }

    interface Range extends Range.Raw {
        type: "range";
    }

    interface Boolean {
        type: "boolean";
        value: boolean;
    }

    interface EntityId extends EntityIdFilter.Raw {
        type: "entityId";
    }
}
