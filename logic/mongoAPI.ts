import { MongoClient } from 'mongodb'

const URL = 'mongodb://localhost:27017'
const NAME = 'mongodb'

export async function insertDocument(
  collectionName: string,
  document: object
): Promise<void> {
  let client: MongoClient
  try {
    client = await MongoClient.connect(URL, { useNewUrlParser: true })
    await client.db(NAME).collection(collectionName).insertOne(document)
  } finally {
    client.close()
  }
}

export async function findDocuments(
  collectionName: string,
  filter: object
): Promise<any[]> {
  let client: MongoClient
  try {
    client = await MongoClient.connect(URL, { useNewUrlParser: true })
    return await client
      .db(NAME)
      .collection(collectionName)
      .find(filter)
      .toArray()
  } finally {
    client.close()
  }
}

export async function deleteDocument(collectionName: string, filter: object) {
  let client: MongoClient
  try {
    client = await MongoClient.connect(URL, { useNewUrlParser: true })
    return await client.db(NAME).collection(collectionName).deleteOne(filter)
  } finally {
    client.close()
  }
}

export async function updateDocument(
  collectionName: string,
  filter: object,
  newDocument: object
) {
  let client: MongoClient
  try {
    client = await MongoClient.connect(URL, { useNewUrlParser: true })
    return await client
      .db(NAME)
      .collection(collectionName)
      .updateOne(filter, { $set: newDocument })
  } finally {
    client.close()
  }
}
