<template>
    <div class="user">
        <el-breadcrumb class="breadcrumb-head" separator=">">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: 'user' }">用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>添加用户</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    const ResOk = 0;

    export default {
        data () {
            return {
                userlist: [],
                form: {}
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
  @import "./adduser.scss";
</style>