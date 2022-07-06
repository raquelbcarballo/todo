<template>
  <div class="hello">
    <h1>TODO LIST</h1>
    <h3>Today</h3>
    <ul>
      <div class="card">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Tarea 1
          </label>
        </div>
      </div>
    </ul>
    <ul>
      <div class="card">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Tarea 2
          </label>
        </div>
      </div>
    </ul>
    <ul>
      <div class="card">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Tarea 3
          </label>
        </div>
      </div>
    </ul>
    <h3>Realizadas</h3>
    <ul>
      <div class="card">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked" checked
          />
          <label class="form-check-label" for="flexCheckDefault" style="text-decoration:line-through;">
            Tarea 1
          </label>
        </div>
      </div>
    </ul>
    <button type="button">+ Añadir nueva tarea</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
