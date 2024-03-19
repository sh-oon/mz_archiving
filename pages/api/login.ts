// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	name: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>,
) {
	console.log(req.cookies);
	if(req.cookies.token) {
		res.status(301).redirect('/home');
	}

	if (req.method === 'POST') {
		// set cookie
		res.setHeader('Set-Cookie', `token=${req.body.id}; path=/;`);
		if (req.query.redirect) {
			res.status(301).redirect(req.query.redirect as string);
		} else {
			res.status(301).redirect('/');
		}
	} else {
		// Handle any other HTTP method
		res.setHeader('Allow', ['POST']);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
