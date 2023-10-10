import {baseConstant, BaseModel} from "./base/BaseModel";

export type Company = BaseModel & {
    name?: string;
}

export const company: Company = {
    ...baseConstant,
    name: ""
};