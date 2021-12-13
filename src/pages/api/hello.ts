// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  title: string
  movie: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const body = JSON.parse(req.body)

  res.status(200).json({
    title: 'BATMAN',
    movie: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/${body.id}.mp4`,
  })
}
