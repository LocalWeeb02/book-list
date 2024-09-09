// book-collection.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../books.model';
import { NgFor } from '@angular/common';
import { selectBooks } from '../state/books.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.css'],
  standalone: true,
  imports: [
    NgFor
  ]
})
export class BookCollectionComponent {


  constructor(private store: Store) {}

  books$ = this.store.select(selectBooks);

  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();
}