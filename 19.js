// CRUD Operation
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const books = [
  {
    id: 1,
    title: "Book 1",
    author: "Author 1",
  },
  {
    id: 2,
    title: "Book 2",
    author: "Author 2",
  },
  {
    id: 3,
    title: "Book 3",
    author: "Author 3",
  },
];

//Read Data
app.get("/books", (req, res) => {
  res.json(books);
});

//Write Data
app.post("/books", (req, res) => {
  const newBook = req.body;
  newBook.id = books.length + 1;
  books.push(newBook);
  res.status(201).json(newBook);
});

//Update Data
app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updateData = req.body;
  const index = books.findIndex((book) => book.id === id);

  if (index !== -1) {
    books[index] = { ...books[index], ...updateData };
    res.json(books[index]);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});

app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex((book) => book.id === id);

  if (index !== -1) {
    const deletedBook = books[index];
    books.splice(index, 1)[0];
    res.json(deletedBook);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listing on ${PORT}`);
});
