import {baseConstant, BaseModel} from "./base/BaseModel";
import {JobLoc} from "./JobLoc";
import {Variable} from "./Variable";

export type Energize = BaseModel & {
    name?: string;
    job_loc?: JobLoc;
    variable?: Variable;
    reg?: number;
}

export const energize: Energize = {
    ...baseConstant,
    name: "",
    job_loc: undefined,
    variable: undefined,
    reg: 0,
};