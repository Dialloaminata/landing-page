// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === "POST") {
      const body = req.body.email;
      console.log(body);
      res.status(201).end();
  }else {
    res.status(404).end();
  }
}
