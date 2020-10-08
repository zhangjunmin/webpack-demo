<template>
  <div class="app">
    <header>
      <h1>TODO</h1>
    </header>
    <section class="main">
      <div class="new-todo">
        <el-input
          @change="add"
          v-model="value"
          class=""
          type="text"
          placeholder="please input new todo"
          maxlength="25"
        ></el-input>
      </div>
      <TodoList :todos="showTodos"></TodoList>
    </section>

    <footer>
      <div class="left">left：{{ leftCount }}</div>
      <div class="filter-todos">
        <el-radio @change="changeCond(cond)" v-model="cond" label="all"
          >所有</el-radio
        >
        <el-radio @change="changeCond(cond)" v-model="cond" label="unfinished"
          >未完成</el-radio
        >
        <el-radio @change="changeCond(cond)" v-model="cond" label="finished"
          >已完成</el-radio
        >
      </div>
    </footer>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
import TodoList from "./todo-list.vue";

export default {
  data() {
    return {
      value: "",
      cond: "all",
    };
  },
  // 创建完，这个时候，data已经初始化成功
  created(){
    console.log('axios22', this.$axios)
    this.fetchTodos('/todo/list');
  },
  components: {
    TodoList,
  },
  computed: {
    ...mapGetters("todo", ["showTodos", "leftCount"]),
  },

  methods: {
    ...mapActions("todo", ["addTodo", "changeCond","fetchTodos"]),
    add() {
      var url = "/todo/add";
      const text = this.value;
      this.value = "";
      this.addTodo({text, url});
    },
  },
};
</script>


<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.app {
  display: flex;
  flex-direction: column;
  width: 700px;
  margin: 0 auto;
  color: #606266;
  min-height: 600px;
  overflow: hidden;
  border: 1px solid #eee;
  box-shadow: 0 0 10px #999;
}
.main {
  height: 600px;
}

.app input {
  margin: 30px auto 0;
  display: block;
}
h1 {
  text-align: center;
}
footer {
  width: 400px;
  margin: 10px auto 30px;
}
footer::after {
  content: " ";
  display: block;
  height: 0;
}
footer .left {
  float: left;
}
footer .filter-todos {
  float: right;
}
footer .el-radio {
  margin-right: 10px;
}
</style>