<template>
    <div class="user">
        <el-breadcrumb class="breadcrumb-head" separator=">">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: 'user' }">用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-table :data="userlist" stripe border style="width: 100%">
            <el-table-column prop="username" label="用户名" width="180"></el-table-column>
            <el-table-column prop="nickname" label="昵称" width="180"></el-table-column>
            <el-table-column prop="desc" label="描述"></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template scope="scope">
                    <el-button @click="handleClick" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    const ResOk = 0;

    export default {
        data () {
            return {
                userlist: []
            }
        },
        created() {
            console.log('start get api data');
            this.$http.get('/api/user/list').then((response) => {
                response = response.body;
                if (response.code === ResOk) {
                    this.userlist = response.data;
                    console.log('userlist: ', this.userlist);
                }
            });
        },
        methods: {
            handleClick() {
                console.log('查看');
            }
        }
    }
</script>

<style>
  @import "./user.scss";
</style>