//books.actions.ts
import { createActionGroup, props } from "@ngrx/store";
import { Book } from "../books.model";

export const BooksActions = createActionGroup({
    source: 'Books',
    events: {
        'Add Book': props<{ bookId: string }>(),
        'Remove Book': props<{ bookId: string }>(),
    },
});

export const BooksApiActions = createActionGroup({
    source: 'BooksAPI',
    events: {
        'Retrieved Book List': props<{ books: ReadonlyArray<Book>}>(),
    }
})