const { MongoClient } = require("mongodb")

exports.handler = async (event, context) => {
  const { name, email, subject, message } = JSON.parse(event.body)

  if (!name || !email || !subject || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Name, email, and message are required" }),
    }
  }

  try {
    const client = await MongoClient.connect(process.env.GATSBY_MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    const db = client.db("portfolio")
    const collection = db.collection("inquiries")

    await collection.insertOne({ name, email, subject, message })

    await client.close()

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Form submitted successfully" }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    }
  }
}
