import {baseConstant, BaseModel} from "./base/BaseModel";
import {Division} from "./Division";
import {Variable} from "./Variable";

export type Item = BaseModel & {
    division?: Division;
    variable?: Variable;
    value_bf?: number;
    value_af?: number;
}

export const item: Item = {
    ...baseConstant,
    division: undefined,
    variable: undefined,
    value_bf: 0,
    value_af: 0,
};