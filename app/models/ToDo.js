export class ToDo {
  constructor(data) {
    this.completed = data.completed;
    this.description = data.description;
    this.id = data.id;
  }

  get ToDoTemplate() {
    return `
    <div class="d-flex flex-row justify-content-center">
    <input onchange="app.ToDosController.toggleCompleted('${this.id
      }')" type="checkbox" class="checky" ${this.completed ? "checked" : ""}>
                  <h3>${this.description}</h3>
                  <button onclick="app.ToDosController.deleteToDo('${this.id
      }')" class="btn btn-outline-light ms-2 mb-2">
                    <i class="mdi mdi-delete"></i>
                  </button>
                </div>
    `;
  }
}
// completed: Boolean, required
// description: String, required
// creatorId: SchemaObjectId, required
// *creator: Object (Virtual Added by Database)
// *createdAt: ISO Timestamp (Virtual Added by Database)
// *updatedAt: ISO Timestamp (Virtual Added by Database)
