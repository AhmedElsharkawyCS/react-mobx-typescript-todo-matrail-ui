import { createContext } from "react";
import { TodoStore } from "./TodoStore";

export const RootStoreContext = createContext({
  todoStore: new TodoStore(),
});
