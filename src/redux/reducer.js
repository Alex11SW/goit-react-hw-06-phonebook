import { ADD_BOOK, DELETE_BOOK } from "./books/books-constants";
import { SET_FILTER } from "./filter/filter-constants";

const initialState = {
  books: [],
  filter: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BOOK:
      const { books } = state;
      return {
        ...state,
        books: [...books, payload],
      };
    case DELETE_BOOK:
      const newBooks = state.books.filter((item) => item.id !== payload);
      return {
        ...state,
        books: newBooks,
      };

    case SET_FILTER:
      return {
        ...state,
        filter: payload,
      };
    default:
      return state;
  }
};

export default reducer;
