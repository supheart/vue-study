<template>
    <div class="tree">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>用户管理</template>
                <router-link class="route" :to="routes.user">
                    <el-menu-item index="1-1">用户</el-menu-item>
                </router-link>
            </el-submenu>
            <router-link class="route" :to="routes.test">
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>测试
                <!--<span@click="test">测试</span>-->
                </el-menu-item>
            </router-link>
            <router-link class="route" :to="routes.system">
                <el-menu-item index="3">
                    <i class="el-icon-setting"></i>系统
                </el-menu-item>
            </router-link>
        </el-menu>
    </div>
</template>

<script>
    export default {
        props: {
            routes: {
                type: Object
            },
            menu: {
                type: Object
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            test() {
                console.log(this.routes);
            }
        }
    }
</script>

<style lang="sass">
    @import "./tree.scss";
</style>