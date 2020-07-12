import { NextApiRequest, NextApiResponse } from 'next'
import { Note } from '../../logic/colllections/note'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(await Note.find())
}
