import { Injectable } from '@nestjs/common';
import { Book } from './book.interface';

const defaultBooks: Book[] = [
  {
    id: '0',
    title: `Book 0`,
    description: `Description 0`,
    authors: `Author 0`,
    favorite: `0`,
    fileCover: `cover_0.png`,
    fileName: `book_0.pdf`,
  },
  {
    id: '1',
    title: `Book 1`,
    description: `Description 1`,
    authors: `Author 1`,
    favorite: `1`,
    fileCover: `cover_1.png`,
    fileName: `book_1.pdf`,
  },
  {
    id: '2',
    title: `Book 2`,
    description: `Description 2`,
    authors: `Author 2`,
    favorite: `2`,
    fileCover: `cover_2.png`,
    fileName: `book_2.pdf`,
  },
];

@Injectable()
export class BooksService {
  private readonly books: Book[] = defaultBooks;

  create(book: Book) {
    this.books.push(book);
  }

  findAll(): Book[] {
    return this.books;
  }
}
