<template>
  <div id="principalCard">
    <h1>TODO LIST</h1>

    <div class="col-auto text-center" v-if="taskTodo != null">
      <h2>Hoy</h2>
      <ul v-for="task in tasks" :key="task.id">
        <div v-if="!task['done']" class="card">
          <form>
            <input type="checkbox" value="task['done']" @click="deleteTask(task['id'])" />
            <input
              v-if="editing"
              type="text"
              v-model="form.name"
              placeholder=""
            />
            <label v-else class="todoTask"> {{ task["name"] }}</label>

            <button
              type="submit"
              class="editButton"
              @click="editTask(task['id'])"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                class="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                />
              </svg>
            </button>
          </form>
        </div>
      </ul>
    </div>
    <hr>
    <div class="col-auto text-center" v-if="taskDone != null">
      <h2>Realizadas</h2>
      <ul v-for="task in tasks" :key="task.id">
        <div v-if="task['done']" class="card">
          <label class="doneTask">{{ task["done"] }} {{ task["name"] }} </label>
        </div>
      </ul>
    </div>
    <hr>
    <div class="col-auto text-center">
      <button class="button" @click="newTask()">+ Añadir nueva tarea</button>
    </div>

    <div class="col-auto text-center" v-if="newTaskBool">
      <h2>Nueva nota</h2>
      <div class="card">
        <form>
          <input type="text" v-model="form.name" />
          <button type="submit" class="button" @click="addTask()">
            Guardar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tasks: [],
      taskTodo: [],
      taskDone: [],
      response: null,
      id: "",
      newTaskBool: false,
      editing: false,
      form: {
        taskName: "",
      },
    };
  },
  async created() {
    let response = await axios.get("http://localhost:3000/api/tasks");
    this.tasks = response.data;
  },
  methods: {
    deleteTask(id) {
      axios.delete("http://localhost:3000/api/tasks/" + id).then((res) => {
        console.log(res);
      });
    },
    editTask(id) {
      this.editing = true;
      axios
        .put("http://localhost:3000/api/tasks/" + id, {
          name: this.taskName,
        })
        .then((res) => {
          console.log(res);
          this.editing = false;
        });
    },
    newTask() {
      this.newTaskBool = true;
    },
    addTask() {
      this.newTaskBool = false;
      axios.post("http://localhost:3000/api/tasks", this.form).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
