import {NextApiRequest, NextApiResponse} from 'next'
import {BaseQuery} from "../base/BaseQuery";
import {Variable} from "../../../models/Variable";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<Variable>>
) {
    const {jobLocId} = req.query;
    const baseQuery = new BaseQuery('variable');
    const qry = await baseQuery.prisma[baseQuery.model].findMany({
        where: {
            job_loc_id: parseInt(jobLocId)
        },
    });
    res.status(200).json(qry);
}