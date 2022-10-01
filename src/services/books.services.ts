import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { Books } from '../types/types';

const prisma = new PrismaClient();



const buildFindAllQuery = (search: Books) => {
    const query: any = {};
    if (search.title) {
        query.title = {
            contains: search.title,
            mode: 'insensitive'
        }
    }
    if (search.author) {
        query.author = {
            contains: search.author,
            mode: 'insensitive'
        }
    }
    if (search.genre) {
        query.genre = {
            contains: search.genre,
            mode: 'insensitive'
        }
    }
    return query;
}

export const searchBooks = async (searchString: string) => {
    if(!searchString) {
        return 'Missing search string';
    }
    try {
        const books = await prisma.book.findMany({
            where: {
                OR: [
                    {
                        title: {
                            contains: searchString,
                            mode: 'insensitive'
                        }
                    },
                    {
                        author: {
                            contains: searchString,
                            mode: 'insensitive'
                        }
                    },
                    {
                        genre: {
                            contains: searchString,
                            mode: 'insensitive'
                        }
                    }
                ]
            }
        });
        return books
    }
    catch (err: any) {
        return err.message
    }
}

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
        const published: Books | any = await prisma.book.findUnique({
            where: {
                id,
            }
        })
        const published_at = published.published_at
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
        book.published_at = published_at;
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