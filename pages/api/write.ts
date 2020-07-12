import { NextApiRequest, NextApiResponse } from 'next'
import { Note } from '../../logic/colllections/note'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const text = JSON.parse(req.body).text
  await new Note(text).insert()
  res.status(200).json({ message: 'ok' })
}
