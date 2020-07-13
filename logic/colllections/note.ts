import { findDocuments, insertDocument, deleteDocument } from '../mongoAPI'
import { ObjectID } from 'mongodb'

const collectionName = 'note'

export class Note {
  _id: string
  text: string

  constructor(text: string) {
    this.text = text
  }

  async insert(): Promise<void> {
    await insertDocument(collectionName, this)
  }
  static async find(id?: string): Promise<Note[]> {
    return (await findDocuments(
      collectionName,
      id ? { _id: new ObjectID(id) } : {}
    )) as Note[]
  }
  static async delete(id: string): Promise<void> {
    await deleteDocument(collectionName, { _id: new ObjectID(id) })
  }
}
