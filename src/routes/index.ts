import express from 'express';
const router = express.Router();
import { postBookController, getBookController, getBooksController, updateBookController, deleteBookController, searchBookController} from '../controllers/books.controller';

router.post('/', postBookController);
router.get('/', getBooksController);
router.get('/:id', getBookController);
router.put('/:id', updateBookController);
router.delete('/:id', deleteBookController);
router.get('/search/:title', searchBookController);

export default router;
