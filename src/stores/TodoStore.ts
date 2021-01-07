import { decorate } from "mobx";
// import { toast } from "react-toastify";
import { Base } from "./Base";

export class TodoStore extends Base {
  constructor() {
    super();
    console.log("Todo child class");
  }
}

decorate(TodoStore, {});
