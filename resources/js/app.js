require('./bootstrap');

window.Vue = require('vue');

import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(ElementUI, {locale})
Vue.use(VueRouter)
Vue.use(Vuex)

Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
};
function hasPermission(roles, route) {
    let permissions = []
    if (roles) {
        Object.entries(roles).forEach(entry => {
            if (entry[1]) {
                permissions.push(entry[0])
            }
        })
    }
    if (route.meta && route.meta.roles) {
        return permissions.some(role => route.meta.roles.indexOf(role) >= 0)
    }
    else if (route.meta && route.meta.can) {
        return permissions.some(can => route.meta.can.indexOf(can) >= 0)
    } else {
        return true
    }
}

function filterAsyncRouter(asyncRouterMap, roles, can) {
    const accessedRouters = asyncRouterMap.filter(route => {
        if (hasPermission(roles, route)) {
            if (route.children && route.children.length) {
                route.children = filterAsyncRouter(route.children, can)
            }
            return true
        }
        return false
    })
    return accessedRouters}

    $(window).on('load', function () {
        axios.get('/api/user').then(response => {
            const constantRoute = [
                {
                    path: '/',
                    name: 'dashboard',
                    component: resolve => require(["./components/ExampleComponent"], resolve),
                },
                {
                    path: '*',
                    name: 'not_found',
                    component: resolve => require(["./components/Error/404"], resolve),
                }
            ];
            const asyncRoute = [
                {
                    path: '/users',
                    meta: {
                        roles: ['superadministrator']
                    },
                    component: resolve => require(["./components/user/index.vue"], resolve),
                    children: [
                        {
                            path: '',
                            name: 'view-user',
                            component: resolve => require(["./components/user/view.vue"], resolve),
                            meta: {can: ['read-users']}
                        },
                        {
                            path: 'create',
                            name: 'create-user',
                            component: resolve => require(["./components/user/create.vue"], resolve),
                            meta: {can: ['create-users']}
                        },
                        {
                            path: 'edit/:id',
                            component: resolve => require(["./components/user/config.vue"], resolve),
                            meta: {can: ['update-users']},
                            children: [
                                {
                                    path: '',
                                    name: 'edit-user',
                                    component: resolve => require(["./components/user/edit/index.vue"], resolve),
                                }, {
                                    path: 'attendances',
                                    name: 'attendance-user',
                                    component: resolve => require(["./components/user/edit/attendance.vue"], resolve),
                                },
                            ]
                        },
                    ]
                },
            ]
            const store = new Vuex.Store({
                state: {
                    loading: false,
                    validate: {
                        required: [
                            {required: true}
                        ]
                    },
                    addRouters: [],
                    routers: constantRoute,
                    user: response.data || {},
                },
                mutations: {
                    loading(state, data) {
                        state.loading = data
                    },
                    set_router: (state, routers) => {
                        state.addRouters = routers
                        state.routers = constantRoute.concat(routers)
                    }
                },
                actions: {
                    LOADING(context, argument) {
                        context.commit('loading', argument)
                    },
                    GenerateRoutes(context, data) {
                        return new Promise(resolve => {
                            let permissions = []
                            if (data.roles) {
                                Object.entries(data.roles).forEach(entry => {
                                    if (entry[1]) {
                                        permissions.push(entry[0])
                                    }
                                })
                            }

                            const roles = permissions
                            let accessedRouters
                            accessedRouters = filterAsyncRouter(asyncRoute, response.data.roles, response.data.can)
                            context.commit('set_router', accessedRouters)
                            resolve()
                        })
                    }
                },
                getters: {
                    ROLES(state) {
                        return state.user.roles
                    },
                    CAN(state) {
                        return state.user.can
                    },
                    ROUTER(state) {
                        return state.routers
                    }
                }
            })
            const router = new VueRouter({
                base: 'home',
                mode: 'history',
                routes: constantRoute
            });

            store.dispatch('GenerateRoutes', {roles: store.getters.ROLES}).then(() => {
                router.addRoutes(filterAsyncRouter(asyncRoute, store.getters.ROLES, store.getters.CAN))
            }).then(() => {
                new Vue({
                    router,
                    store,
                    render: h => h(require('./components/App.vue').default)
                }).$mount('#app')
            })
        })
    });