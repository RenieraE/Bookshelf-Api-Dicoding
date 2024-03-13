const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require("./handler");

const createRouting = (method, path, handler) => {
  return {
    method,
    path,
    handler,
  };
};

const routes = [
  createRouting("POST", "/books", addBookHandler),
  createRouting("GET", "/books", getAllBooksHandler),
  createRouting("GET", "/books/{bookId}", getBookByIdHandler),
  createRouting("PUT", "/books/{bookId}", editBookByIdHandler),
  createRouting("DELETE", "/books/{bookId}", deleteBookByIdHandler),
];

module.exports = routes;
