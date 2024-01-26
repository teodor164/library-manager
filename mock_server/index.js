const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// This will store our books in memory,
// "id" is the unique identifier,
// other fields are up to you
let books = [
    {
        id: 1,
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        genres: ['Fantasy'],
        description: 'The adventure of Bilbo Baggins in Middle-earth.',
        status: 'IN_STOCK',
        price: 10.99,
        shape: 'NEW',
    },
    {
        id: 2,
        title: 'The Da Vinci Code',
        author: 'Dan Brown',
        genres: ['Thriller', 'Mystery'],
        description: 'A mystery thriller novel that follows symbologist Robert Langdon.',
        status: 'RENTED',
        price: 8.99,
        shape: 'LIKE_NEW',
    },
    {
        id: 3,
        title: '1984',
        author: 'George Orwell',
        genres: ['Fiction', 'Art'],
        description: 'A dystopian novel by English novelist George Orwell.',
        status: 'RESERVED',
        price: 6.99,
        shape: 'USED',
    },
    {
        id: 4,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        genres: ['Cooking'],
        description: 'A novel about the young and mysterious millionaire Jay Gatsby.',
        status: 'IN_STOCK',
        price: 7.99,
        shape: 'OLD',
    },
    {
        id: 5,
        title: 'Brave New World',
        author: 'Aldous Huxley',
        genres: ['Sci-Fi', 'Comics'],
        description: 'A dystopian social science fiction novel and prognosis by Aldous Huxley.',
        status: 'IN_STOCK',
        price: 9.99,
        shape: 'NEW',
    },
];

function delayResponse(req, res, next) {
    setTimeout(() => next(), 500);
}

app.use(delayResponse);

// Get all books
app.get('/books', (req, res) => {
    res.json(books);
});

// Add a new book
app.post('/books', (req, res) => {
    const book = { id: Date.now(), ...req.body };
    books.push(book);
    res.status(201).json(book);
});

// Update a book
app.put('/books/:id', (req, res) => {
    const index = books.findIndex((book) => book.id === parseInt(req.params.id));
    if (index >= 0) {
        books[index] = { ...books[index], ...req.body };
        res.json(books[index]);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// Delete a book
app.delete('/books/:id', (req, res) => {
    books = books.filter((book) => book.id !== parseInt(req.params.id));
    res.status(204).send();
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
