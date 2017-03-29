<template>
    <div id="app">
        <div><button @click="test">测试</button></div>
        <v-header></v-header>
        <el-row>
        <el-col :span="3" class="tree-list">
            <tree :routes="routes"></tree>
        </el-col>
        <el-col :span="9">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </el-col>
        </el-row>
    </div>
</template>

<script>
    import header from 'components/header/header.vue';
    import tree from 'components/tree/tree.vue';
    import test from 'components/test/test.vue';
    
    const routes = {
        user: 'user',
        system: 'system',
        test: 'test'
    }

    export default {
        data () {
            return {
                routes: routes
            }
        },
        methods: {
            test() {
                console.log(this.$props);
                console.log(this.router);
                console.log(this.$root);
                console.log(this.routes);
            }
        },
        components: {
            'v-header': header, tree, test
        }
    }
</script>

<style lang="sass">
    @import "./common/css/reset.scss";
    @import "./app.scss";
</style>
