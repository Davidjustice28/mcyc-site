import { Snippet } from "../types/database/snippets.types";

// represents componenet displaying the 15 snippets uploaded to db
export const mockSnippets: Array<Snippet> = [
  {id: "a", code: `const x = 5;\nconst y = 3;\nreturn(x + y);`, uploadDate: new Date().toString(), author_id: "author_a", language: "javascript", upvotes: 10, category: "basics", author_username: "test_author", description:"here is description example"},
  {id: "b", code: `const x = 5;\nconst y = 3;\nreturn(x + y);`, uploadDate: new Date().toString(), author_id: "author_b",  language: "javascript", upvotes: 5, category: "basics", author_username: "test_author", description:"here is description example"},
  {id: "c", code: `const x = 5;\nconst y = 3;\nreturn(x + y);`, uploadDate: new Date().toString(), author_id: "author_c", language: "python", upvotes: 0, category: "basics", author_username: "test_author", description:"here is description example"},
  {id: "d", code: `const x = 5;\nconst y = 3;\nreturn(x + y);`, uploadDate: new Date().toString(), author_id: "author_d", language: "javascript", upvotes: 3, category: "basics", author_username: "test_author", description:"here is description example"},
  {id: "e", code: `const x = 5;\nconst y = 3;\nreturn(x + y);`, uploadDate: new Date().toString(), author_id: "author_e", language: "javascript", upvotes: 1, category: "basics", author_username: "test_author", description:"here is description example"},
  {id: "f", code: `const x = 5;\nconst y = 3;\nreturn(x + y);`, uploadDate: new Date().toString(), author_id: "author_f", language: "php", upvotes: 0, category: "basics", author_username: "test_author", description:"here is description example"},
  {id: "g", code: `const x = 5;\nconst y = 3;\nreturn(x + y);`, uploadDate: new Date().toString(), author_id: "author_g", language: "javascript", upvotes: 532, category: "basics", author_username: "test_author", description:"here is description example"},
  {id: "h", code: `const x = 5;\nconst y = 3;\nreturn(x + y);`, uploadDate: new Date().toString(), author_id: "author_h", language: "python", upvotes: 14, category: "basics", author_username: "test_author", description:"here is description example"},
  {id: "i", code: `const x = 5;\nconst y = 3;\nreturn(x + y);`, uploadDate: new Date().toString(), author_id: "author_i", language: "javascript", upvotes: 3, category: "basics", author_username: "test_author", description:"here is description example"},
  {id: "j", code: `const x = 5;\nconst y = 3;\nreturn(x + y);`, uploadDate: new Date().toString(), author_id: "author_j", language: "erlang", upvotes: 0, category: "basics", author_username: "test_author", description:"here is description example"},
  {id: "k", code: `const x = 5;\nconst y = 3;\nreturn(x + y);`, uploadDate: new Date().toString(), author_id: "author_k", language: "javascript", upvotes: 0, category: "basics", author_username: "test_author", description:"here is description example"},
  {id: "l", code: `const x = 5;\nconst y = 3;\nreturn(x + y);`, uploadDate: new Date().toString(), author_id: "author_l", language: "python", upvotes: 3, category: "basics", author_username: "test_author", description:"here is description example"},
  {id: "m", code: `const x = 5;\nconst y = 3;\nreturn(x + y);`, uploadDate: new Date().toString(), author_id: "author_m", language: "javascript", upvotes: 0, category: "basics", author_username: "test_author", description:"here is description example"},
  {id: "n", code: `const x = 5;\nconst y = 3;\nreturn(x + y);`, uploadDate: new Date().toString(), author_id: "author_n", language: "golang", upvotes: 2, category: "basics", author_username: "test_author", description:"here is description example"},
  {id: "o", code: `const x = 5;\nconst y = 3;\nreturn(x + y);`, uploadDate: new Date().toString(), author_id: "author_o", language: "c#", upvotes: 1, category: "basics", author_username: "test_author", description:"here is description example"}

];