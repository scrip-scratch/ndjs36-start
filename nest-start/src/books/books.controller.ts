import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book, CreateBookDto } from './book.interface';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    this.bookService.create(createBookDto);
  }

  @Get()
  async findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }
}
