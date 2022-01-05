import { fromFetch } from "rxjs/fetch";
import { tap } from "rxjs/operators";
import { Todo } from "../interfaces";
import {
  setTodos,
  skipWhileTodosCached,
} from "../repositories/todos.repository";

export const fetchTodos = (limit = 10) => {
  return fromFetch<Todo[]>(
    `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`,
    {
      selector: (response) => response.json(),
    }
  ).pipe(
    tap((todos) => setTodos(todos, limit)),
    skipWhileTodosCached(`todos=${limit}`)
  );
};
