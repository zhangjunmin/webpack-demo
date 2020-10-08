// state mutation action getter

import util from '../../utils/index';

console.log('util',util)

// data
const state = {
    // 数据
    todos: [],
    cond: 'all'
}

// computed
const getters = {
    // 获取要展示的todo
    showTodos(state) {
        return state.todos.filter((todo) => {
            switch (state.cond) {
                case 'all':
                    return true;
                case 'unfinished':
                    return !todo.status;
                case 'finished':
                    return todo.status;
                default:
                    return true;
            }
        })
    },
    // 显示未完成个数
    leftCount(state) {
        return state.todos.filter((todo) => !todo.status).length
    }
}

// methods 添加，删除，改变
const mutations = {
    // 查询todos
    fetchTodos(state, todos) {
        state.todos = todos;
    },
    // 添加 ，接受一个todo
    addTodo(state, todo) {
        if (!todo) return;
        state.todos.push(todo)
    },
    // 删除 ，接受一个index
    removeTodo(state, index) {
        state.todos.splice(index, 1)
    },
    // 编辑
    editTodo(state, index) {
        var todo = state.todos[index];
        todo.status = !todo.status;
    },
    // 切换筛选条件
    changeCond(state, cond) {
        state.cond = cond;
    }
}

const actions = {
    // 查询todos
    async fetchTodos(context, url) {
        const res = await util.request(url);
        console.log('res', res)
        if(res.status == 200){
            context.commit('fetchTodos', res.data.todos)
        }
    },
    // 添加 ，接受一个todo
    async addTodo(context, {text, url}) {
        console.log('add', text, url)
        const length = state.todos.length;
        const todo = {
            id: length ? state.todos[length - 1].id + 1 : 1,
            text,
            status: false
        };
        const res = await util.request(url, todo, 'post');
        if(res.status == 200){
            context.commit('addTodo', res.data.todo)
        }else {
            console.log('err',res.error)
            // 新增报错
        }
        
    },
    // 删除 ，接受一个index
    async removeTodo(context, url) {
        const res = await util.request(url, null, 'post');
        if(res.status == 200){
            context.commit('removeTodo', res.data.index)
        }else {
            console.log('err',res.error)
        }
    },
    // 编辑
    async editTodo(context, {url,todo}) {
        const res = await util.request(url, todo, 'post');
        if(res.status == 200){
            context.commit('editTodo', res.data.index)
        }else {
            console.log('err',res.error)
        }
    },
    // 切换筛选条件
    changeCond(context, cond) {
        context.commit('changeCond', cond)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}