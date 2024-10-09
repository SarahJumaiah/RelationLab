import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    editionNumber: {
        type: Number,
        required: true
    },
    publicationDate: {
        type: Date,
        required: true
    },
    hasEbook: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    supportedLanguages: {
        type: [String],
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const Book = mongoose.model('Book', bookSchema);
export default Book;
