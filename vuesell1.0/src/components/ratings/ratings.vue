<template>
    <div class="ratings" v-el:ratings>
        <div class="ratings-content">
            <div class="overview">
                <div class="overview-left">
                    <h1 class="score">{{seller.score}}</h1>
                    <div class="title">综合评分</div>
                    <div class="rank">高于周边商家{{seller.rankRate}}%</div>
                </div>
                <div class="overview-right">
                    <div class="score-wrapper">
                        <span class="title">服务态度</span>
                        <star :size="36" :score="seller.serviceScore"></star>
                        <span class="score">{{seller.serviceScore}}</span>
                    </div>
                    <div class="score-wrapper">
                        <span class="title">商品评分</span>
                        <star :size="36" :score="seller.foodScore"></star> 
                        <span class="score">{{seller.foodScore}}</span>
                    </div>
                    <div class="delivery-wrapper">
                        <span class="title">送达时间</span>
                        <span class="delivery">{{seller.deliveryTime}}分钟</span>
                    </div>
                </div>
            </div>
            <split></split>
            <ratingselect :select-type="selectType" :only-content="onlyContent" :desc="desc" :ratings="ratings"></ratingselect>
            <div class="rating-wrapper">
                <ul>
                    <li v-for="rating in ratings" v-show="needShow(rating.rateType, rating.text)" class="rating-item">
                        <div class="avatar">
                            <img width="28" height="28" :src="rating.avatar" alt="avatar">
                        </div>
                        <div class="content">
                            <h1 class="name">{{rating.username}}</h1>
                            <div class="star-wrapper">
                                <star :size="24" :score="rating.score"></star>
                                <span class="delivery" v-show="rating.deliveryTime">{{rating.deliveryTime}}</span>
                            </div>
                            <p class="text">{{rating.text}}</p>
                            <div class="recommend" v-show="rating.recommend && rating.recommend.length > 0">
                                <span class="icon-thumb_up"></span>
                                <span v-for="item in rating.recommend" class="item">{{item}}</span>
                            </div>
                            <div class="time">
                                {{rating.rateTime | formatDate}}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>  
    </div>    
</template>

<script>
    import BScroll from 'better-scroll';
    import {formatDate} from 'common/js/date';
    import star from 'components/star/star';
    import ratingselect from 'components/ratingselect/ratingselect';
    import split from 'components/split/split';

    const ResOk = 0;
    const ALL = 2;

    export default {
        props: {
            seller: {
                type: Object
            }
        },
        data() {
            return {
                ratings: [],
                selectType: ALL,
                onlyContent: true,
                scroll: null
            };
        },
        created() {
            this.$http.get('/api/ratings').then((response) => {
                response = response.body;
                if (response.errno === ResOk) {
                    this.ratings = response.data;
                    // console.log(this.ratings);
                    this.$nextTick(() => {
                        if (!this.scroll) {
                            this.scroll = new BScroll(this.$els.ratings, {
                                click: true
                            });
                        } else {
                            this.scroll.refresh();
                        }
                    });
                }
            });
        },
        methods: {
            needShow(type, text) {
                if (this.onlyContent && !text) {
                    return false;
                }
                if (this.selectType === ALL) {
                    return true;
                } else {
                    return type === this.selectType;
                }
            }
        },
        components: {
            star,
            ratingselect,
            split
        },
        filters: {
            formatDate(time) {
                let date = new Date(time);
                return formatDate(date, 'yyyy-MM-dd hh:mm');
            }
        },
        events: {
            'ratingtype.select'(type) {
                this.selectType = type;
                this.$nextTick(() => {
                    this.scroll.refresh();
                });
            },
            'content.toggle'(onlyContent) {
                this.onlyContent = onlyContent;
                this.$nextTick(() => {
                    this.scroll.refresh();
                });
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import 'ratings';
</style>
