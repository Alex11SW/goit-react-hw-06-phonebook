export const getAllBooks = (store) => store.books;
export const fetFavoriteBooks = (store) => {
  return store.books.filter(({ favorite }) => favorite);
};

export const getFilterdBooks = (store) => {
  const { books, filter } = store;
  if (!filter || typeof filter !== "string") {
    return books;
  }
  const normalizedFilter = filter.toLowerCase();
  const filteredBooks = books.filter(({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();

    return (
      normalizedName.includes(normalizedFilter) ||
      normalizedNumber.includes(normalizedFilter)
    );
  });
  return filteredBooks;
};
