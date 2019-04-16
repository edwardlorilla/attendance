require('./bootstrap');

window.Vue = require('vue')
import {Loading,Message, Form, FormItem, Input, Button} from 'element-ui';
Vue.prototype.$message = Message;
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Loading)
new Vue({
    render: h => h(require('./components/Auth/Login.vue').default)
}).$mount('#login');