<template>
    <div v-show="showFlag" class="food" transition="move" ref="food">
        <div class="food-content">
            <div class="image-header">
                <img :src="food.image" alt="food">
                <div @click="hide" class="back"><i class="icon-arrow_lift"></i></div>
            </div>
            <div class="content">
                <h1 class="title">{{food.name}}</h1>
                <div class="detail">
                    <span class="sell-count">月售{{food.sellCount}}份</span>
                    <span class="rating">好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                    <span class="now">¥{{food.price}}</span>
                    <span class="old" v-show="food.oldPrice">¥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                    <cartcontrol :food="food"></cartcontrol>
                </div>
                <div @click.stop.prevent="addFirst($event)" class="buy" v-show="!food.count || food.count === 0" transition="fade">加入购物车</div>
            </div>
            <split v-show="food.info"></split>
            <div class="info" v-show="food.info">
                <div class="title">商品信息</div>
                <p class="text">{{food.info}}</p>
            </div>
            <split></split>
            <div class="rating">
                <h1 class="title">商品评价</h1>
                <ratingselect @select="ratingtypeSelect" @toggle="contentToggle" :select-type="selectType" :only-content="onlyContent" :desc="desc" :ratings="food.ratings"></ratingselect>
                <div class="rating-wrapper">
                    <ul v-show="food.ratings && food.ratings.length > 0">
                        <li class="rating-item" v-show="needShow(rating.rateType, rating.text)" v-for="rating in food.ratings">
                            <div class="user">
                                <span class="name">{{rating.username}}</span>
                                <img :src="rating.avatar" width="12" height="12" alt="avatar" class="avatar">
                            </div>
                            <div class="time">{{rating.rateTime | formatDate}}</div>
                            <p class="text">
                            <span :class="{'icon-thumb_up':rating.rateType === 0, 'icon-thumb_down': rating.rateType === 1}"></span>{{rating.text}}
                            </p>
                        </li>
                    </ul>
                    <div class="no-rating" v-show="!food.ratings || food.ratings.length === 0">暂无评价</div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll';
    import Vue from 'vue';
    import {formatDate} from 'common/js/date';
    import cartcontrol from 'components/cartcontrol/cartcontrol';
    import split from 'components/split/split';
    import ratingselect from 'components/ratingselect/ratingselect';
    
    const ALL = 2;

    export default {
        props: {
            food: {
                type: Object
            }
        },
        data() {
            return {
                showFlag: false,
                selectType: ALL,
                onlyContent: true,
                desc: {
                    all: '全部',
                    positive: '推荐',
                    negative: '吐槽'
                }
            };
        },
        methods: {
            show() {
                this.showFlag = true;
                this.selectType = ALL;
                this.onlyContent = true;
                this.$nextTick(() => {
                    if (!this.scroll) {
                        this.scroll = new BScroll(this.$refs.food, {
                            click: true
                        });
                    } else {
                        this.scroll.refresh();
                    }
                });
            },
            hide() {
                this.showFlag = false;
            },
            addFirst(event) {
                if (!event._constructed) {
                    return;
                }
                this.$emit('add', event.target);
                Vue.set(this.food, 'count', 1);
            },
            needShow(type, text) {
                if (this.onlyContent && !text) {
                    return false;
                }
                if (this.selectType === ALL) {
                    return true;
                } else {
                    return type === this.selectType;
                }
            },
            ratingtypeSelect(type) {
                this.selectType = type;
                this.$nextTick(() => {
                    this.scroll.refresh();
                });
            },
            contentToggle() {
                this.onlyContent = !this.onlyContent;
                this.$nextTick(() => {
                    this.scroll.refresh();
                });
            }
            
        },
        components: {
            cartcontrol,
            split,
            ratingselect
        },
        filters: {
            formatDate(time) {
                let date = new Date(time);
                return formatDate(date, 'yyyy-MM-dd hh:mm');
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "food";
</style>
