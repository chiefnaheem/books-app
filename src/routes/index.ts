import express from 'express';
const router = express.Router();
import { postBookController, getBookController, getBooksController, updateBookController, deleteBookController, getBooksByAuthor, getBooksByGenre, getBooksByTitle, searchBooksController} from '../controllers/books.controller';

router.post('/', postBookController);
router.get('/', getBooksController);
router.get('/:id', getBookController);
router.put('/:id', updateBookController);
router.delete('/:id', deleteBookController);
router.post('/author', getBooksByAuthor);
router.post('/genre', getBooksByGenre);
router.post('/title', getBooksByTitle);
router.get('/find', (req, res) => {
    res.send('search');
});
export default router;
