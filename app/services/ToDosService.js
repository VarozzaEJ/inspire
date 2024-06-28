import { AppState } from "../AppState.js";
import { ToDo } from "../models/ToDo.js";
import { api } from "./AxiosService.js";
import { Pop } from "../utils/Pop.js";


class ToDosService {

  async getToDos() {
    const response = await api.get("api/todos")
    const newToDos = response.data.map((toDoPOJO) => new ToDo(toDoPOJO))

    AppState.ToDos = newToDos
    console.log(newToDos);
  }
  async makeToDo(makingTask) {
    const task = await api.post("/api/todos", makingTask);
    const newTodo = new ToDo(task.data);
    AppState.ToDos.push(newTodo);
    console.log(AppState.ToDos);
  }


  async toggleCompleted(taskId) {
    const taskIndex = AppState.ToDos.findIndex((task) => task.id == taskId);
    const foundToDo = AppState.ToDos[taskIndex]

    const taskData = { completed: !foundToDo.completed };
    const response = await api.put(`api/todos/${taskId}`, taskData);
    const updatedToDo = new ToDo(response.data);
    AppState.ToDos.splice(taskIndex, 1, updatedToDo)
    console.log(AppState.ToDos);

  }

  async deleteToDo(taskId) {
    await api.delete(`api/todos/${taskId}`)
    const taskIndex = AppState.ToDos.findIndex((task) => task.id == taskId)
    if (taskIndex == -1) return Pop.toast("You messed up on find Index dawg")
    AppState.ToDos.splice(taskIndex, 1)
  }
}

export const toDosService = new ToDosService();
