<template>
    <el-container :style="{padding: '0 50px'}">
        <el-main :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
            {{form.name}}
            <el-container>
                <el-aside :style="{width: '150px', padding: '24px 0', minHeight: '280px', background: '#fff'}">
                    <el-menu :unique-opened="true"
                             :default-active="$route.path"
                             :router="true">
                        <component v-for="(item, index) in nav"  :key="index" :is="item.type"
                                   :index="item.data.route"
                                   :data="item.data"></component>
                        </el-menu>
                    </el-aside>
                <el-main>
                    <router-view ></router-view>
                    </el-main>
                </el-container>
            </el-main>

        </el-container>
    </template>
<script>
    import MenuItem from './../Navigation/menu-item.vue'
    export default{
        components: {
            MenuItem
        },
        data(){
            return {
                form: {
                    name: ''
                },
                nav: [
                    {
                        type: 'menu-item',
                        data: {
                            route: 'edit-user',
                            text: 'Profile'
                        }
                    },{
                    type: 'menu-item',
                        data: {
                        route: 'attendance-user',
                            text: 'Attendance'
                        }
                    },
                    ],
            }
        },
    }
    </script>