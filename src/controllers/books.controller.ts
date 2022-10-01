import { postBook, getBooks, getBook, updateBook, deleteBook, getBookByAuthor, getBookByGenre, getBookByTitle, searchBooks } from '../services/books.services';
import { Request, Response } from 'express';
import { ISearch } from '../types/types';


export const postBookController = async (req: Request, res: Response) => {
    const { title, author, genre } = req.body;
    if (!title || !author || !genre) {
        return res.status(400).json({ message: 'Missing fields' });
    }
    try {
        const newBook = await postBook(title, author, genre);
        return res.status(201).json(newBook);
    }
    catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
}

export const getBookController = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const book = await getBook(parseInt(id));
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        return res.status(200).json(book);
    }
    catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
}

export const getBooksController = async (req: Request, res: Response) => {
    try {
        const books = await getBooks();
        return res.status(200).json(books);
    }
    catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
}

export const updateBookController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, author, genre } = req.body;
    try {
        const book = await getBook(parseInt(id));
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        const updatedBook = await updateBook(parseInt(id), title, author, genre);
        return res.status(200).json(updatedBook);
    }
    catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
}

export const deleteBookController = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const book = await getBook(parseInt(id));
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        await deleteBook(parseInt(id));
        return res.status(200).json({ message: 'Book deleted' });
    }
    catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
}


export const getBooksByAuthor = async (req: Request, res: Response) => {
    const { author } = req.body;
    try {
        const books = await getBookByAuthor(author);
        return res.status(200).json(books);
    }
    catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
}

export const getBooksByGenre = async (req: Request, res: Response) => {
    const { genre } = req.body;
    try {
        const books = await getBookByGenre(genre);
        return res.status(200).json(books);
    }
    catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
}

export const getBooksByTitle = async (req: Request, res: Response) => {
    const { title } = req.body;
    try {
        const books = await getBookByTitle(title);
        return res.status(200).json(books);
    }
    catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
}

export const searchBooksController = async (req: Request, res: Response) => {
    const search = req.query.search as string
    try {
        
        const books = await searchBooks(search);
        
        return res.status(200).json({data: books, message: 'success'});
    }
    catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
}
