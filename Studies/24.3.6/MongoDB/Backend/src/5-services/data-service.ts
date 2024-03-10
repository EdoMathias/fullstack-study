import { AuthorModel, IAuthorModel } from '../3-models/author-model';
import { BookModel, IBookModel } from '../3-models/books-model';

class DataService {
  // Get all authors:
  public async getAllAuthors(): Promise<IAuthorModel[]> {
    return AuthorModel.find().exec();
  }

  // Get author by id:
  public async getAuthorById(_id: string): Promise<IAuthorModel> {
    return AuthorModel.findById(_id).exec();
  }

  // Add author:
  public async addAuthor(author: IAuthorModel): Promise<IAuthorModel> {
    return author.save();
  }

  //------------------------------------------------------------------------//

  // Get all books:
  public async getAllBooks(): Promise<IBookModel[]> {
    // return BookModel.find().exec(); // Get all books WITHOUT virutal fields.
    return BookModel.find().populate('author').exec(); // Get all books WITH virutal fields.
  }

  // Get book by id:
  public async getBookById(_id: string): Promise<IBookModel> {
    return BookModel.findById(_id).exec();
  }

  // Add book:
  public async addBook(book: IBookModel): Promise<IBookModel> {
    return book.save();
  }

  // Get query books:
  public async getQueryBooks(): Promise<IBookModel[]> {
    // Will get all the books where price = 50
    // return BookModel.find({
    //   price: 50,
    // }).exec();

    // Will get all the books where price >= 40 and <= 60
    // return BookModel.find({
    //   price: { $gte: 40, $lte: 60 },
    // }).exec();

    // Will get ONLY _id and name of books where price >= 40 and <= 60
    // return BookModel.find(
    //   {
    //     price: { $gte: 40, $lte: 60 },
    //   },
    //   ['_id', 'name']
    // ).exec();

    // Will get ONLY _id and name of books where price >= 10 and <= 100 and
    // will order by price ASC
    // return BookModel.find(
    //   {
    //     price: { $gte: 10, $lte: 100 },
    //   },
    //   ['_id', 'name', 'price'],
    //   {
    //     sort: 'price',
    //   }
    // ).exec();

    // Will get ONLY _id and name of books where price >= 10 and <= 100 and
    // will order by price DSC
    return BookModel.find(
      {
        price: { $gte: 10, $lte: 100 }, // Filter
      },
      ['_id', 'name', 'price'], // Projection
      {
        sort: '-price', // Options
      }
    ).exec();
  }
}

export const dataService = new DataService();
