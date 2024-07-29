const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1/library";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB", err));

// Define a schema
const booksSchema = new mongoose.Schema({
    title: String,
    isbn: String,
    pageCount: Number,
    publishedDate: String,
    thumbnailUrl: String,
    status: String,
    authors: [String],
    categories: [String]
});

// Create a model
const Book = mongoose.model('Book', booksSchema);

const main = async () => {
    try {
        const data = await Book.find({});
        console.log(data);
    } catch (error) {
        console.log(error);
    } finally {
        mongoose.connection.close();
    }
};

main()
    .then(() => console.log("done"))
    .catch((e) => console.error(e));
