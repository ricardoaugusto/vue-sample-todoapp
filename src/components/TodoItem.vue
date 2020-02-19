<template>
  <tr :id="todo.id">
    <td class="uk-table-shrink">
      <label><input type="checkbox" :checked="todo.completed"/></label>
    </td>
    <td>
      {{ todo.title }}
    </td>
    <td></td>
  </tr>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: Object
  }
};
</script>

<style scoped lang="scss">
label {
  cursor: pointer;
}
</style>
