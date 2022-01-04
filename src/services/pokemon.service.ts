import { fromFetch } from "rxjs/fetch";
import { tap } from "rxjs/operators";
import { Todo } from "../interfaces";
import {
  setTodos,
  skipWhileTodosCached,
  todosDataSource,
} from "../repositories/pokemon.repository";

export const fetchTodos = (limit = 10) => {
  return fromFetch<Todo[]>(
    `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`,
    {
      selector: (response) => response.json(),
    }
  ).pipe(
    tap(setTodos),
    skipWhileTodosCached("todos"),
    todosDataSource.trackRequestStatus()
  );
};
