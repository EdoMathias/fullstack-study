import { AuthorModel, IAuthorModel } from "../3-models/author-model";
import { BookModel, IBookModel } from "../3-models/book-model";

class DataService {

    // Get all authors: 
    public async getAllAuthors(): Promise<IAuthorModel[]> {
        return AuthorModel.find().exec();
    }

    // Get one author: 
    public async getOneAuthor(_id: string): Promise<IAuthorModel> {
        return AuthorModel.findById(_id).exec();
    }

    // Add author: 
    public async addAuthor(author: IAuthorModel): Promise<IAuthorModel> {
        return author.save();
    }

    // Get all books: 
    public async getAllBooks(): Promise<IBookModel[]> {
        // return BookModel.find().exec(); // Get all books without virtual fields.
        return BookModel.find().populate("author").exec(); // Get all books with "author" virtual field.
    }

    // Get one book: 
    public async getOneBook(_id: string): Promise<IBookModel> {
        return BookModel.findById(_id).exec();
    }

    // Add book: 
    public async addBook(Book: IBookModel): Promise<IBookModel> {
        return Book.save();
    }

    // Get query books:
    public async getQueryBooks(): Promise<IBookModel[]> {

        // SELECT * FROM books WHERE price = 50
        // return BookModel.find({ price: 50 }).exec();

        // SELECT * FROM books WHERE price >= 40
        // return BookModel.find({ price: { $gte: 40 } }).exec();

        // SELECT * FROM books WHERE price >= 40 AND price <= 60
        // return BookModel.find({ price: { $gte: 40, $lte: 60 } }).exec();

        // SELECT _id, name FROM books WHERE price >= 40 AND price <= 60
        // return BookModel.find({ price: { $gte: 40, $lte: 60 } }, ["_id", "name"]).exec();

        // SELECT _id, name, price FROM books WHERE price >= 10 AND price <= 100 ORDER BY price
        // SELECT _id, name, price FROM books WHERE price >= 10 AND price <= 100 ORDER BY price ASC
        // return BookModel.find({ price: { $gte: 10, $lte: 100 } }, ["_id", "name", "price"], { sort: "price" }).exec();

        // SELECT _id, name, price FROM books WHERE price >= 10 AND price <= 100 ORDER BY price DESC
        return BookModel.find(
            { price: { $gte: 10, $lte: 100 } }, // Filter
            ["_id", "name", "price"], // Projection
            { sort: "-price" }) // Options
            .exec();
    }

}

export const dataService = new DataService();
