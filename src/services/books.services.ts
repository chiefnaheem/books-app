import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const postBook = async (req: Request, res: Response) => {
    const { title, author, genre } = req.body;
    if (!title || !author || !genre) {
        return res.status(400).json({ message: 'Missing fields' });
    }
    try {
        const newBook = await prisma.book.create({
            data: {
                title,
                author,
                genre,
            },
        });
        return res.status(200).json(newBook);
    }
    catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
};

export const getBooks = async (req: Request, res: Response) => {
    try {
        const books = await prisma.book.findMany();
        return res.status(200).json(books);
    }
    catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
}

export const getBook = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const book = await prisma.book.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        return res.status(200).json(book);
    }
    catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
}

export const updateBook = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, author, genre } = req.body;
    if (!title || !author || !genre) {
        return res.status(400).json({ message: 'Missing fields' });
    }
    try {
        const book = await prisma.book.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        const updatedBook = await prisma.book.update({
            where: {
                id: parseInt(id),
            },
            data: {
                title,
                author,
                genre,
            },
        });
        return res.status(200).json(updatedBook);
    }
    catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
}

export const deleteBook = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const book = await prisma.book.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        const deletedBook = await prisma.book.delete({
            where: {
                id: parseInt(id),
            },
        });
        return res.status(200).json(deletedBook);
    }
    catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
}

export const searchBook = async (req: Request, res: Response) => {
    const { title, author, genre } = req.body;
    if (!title && !author && !genre) {
        return res.status(400).json({ message: 'Missing fields' });
    }
    try {
        const books = await prisma.book.findMany({
            where: {
                OR: [
                    {
                        title: {
                            contains: title,
                        },
                    },
                    {
                        author: {
                            contains: author,
                        },
                    },
                    {
                        genre: {
                            contains: genre,
                        },
                    },
                ],
            },
        });
        return res.status(200).json(books);
    }
    catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
}

export const getBooksByGenre = async (req: Request, res: Response) => {
    const { genre } = req.params;
    try {
        const books = await prisma.book.findMany({
            where: {
                genre: {
                    contains: genre,
                },
            },
        });
        return res.status(200).json(books);
    }
    catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
}

export const getBooksByAuthor = async (req: Request, res: Response) => {
    const { author } = req.params;
    try {
        const books = await prisma.book.findMany({
            where: {
                author: {
                    contains: author,
                },
            },
        });
        return res.status(200).json(books);
    }
    catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
}

export const getBooksByTitle = async (req: Request, res: Response) => {
    const { title } = req.params;
    try {
        const books = await prisma.book.findMany({
            where: {
                title: {
                    contains: title,
                },
            },
        });
        return res.status(200).json(books);
    }
    catch (err: any) {
        return res.status(500).json({ message: err.message });
    }
}