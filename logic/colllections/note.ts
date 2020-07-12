import { findDocuments, insertDocument } from '../mongoAPI'

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
      id ? { _id: id } : {}
    )) as Note[]
  }
}
