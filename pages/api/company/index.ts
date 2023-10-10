import {NextApiRequest, NextApiResponse} from "next";
import {Company} from "../../../models/Company";
import {BaseQuery} from "../base/BaseQuery";

const baseQuery = new BaseQuery('company');

export default async function handle(req: NextApiRequest, res: NextApiResponse<Array<Company>>) {
    const t = await baseQuery.findModelAll();
    return res.status(200).json(t);
}

// export default function findById<T>(
//     req: NextApiRequest,
//     res: NextApiResponse<T | BaseResponse>
// ) {
//     const { query } = req
//     const { id } = query
//     const person = people.find((p) => p.id === id)
//
//     // User with id exists
//     return person
//         ? res.status(200).json(T)
//         : res.status(404).json({ message: `Data with id: ${id} not found.` })
// }