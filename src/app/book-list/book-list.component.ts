// // book-list.component.ts
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Book } from "../books.model";
import { NgFor } from "@angular/common";
import { Store } from "@ngrx/store";
import { selectBookCollection } from "../state/books.selectors";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list-component.html',
  styleUrl: './book-list.component.css',
  standalone: true,
  imports: [
      NgFor
  ]
})
export class BookListComponent {

  constructor(private store: Store) {}
  
  bookCollection$ = this.store.select(selectBookCollection);


  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<string>();

}