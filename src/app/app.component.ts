import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookListComponent } from './book-list/book-list.component';
import { selectBookCollection, selectBooks } from './state/books.selectors';
import { GoogleBooksService } from './book-list/books.service';
import { Store } from '@ngrx/store';
import { BooksActions, BooksApiActions } from './state/books.actions';
import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookCollectionComponent, BookListComponent, AsyncPipe, AsyncPipe, 
// TODO: `HttpClientModule` should not be imported into a component directly.
// Please refactor the code to add `provideHttpClient()` call to the provider list in the
// application bootstrap logic and remove the `HttpClientModule` import from this component.
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  onAdd(bookId : string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }
  
  constructor(private bookService: GoogleBooksService, private store: Store) {}

  ngOnInit() {
    this.bookService
    .getBooks()
    .subscribe((books) =>
      this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
    );
  }
}