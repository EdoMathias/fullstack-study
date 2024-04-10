import { describe, it } from 'mocha';
import { expect } from 'chai';
import { app } from '../src/app';
import supertest from 'supertest';
import { IAuthorModel } from '../src/3-models/author-model';
import { IBookModel } from '../src/3-models/book-model';

// data-controller.ts unit tests:
describe('Testing DataController', () => {
  it('should return authors array', async () => {
    const response = await supertest(app.server).get('/api/authors');
    const authors: IAuthorModel[] = response.body;
    const firstAuthor = authors[0];
    expect(authors.length).to.be.greaterThanOrEqual(0);
    expect(authors).to.be.an('array');
    expect(authors).to.not.be.empty;

    // Check first author:
    expect(firstAuthor).to.contain.keys('_id', 'firstName', 'lastName');
  });

  it('sould return a single book', async () => {
    const response = await supertest(app.server).get(
      '/api/books/65e8b0bd80f6eec340806ffa'
    );
    const book: IBookModel = response.body;
    expect(Array.isArray(book)).to.be.false;
    expect(book).to.be.an('object');
    expect(book).to.contain.keys('_id', 'name', 'price', 'authorId');
  });

  it('should add a new book', async () => {
    const newBook = {
      name: 'Test Book',
      price: 100,
      authorId: '65e8b0bd80f6eec340806ffa',
    };
    const response = await supertest(app.server)
      .post('/api/books')
      .send(newBook);
    const addedBook: IBookModel = response.body;
    expect(Array.isArray(addedBook)).to.be.false;
    expect(addedBook).to.be.an('object');
    expect(addedBook).to.contain.keys('_id', 'name', 'price', 'authorId');
    expect(addedBook.name).equal(newBook.name);
    expect(addedBook.price).equal(newBook.price);
    expect(addedBook.authorId).equal(newBook.authorId);
  });
});
