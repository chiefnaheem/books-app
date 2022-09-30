import express from 'express';
const router = express.Router();
import { postBookController, getBookController, getBooksController, updateBookController, deleteBookController } from '../controllers/books.controller';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

export default router;
