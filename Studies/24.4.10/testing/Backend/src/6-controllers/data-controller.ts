import express, { NextFunction, Request, Response } from "express";
import { AuthorModel } from "../3-models/author-model";
import { StatusCode } from "../3-models/enums";
import { dataService } from "../5-services/data-service";
import { BookModel } from "../3-models/book-model";

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
        this.router.get("/authors", this.getAllAuthors);
        this.router.get("/authors/:_id", this.getOneAuthor);
        this.router.post("/authors", this.addAuthor);
        this.router.get("/books", this.getAllBooks);
        this.router.get("/books/:_id", this.getOneBook);
        this.router.post("/books", this.addBook);

        this.router.get("/query-books", this.getQueryBooks);
    }

    // GET http://localhost:4000/api/authors
    private async getAllAuthors(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const authors = await dataService.getAllAuthors();
            response.json(authors);
        }
        catch (err: any) { next(err); }
    }

    // GET http://localhost:4000/api/authors/:_id
    private async getOneAuthor(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const _id = request.params._id;
            const author = await dataService.getOneAuthor(_id);
            response.json(author);
        }
        catch (err: any) { next(err); }
    }

    // POST http://localhost:4000/api/authors
    private async addAuthor(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const author = new AuthorModel(request.body);
            const addedAuthor = await dataService.addAuthor(author);
            response.status(StatusCode.Created).json(addedAuthor);
        }
        catch (err: any) { next(err); }
    }

    // GET http://localhost:4000/api/books
    private async getAllBooks(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const books = await dataService.getAllBooks();
            response.json(books);
        }
        catch (err: any) { next(err); }
    }

    // GET http://localhost:4000/api/books/:_id
    private async getOneBook(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const _id = request.params._id;
            const book = await dataService.getOneBook(_id);
            response.json(book);
        }
        catch (err: any) { next(err); }
    }

    // POST http://localhost:4000/api/books
    private async addBook(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const book = new BookModel(request.body);
            const addedBook = await dataService.addBook(book);
            response.status(StatusCode.Created).json(addedBook);
        }
        catch (err: any) { next(err); }
    }

    // GET http://localhost:4000/api/query-books
    private async getQueryBooks(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
            const books = await dataService.getQueryBooks();
            response.json(books);
        }
        catch (err: any) { next(err); }
    }
}

const dataController = new DataController();
export const dataRouter = dataController.router;
