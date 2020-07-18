import { ObjectID } from 'mongodb'
import {
  insertDocument,
  findDocuments,
  deleteDocument,
  updateDocument,
} from '../logic/mongoAPI'

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
  static async update(id: string, text: string): Promise<void> {
    await updateDocument(collectionName, { _id: new ObjectID(id) }, { text })
  }
}
