<template>
    <div class="cartcontrol">
        <div class="cart-decrease icon-remove_circle_outline" @click="decreaseCart" v-show="food.count > 0" transition="move">
            <span class="inner icon-remove_circle_outline"></span>
        </div>
        <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
        <div class="cart-add icon-add_circle" @click="addCart"></div>
    </div>
</template>

<script>
    import Vue from 'vue';

    export default {
        props: {
            food: {
                type: Object
            }
        },
        methods: {
            addCart(event) {
                if (!event._constructed) {
                    return;
                }
                if (!this.food.count) {
                    Vue.set(this.food, 'count', 1);
                } else {
                    this.food.count ++;
                }
                this.$emit('add', event.target);
            },
            decreaseCart(event) {
                if (!event._constructed) {
                    return;
                }
                if (this.food.count) {
                    this.food.count --;
                }
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "cartcontrol";
</style>
