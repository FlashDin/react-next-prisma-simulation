import {baseConstant, BaseModel} from "./base/BaseModel";
import {JobLoc} from "./JobLoc";

export type Division = BaseModel & {
    name?: string;
    job_loc?: JobLoc;
}

export const division: Division = {
    ...baseConstant,
    name: "",
    job_loc: undefined
};