import {NextApiRequest, NextApiResponse} from 'next'
import {BaseQuery} from "../base/BaseQuery";
import {Enable} from "../../../models/Enable";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<Enable>>
) {
    const {jobLocId} = req.query;
    const baseQuery = new BaseQuery('enable');
    const qry = await baseQuery.prisma[baseQuery.model].findMany({
        where: {
            job_loc_id: parseInt(jobLocId)
        },
    });
    res.status(200).json(qry);
}