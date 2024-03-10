import express, { NextFunction, Request, Response } from 'express';
import { dataService } from '../5-services/data-service';
import { AuthorModel } from '../3-models/author-model';
import { StatusCode } from '../3-models/enums';
import { BookModel } from '../3-models/books-model';

// Data controller:
class DataController {
  // Create a router object for listening to HTTP requests:
  public readonly router = express.Router();

  // Register routes once:
  public constructor() {
    this.registerRoutes();
  }

  // Register routes:
  private registerRoutes(): void {
    this.router.get('/authors', this.getAllAuthors);
    this.router.get('/authors/:_id', this.getAuthorById);
    this.router.post('/authors', this.addAuthor);

    this.router.get('/books', this.getAllBooks);
    this.router.get('/books/:_id', this.getBookById);
    this.router.get('/query-books', this.getQueryBooks);
    this.router.post('/books', this.addBook);
  }

  // GET http://localhost:4000/api/authors
  private async getAllAuthors(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const authors = await dataService.getAllAuthors();
      response.json(authors);
    } catch (err: any) {
      next(err);
    }
  }

  // GET http://localhost:4000/api/authors/:_id
  private async getAuthorById(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const _id = request.params._id;
      const authors = await dataService.getAuthorById(_id);
      response.json(authors);
    } catch (err: any) {
      next(err);
    }
  }

  // POST http://localhost:4000/api/authors
  private async addAuthor(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const author = new AuthorModel(request.body);
      const addedAuthor = await dataService.addAuthor(author);
      response.status(StatusCode.Created).json(addedAuthor);
    } catch (err: any) {
      next(err);
    }
  }
  //------------------------------------------------------------------------//

  // GET http://localhost:4000/api/books
  private async getAllBooks(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const books = await dataService.getAllBooks();
      response.json(books);
    } catch (err: any) {
      next(err);
    }
  }

  // GET http://localhost:4000/api/books/:_id
  private async getBookById(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const _id = request.params._id;
      const books = await dataService.getBookById(_id);
      response.json(books);
    } catch (err: any) {
      next(err);
    }
  }

  // GET http://localhost:4000/api/query-books
  private async getQueryBooks(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const books = await dataService.getQueryBooks();
      response.json(books);
    } catch (err: any) {
      next(err);
    }
  }

  // POST http://localhost:4000/api/books
  private async addBook(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const author = new BookModel(request.body);
      const addedBook = await dataService.addBook(author);
      response.status(StatusCode.Created).json(addedBook);
    } catch (err: any) {
      next(err);
    }
  }
}

const dataController = new DataController();
export const dataRouter = dataController.router;
