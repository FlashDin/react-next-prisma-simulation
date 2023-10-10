import {NextApiRequest, NextApiResponse} from 'next'
import {BaseQuery} from "../base/BaseQuery";
import {Energize} from "../../../models/Energize";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<Energize>>
) {
    const {jobLocId} = req.query;
    const baseQuery = new BaseQuery('energize');
    const qry = await baseQuery.prisma[baseQuery.model].findMany({
        where: {
            job_loc_id: parseInt(jobLocId)
        },
    });
    res.status(200).json(qry);
}