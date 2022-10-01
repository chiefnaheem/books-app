import express from 'express';
const router = express.Router();
import { searchBooksController } from '../controllers/books.controller';

router.get('/any', (req, res) => {
    res.send('any');
    });
router.get('/search', searchBooksController);

    export default router