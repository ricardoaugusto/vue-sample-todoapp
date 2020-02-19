<template>
  <table class="uk-table uk-table-divider uk-table-hover uk-table-small">
    <thead>
      <tr>
        <td></td>
        <td>Item</td>
        <td></td>
      </tr>
    </thead>
    <tbody v-for="(item, index) in todos" :key="index">
      <TodoItem :todo="item" />
    </tbody>
  </table>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "Todos",
  components: {
    TodoItem
  },
  props: {
    todos: Array
  }
};
</script>

<style scoped lang="scss"></style>
