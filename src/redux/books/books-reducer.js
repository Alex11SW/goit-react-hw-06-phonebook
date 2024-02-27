import { addBook, deleteBook } from "./books-actions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = [];
const booksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addBook, (state, { payload }) => [...state, payload])
    .addCase(deleteBook, (state, { payload }) =>
      state.filter((item) => item.id !== payload)
    );
});

// const booksReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case addBook.type:
//       return [...state, payload];
//     case deleteBook.type:
//       return state.filter((item) => item.id !== payload);
//     default:
//       return state;
//   }
// };

export default booksReducer;
