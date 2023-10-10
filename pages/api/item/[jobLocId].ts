import {NextApiRequest, NextApiResponse} from 'next'
import {BaseQuery} from "../base/BaseQuery";
import {Item} from "../../../models/Item";
import {Division} from "../../../models/Division";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<Item>>
) {
    const {jobLocId} = req.query;
    const divisionQuery = new BaseQuery('division');
    const itemQuery = new BaseQuery('item');
    const divisionByJobLocs = await divisionQuery.prisma[divisionQuery.model].findMany({
        select: {
            id: true
        },
        where: {
            job_loc_id: parseInt(jobLocId)
        },
    });
    const itemByDivisions = await itemQuery.prisma[itemQuery.model].findMany({
        include: {
            variable: true,
            division: true,
        },
        where: {
            division_id: {
                in: divisionByJobLocs.map((v: Division) => v.id)
            }
        }
    });
    res.status(200).json(itemByDivisions);
}