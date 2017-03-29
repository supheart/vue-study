<template>
    <div>
        <v-header :seller="seller"></v-header>
        <div class="tab border-1px">
            <div class="tab-item">
                <a v-link="{path: '/goods'}">商品</a>
            </div>
            <div class="tab-item">
                <a v-link="{path: '/ratings'}">评论</a>
            </div>
            <div class="tab-item">
                <a v-link="{path: '/seller'}">商家</a>
            </div>
        </div>
        <router-view :seller="seller" keep-alive></router-view>
    </div>
</template>

<script>
    import {urlParse} from 'common/js/util';
    import header from 'components/header/header.vue';

    const ResOk = 0;

    export default{
    data() {
        return {
            // 初始化该组件的data数据
            seller: {
                id: (() => {
                    let queryParam = urlParse();
                    // console.log(queryParam);
                    return queryParam.id;
                })()
            }
        };
    },
    // 组件创建的生命周期函数
    created() {
        // 使用vue-resource的方法去通过ajax获取数据
        console.log('start get api data');
        this.$http.get('/api/seller?id=' + this.seller.id).then((response) => {
            response = response.body;
            if (response.errno === ResOk) {
                // this.seller = response.data;
                this.seller = Object.assign({}, this.seller, response.data);
                // console.log('seller: ', this.seller);
            }
        });
    },
    components: {
        'v-header': header
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "./common/stylus/mixin.styl";

    .tab
        display: flex
        width: 100%
        height: 40px
        line-height: 40px
        // border-bottom: 1px solid rgba(7, 17, 27, 0.1)
        border-1px(rgba(7, 17, 27, 0.1))
        .tab-item
            flex: 1
            text-align: center
            & > a
                display: block
                font-size: 14px
                color: rgb(77, 85, 93)
                &.active
                    color: rgb(240, 20, 20)

</style>
