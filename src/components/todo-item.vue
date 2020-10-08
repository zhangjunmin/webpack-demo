<template>
  <div :class="[todo.status ? 'complete' : '']">
    <span
      @click="editTodo({url:`/todo/edit/${todo.id}`,todo: {
        status: !todo.status
      }})"
      :class="[
        'item-status',
        todo.status ? 'el-icon-folder-checked' : 'el-icon-folder',
      ]"
    ></span>
    {{ todo.text }}
    <span
      class="del el-icon-error"
      @click="removeTodo(`/todo/delete/${todo.id}`)"
    ></span>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: ["todo", "index"],
  data() {
    return {};
  },
  methods: {
    ...mapActions("todo", ["removeTodo", "editTodo"]),
  },
};
</script>
<style>
.app input {
  box-sizing: border-box;
  width: 400px;
  padding: 0 15px;
  height: 36px;
  line-height: 36px;
  font-size: 16px;
}
.todo-item .del {
  position: absolute;
  display: none;
  vertical-align: middle;
  right: 8px;
  top: 8px;
  cursor: pointer;
}
.app li:hover .del {
  display: inline-block;
}
.todo-item .item-status {
  position: absolute;
  left: 8px;
  top: 8px;
  cursor: pointer;
}
.todo-item .complete {
  text-decoration: line-through;
}
.app li:last-child {
  border-bottom: none;
}
</style>