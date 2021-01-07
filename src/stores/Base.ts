import { decorate, observable, computed } from "mobx";
import { toast } from "react-toastify";
import { ITodo } from "../interfaces/index";

export class Base {
  public todos: ITodo[] = [
    { id: 1, text: "test todo 1", completed: true },
    { id: 2, text: "test todo 2", completed: false },
    { id: 3, text: "test todo 3", completed: false },
  ];

  public addTodo = (todo: ITodo) => {
    this.todos.push(todo);
    toast.success("Successfully added", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  public toggleCompleted = (id: number) => {
    const updatedTodos = this.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.todos = updatedTodos;
  };

  public updateTodo = (updatedTodo: ITodo) => {
    const updatedTodos = this.todos.map((todo) => {
      if (todo.id === updatedTodo.id) {
        return { ...updatedTodo };
      }
      return todo;
    });
    this.todos = updatedTodos;
  };

  public deleteTodo = (id: number) => {
    const updatedTodos = this.todos.filter((todo) => todo.id !== id);
    this.todos = updatedTodos;
    toast.info("Todo deleted", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  get todoProgress() {
    const completedCount = this.todos.filter((t) => t.completed).length;
    const totalCount = this.todos.length;
    return `${completedCount} / ${totalCount}`;
  }

  get completedTodos() {
    return this.todos.filter((todo) => todo.completed);
  }

  get incompleteTodos() {
    return this.todos.filter((todo) => !todo.completed);
  }
}

decorate(Base, {
  todos: observable,
  todoProgress: computed,
  completedTodos: computed,
  incompleteTodos: computed,
});
