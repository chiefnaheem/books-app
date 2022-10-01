import supertest from 'supertest';
import app from '../app';

describe('SCRUD actions for books', () => {
    const bookData = {
        author: "naheem",
        genre: "literarture",
        title: "book"
    }

    it('post a book', async () => {
        const response = await supertest(app).post('/api/v1').send(bookData);
        expect(response.status).toBe(201);
    })

    it('get all books', async () => {
        const response = await supertest(app).get('/api/v1');
        expect(response.status).toBe(200);
    }

    it('get a book', async () => {
        const response: any = await supertest(app).get('/api/v1/1');
        expect(response.status).toBe(200);
    }

    it('update a book', async () => {
        const response = await supertest(app).put('/api/v1/1').send(bookData);
        expect(response.status).toBe(200);
    }

    it('delete a book', async () => {
        const response = await supertest(app).delete('/api/v1/1');
        expect(response.status).toBe(200);
    }

    it('get books by author', async () => {
        const response = await supertest(app).post('/api/v1/author').send({ author: "naheem" });
        expect(response.status).toBe(200);
    }

    it('get books by genre', async () => {
        const response = await supertest(app).post('/api/v1/genre').send({ genre: "literatures" });
        expect(response.status).toBe(200);
    }

    it('get books by title', async () => {
        const response = await supertest(app).post('/api/v1/title').send({ title: "book" });
        expect(response.status).toBe(200);
    }

    it('search books', async () => {
        const response = await supertest(app).get('/api/search');
        expect(response.status).toBe(200);
    }
})