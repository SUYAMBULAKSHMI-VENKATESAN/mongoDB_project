// in index.js
const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017"; // Add the correct port for MongoDB

const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();
        const db = client.db("library");
        const collection = db.collection("books");
        const data = await collection.find({}).toArray();
        console.log(data);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main()
    .then(() => console.log("done"))
    .catch((e) => console.error(e));
