import { NextApiRequest, NextApiResponse } from 'next';
import { domainsOfExpertise } from '../../data';

export default (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200).json({ domainsOfExpertise });
};
