import express from 'express';
import mongoose from 'mongoose';
import Book from './models/book.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 1423;

app.use(express.json());

function main() {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("Connected");
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

main();

app.post('/books', (req, res) => {
    const newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        editionNumber: req.body.editionNumber,
        publicationDate: req.body.publicationDate,
        hasEbook: req.body.hasEbook,
        price: req.body.price,
        supportedLanguages: req.body.supportedLanguages,
        category: req.body.category
    });

    newBook.save()
        .then(() => res.send('done'))
        .catch((error) => res.send('error'));
});

app.get('/books', (req, res) => {
    Book.find()
        .then((books) => res.send(books))
        .catch(() => res.send('error'));
});

app.get('/book/:id', (req, res) => {
    const { id } = req.params;
    Book.findById(id)
        .then((book) => res.send(book))
        .catch(() => res.send('error'));
});

app.patch('/book/:id', (req, res) => {
    const { id } = req.params;
    const updatedBook = {
        title: req.body.title,
        author: req.body.author,
        editionNumber: req.body.editionNumber,
        publicationDate: req.body.publicationDate,
        hasEbook: req.body.hasEbook,
        price: req.body.price,
        supportedLanguages: req.body.supportedLanguages,
        category: req.body.category
    };

    Book.findByIdAndUpdate(id, updatedBook, { new: true })
        .then(() => res.send('done'))
        .catch(() => res.send('error'));
});

app.delete('/book/:id', (req, res) => {
    const { id } = req.params;
    Book.findByIdAndDelete(id)
        .then(() => res.send('done'))
        .catch(() => res.send('error'));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
