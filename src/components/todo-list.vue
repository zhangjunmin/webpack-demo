<template>
  <div class="datas">
    <ul class="todo-list" v-if="todos && todos.length">
      <li v-for="(todo, index) in todos" class="todo-item" :key="todo.id">
        <TodoItem
          @remove-todo="removeTodo"
          :todo="todo"
          :index="index"
        ></TodoItem>
      </li>
    </ul>
    <div class="no-data" v-else>no data</div>
  </div>
</template>
<script>
import TodoItem from "./todo-item.vue";
export default {
  props: ["todos"],
  components: {
    TodoItem,
  },
  methods: {
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>
<style>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.app li {
  box-sizing: border-box;
  width: 400px;
  padding: 0 15px;
  height: 36px;
  line-height: 36px;
  font-size: 16px;
}
.app li {
  position: relative;
  margin: 0 auto;
  padding: 0 30px;
  border-bottom: 1px dashed #999;
}
.app li:hover {
  background-color: #409eff;
  color: #fff;
}
.no-data {
  height: 100px;
  line-height: 100px;
  color: #999;
  text-align: center;
}
</style>