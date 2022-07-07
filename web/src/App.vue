<template>
  <TodoComponent />
</template>

<script>
import TodoComponent from "./components/TodoComponent.vue";

export default {
  name: "App",
  components: {
    TodoComponent,
  },
};
</script>

<style>
#app {
  background-color: var(--primaryColor);
  font-family: sans-serif;
  text-align: center;
  padding: 10%;
}
:root {
  --cardRadius: 1em;
  --cardMargin: 1em;
  --cardPadding: 1em;
  --extrasmallTextSize: 50%;
  --smallTextSize: 75%;
  --mediumTextSize: 100%;
  --largeTextSize: 150%;
  --extralargeTextSize: 200%;
  --primaryColor: #5b7fb1;
  --secondaryColor: #588a43;
  --whiteColor: #ffffff;
  --longButton: 3%;
}
#principalCard {
  background-color: var(--whiteColor);
  border: 3px solid;
  border-color: var(--secondaryColor);
  border-radius: var(--cardRadius);
  text-align: center;
  padding: var(--cardPadding);
  justify-content: space-between;
}
.card {
  border-radius: var(--cardRadius);
  text-align: center;
  padding: var(--cardPadding);
  border: 3px solid;
  border-color: var(--secondaryColor);
  justify-content: space-between;
}
h1 {
  padding: var(--textPadding);
  text-align: left;
  color: var(--primaryColor);
  font-size: var(--largeTextSize);
  font-weight: bold;
}
h2 {
  padding: var(--textPadding);
  text-align: left;
  color: var(--primaryColor);
  font-size: var(--mediumTextSize);
  font-weight: bold;
}
input {
  border: none;
  border-bottom: 1px solid var(--primaryColor);
}
.todoTask {
  text-align: left;
  color: var(--primaryColor);
  font-size: var(--smallTextSize);
}
.doneTask {
  text-align: left;
  color: var(--primaryColor);
  font-size: var(--smallTextSize);
  text-decoration: line-through;
}
.btn {
  color: var(--whiteColor);
}
.button {
  background: var(--secondaryColor);
  padding: var(--longButton);
  font-size: var(--smallTextSize);
  color: var(--whiteColor);
  border: none;
  border-radius: var(--cardRadius);
  font-weight: bold;
}
.button:hover {
  opacity: 0.8;
}
.editButton {
  background: transparent;
  font-size: var(--smallTextSize);
  color: var(--primaryColor);
  border: none;
  font-weight: bold;
}
.editButton:hover {
  opacity: 0.8;
}
</style>
