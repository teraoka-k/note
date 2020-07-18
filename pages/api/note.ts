import { NextApiRequest, NextApiResponse } from 'next'
import { Note } from '../../model/note'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      res.status(200).json(await Note.find())
      break
    case 'POST':
      const text = JSON.parse(req.body).text
      await new Note(text).insert()
      res.status(200).json({ message: 'ok' })
      break
    case 'PUT':
      const body = JSON.parse(req.body)
      await Note.update(body.id, body.text)
      res.status(200).json({ message: 'ok' })
      break
    case 'DELETE':
      const id = JSON.parse(req.body)
      await Note.delete(id)
      res.status(200).json({ message: 'ok' })
      break
  }
}
