import {baseConstant, BaseModel} from "./base/BaseModel";

export type Variable = BaseModel & {
    name?: string;
}

export const variable: Variable = {
    ...baseConstant,
    name: ""
};