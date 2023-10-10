import {baseConstant, BaseModel} from "./base/BaseModel";
import {JobLoc} from "./JobLoc";
import {Variable} from "./Variable";

export type Enable = BaseModel & {
    name?: string;
    job_loc?: JobLoc;
    variable?: Variable;
    reg?: number;
}

export const enable: Enable = {
    ...baseConstant,
    name: "",
    job_loc: undefined,
    variable: undefined,
    reg: 0,
};