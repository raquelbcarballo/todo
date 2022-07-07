
<template>
  <div>
    <h1>TODO LIST</h1>

    <div class="col-auto text-center">
      <h2>Today</h2>
      <ul v-for="task in 2" :key="task.id">
        <!--en vez de la constante se pone collection -->
        <div class="card">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" @click="deleteTask()"/>
            <label class="form-check-label"> Tarea </label>
            <button class="editButton"  @click="editTask()">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
                />
              </svg>
            </button>
          </div>
        </div>
      </ul>
    </div>

    <div class="col-auto text-center">
      <h2>Realizadas</h2>
      <ul v-for="task in 3" :key="task.id">
        <div class="card">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" checked />
            <label style="text-decoration: line-through"> Tarea 1 </label>
          </div>
        </div>
      </ul>
    </div>

    <div class="col-auto text-center">
      <button class="button">+ Añadir nueva tarea</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  data() {
    return {
      tasks: [],
      response: null,
      taskID: "",
      taskName: "",
    };
  },
  async created() {
    let response = await axios.get("http://13.38.23.243:5000/tasks", {});
    this.tasks = response.data.data;
  },
  methods: {
    deleteTask(id) {
      axios.delete("http://13.38.23.243:5000/task/" + id).then((res) => {
        console.log(res);
        location.reload();
      });
    },
    editTask(id) {
      axios
        .put("http://13.38.23.243:5000/task/" + id, {
          name: this.taskName,
        })
        .then((res) => {
          console.log(res);
          location.reload();
        });
    },
    addTask(id) {
      axios
        .post("http://13.38.23.243:5000/tasks/" + id, {
          name: this.taskName,
        })
        .then((res) => {
          console.log(res);
          location.reload();
        });
    },
  },
};
</script>



<style scoped>
.card {
  border: none;
  border-radius: var(--cardRadius);
  text-align: center;
  padding: var(--cardPadding);
}
h1 {
  padding: var(--textPadding);
  text-align: left;
  color: var(--primaryColor);
  font-size: var(--extralargeTextSize);
  font-weight: bold;
}
h2 {
  padding: var(--textPadding);
  text-align: left;
  color: var(--primaryColor);
  font-size: var(--largeTextSize);
  font-weight: bold;
}
label {
  text-align: left;
  color: var(--primaryColor);
  font-size: var(--mediumTextSize);
}
.btn {
  color: var(--backgroundCard);
}
.button {
  background: var(--secondaryColor);
  padding: var(--longButton);
  font-size: var(--mediumTextSize);
  color: var(--primaryColor);
  border: none;
  border-radius: var(--cardRadius);
  font-weight: bold;
}
.button:hover {
  opacity: 0.8;
}
.editButton {
  padding: var(--boxButton);
  color: var(--primaryColor);
}
.editButton:hover {
  opacity: 0.8;
}
</style>
