import {NextApiRequest, NextApiResponse} from 'next'
import {BaseQuery} from "../base/BaseQuery";
import {Engage} from "../../../models/Engage";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<Engage>>
) {
    const {jobLocId} = req.query;
    const baseQuery = new BaseQuery('engage');
    const qry = await baseQuery.prisma[baseQuery.model].findMany({
        where: {
            job_loc_id: parseInt(jobLocId)
        },
    });
    res.status(200).json(qry);
}