// books.selectors.ts
import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { Book } from "../books.model";

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books')

export const selectCollectionState = createFeatureSelector<ReadonlyArray<string>>('collection')

export const selectBookCollection = createSelector(
    selectBooks,
    selectCollectionState,
    (books, collection) => {
        return collection
            .map((id) => books.find((book) => book.id === id))
            .filter((book): book is Book => !!book);
    }
)