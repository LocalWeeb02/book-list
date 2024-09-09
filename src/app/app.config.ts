// app.config.ts
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(),
    provideRouter(routes), 
    provideStore({
      books: booksReducer, 
      collection: collectionReducer,
    }),
    
  ],
  
};