// export interface PrismaClientKnownRequestError extends Error {
//     code: string;
//     clientVersion: string;
//     meta?: Record<string, any>;
// }

export interface Books {
    id?: number;
    title: string;
    author: string;
    genre: string;
    published_at?: Date;
}

export interface ISearch {
    title: string;
    genre: string;
    author: string;
}