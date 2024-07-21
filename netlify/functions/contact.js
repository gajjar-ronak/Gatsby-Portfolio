const { MongoClient } = require("mongodb")
require("dotenv").config() // Load environment variables

let cachedClient = null
let cachedDb = null

async function connectToDatabase(uri) {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  const client = new MongoClient(uri)
  await client.connect()

  const db = client.db("portfolio")

  cachedClient = client
  cachedDb = db

  return { client, db }
}

exports.handler = async event => {
  const { name, email, subject, message } = JSON.parse(event.body)

  if (!name || !email || !subject || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "Name, email, subject, and message are required",
      }),
    }
  }

  try {
    const { db } = await connectToDatabase(process.env.GATSBY_MONGODB_URI)
    const collection = db.collection("inquiries")

    await collection.insertOne({
      name,
      email,
      subject,
      message,
      created_at: new Date(),
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Form submitted successfully" }),
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    }
  }
}
