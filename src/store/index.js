// 使用vuex
import Vue from 'vue';
import Vuex from 'vuex';
// 使用
Vue.use(Vuex);

// 获取 todo store
const modulesFiles = require.context('./modules', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    // set './app.js' => 'app'
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    return modules
}, {})

 console.log('modules', modules)
export default new Vuex.Store({
    modules
})