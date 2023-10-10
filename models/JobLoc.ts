import {baseConstant, BaseModel} from "./base/BaseModel";
import {Company} from "./Company";

export type JobLoc = BaseModel & {
    name?: string;
    company?: Company;
}

export const jobLoc: JobLoc = {
    ...baseConstant,
    name: "",
    company: undefined
};