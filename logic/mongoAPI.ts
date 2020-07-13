import { MongoClient, Collection } from 'mongodb'

const URL = 'mongodb://localhost:27017'
const NAME = 'mongodb'

export async function insertDocument(collectionName: string, document: object) {
  await crudCollection(
    collectionName,
    async (collection) => await collection.insertOne(document)
  )
}

export async function findDocuments(
  collectionName: string,
  filter: object
): Promise<any[]> {
  return await crudCollection(
    collectionName,
    async (collection) => await collection.find(filter).toArray()
  )
}

export async function updateDocument(
  collectionName: string,
  filter: object,
  newDocument: object
) {
  await crudCollection(
    collectionName,
    async (collection) =>
      await collection.updateOne(filter, { $set: newDocument })
  )
}

export async function deleteDocument(collectionName: string, filter: object) {
  await crudCollection(
    collectionName,
    async (collection) => await collection.deleteOne(filter)
  )
}

/**
 * @private
 */
async function crudCollection(
  collectionName: string,
  method: (collection: Collection<any>) => Promise<any>
) {
  let client: MongoClient
  try {
    client = await MongoClient.connect(URL, { useNewUrlParser: true })
    const collection = client.db(NAME).collection(collectionName)
    return await method(collection)
  } finally {
    client.close()
  }
}
