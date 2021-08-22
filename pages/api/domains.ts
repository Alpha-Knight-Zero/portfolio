import { NextApiRequest, NextApiResponse } from 'next';
import { domainsOfExpertise } from '../../domain';

export default (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json({ domainsOfExpertise });
};
