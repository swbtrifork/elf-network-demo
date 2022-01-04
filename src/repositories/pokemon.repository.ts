import { createState, Store } from "@ngneat/elf";
import { selectAll, setEntities, withEntities } from "@ngneat/elf-entities";
import {
  createRequestDataSource,
  createRequestsCacheOperator,
  updateRequestCache,
  withRequestsCache,
  withRequestsStatus,
} from "@ngneat/elf-requests";
import { Todo } from "../interfaces";

const { state, config } = createState(
  withEntities<Todo>(),
  withRequestsStatus(),
  withRequestsCache()
);

const store = new Store({ state, config, name: "todos" });

export const skipWhileTodosCached = createRequestsCacheOperator(store);

export const todosDataSource = createRequestDataSource({
  store,
  data$: () => store.pipe(selectAll()),
  requestKey: "todos",
  dataKey: "todos",
  idleAsPending: true,
});

export const setTodos = (todos: Todo[]) => {
  store.update(
    updateRequestCache("todos"),
    setEntities(todos),
    todosDataSource.setSuccess()
  );
};
