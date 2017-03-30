<template>
    <div class="header">
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-submenu class="user-wrapper" index="user">
                <template slot="title">
                    <span class="user-info">
                        <img src="http://admintest.nzlm.cn/images/user.png" width="46" height="46" alt="avatar">
                    <span>欢迎登录: {{user.username}}</span>
                    </span>
                </template>
                <el-menu-item index="user-detail">详细</el-menu-item>
                <el-menu-item index="user-exit">退出</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                activeIndex: '1',
                user: {
                    username: 'milo'
                }
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style lang="sass">
  @import "./header.scss";
</style>