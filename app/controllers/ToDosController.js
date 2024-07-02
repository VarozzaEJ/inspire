import { toDosService } from "../services/ToDosService.js";
import { Pop } from "../utils/Pop.js";
import { getFormData } from "../utils/FormHandler.js";
import { AppState } from "../AppState.js";
import { setHTML, setText } from "../utils/Writer.js";

export class ToDosController {
  constructor() {
    AppState.on("account", this.getToDos)
    AppState.on("ToDos", this.drawToDos);
    AppState.on("account", this.drawToDos)
    AppState.on("ToDos", this.drawUncheckedNumberOfToDos)
  }

  async makeToDo() {
    try {
      event.preventDefault();
      const form = event.target;
      let makingTask = getFormData(form);
      await toDosService.makeToDo(makingTask);
      /**@ts-ignore */
      form.reset()
    } catch (error) {
      Pop.toast("You must be logged in to make a ToDo");
    }
  }



  async getToDos() {
    try {
      await toDosService.getToDos()
    } catch (error) {
      Pop.toast(error)
    }
  }

  drawToDos() {
    const toDo = AppState.ToDos;
    let innerHTML = "";
    toDo.forEach((task) => (innerHTML += task.ToDoTemplate));
    setHTML("toDoList", innerHTML);
  }

  drawUncheckedNumberOfToDos() {
    const ToDos = AppState.ToDos
    const uncheckedTodos = ToDos.filter((Todo) => Todo.completed == false)
    setText("uncheckedCount", `${uncheckedTodos.length}`)
  }

  async toggleCompleted(taskId) {
    try {
      await toDosService.toggleCompleted(taskId);
    } catch (error) {
      Pop.toast(error);
    }
  }

  async deleteToDo(taskId) {
    try {
      const wantsToDelete = await Pop.confirm("Are you sure you want to delete that task?")
      if (!wantsToDelete) return
      await toDosService.deleteToDo(taskId);
    } catch (error) {
      Pop.toast(error);
    }
  }
}
