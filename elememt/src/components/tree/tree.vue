<template>
    <div class="tree">
        <el-menu router default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>用户管理</template>
                <el-menu-item :index="routes.user">用户列表</el-menu-item>
                <el-menu-item :index="routes.adduser">添加用户</el-menu-item>
            </el-submenu>
            <el-menu-item :index="routes.test">
                <i class="el-icon-menu"></i>测试
            </el-menu-item>
            <el-menu-item :index="routes.system">
                <i class="el-icon-setting"></i>系统
            </el-menu-item>
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