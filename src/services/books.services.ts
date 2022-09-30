import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

// export const postBook = async (req: Request, res: Response) => {
//     const { title, author, genre } = req.body;
//     if (!title || !author || !genre) {
//         return res.status(400).json({ message: 'Missing fields' });
//     }
//     try {
//         const newBook = await prisma.book.create({
//             data: {
//                 title,
//                 author,
//                 genre,
//             },
//         });
//         return res.status(200).json(newBook);
//     }
//     catch (err: any) {
//         return res.status(500).json({ message: err.message });
//     }
// };

export const postBook = async (title: string, author: string, genre: string) => {
    try{

        const newBook = await prisma.book.create({
            data: {
                title,
                author,
                genre,
            },
        });
        return newBook;
    }
    catch (err: any) {
        return err;
    }
};

export const getBooks = async () => {
    try {
        const books = await prisma.book.findMany();
        return books;
    }
    catch (err: any) {
        return err;
    }
};

export const getBook = async (id: number) => {
    try {
        const book = await prisma.book.findUnique({
            where: {
                id,
            },
        });
        return book;
    }
    catch (err: any) {
        return err;
    }
};

export const updateBook = async (id: number, title: string, author: string, genre: string) => {
    try {
        const book = await prisma.book.update({
            where: {
                id,
            },
            data: {
                title,
                author,
                genre,
            },
        });
        return book;
    }
    catch (err: any) {
        return err;
    }
};

export const deleteBook = async (id: number) => {
    try {
        const book = await prisma.book.delete({
            where: {
                id,
            },
        });
        return book;
    }
    catch (err: any) {
        return err;
    }
}

export const searchBook = async (title: string, genre: string, author: string) => {
    try {
        const book = await prisma.book.findMany({
            where: {
                title: {
                    contains: title,
                    mode: 'insensitive',
                },
                genre: {
                    contains: genre,
                    mode: 'insensitive',
                },
                author: {
                    contains: author,
                    mode: 'insensitive',
                },
            },
        });
        return book;
    }
    catch (err: any) {
        return err;
    }
} 

export const getBookByGenre = async (genre: string) => {
    try {
        const book = await prisma.book.findMany({
            where: {
                genre: {
                    contains: genre,
                    mode: 'insensitive',
                },
            },
        });
        return book;
    }
    catch (err: any) {
        return err;
    }
}

export const getBookByAuthor = async (author: string) => {
    try {
        const book = await prisma.book.findMany({
            where: {
                author: {
                    contains: author,
                    mode: 'insensitive',
                },
            },
        });
        return book;
    }
    catch (err: any) {
        return err;
    }
}

export const getBookByTitle = async (title: string) => {
    try {
        const book = await prisma.book.findMany({
            where: {
                title: {
                    contains: title,
                    mode: 'insensitive',
                },
            },
        });
        return book;
    }
    catch (err: any) {
        return err;
    }
}