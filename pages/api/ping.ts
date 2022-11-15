// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('REQUEST', {
    headers: req.headers,
    body: req.body,
    query: req.query,
    path: req.url,
  });

  res.status(200).json({ name: 'ping' });
}
