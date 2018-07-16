<template>
    <section class="main">
        <div class="title-wrapper">
            <p class="pro-title">【猜价有礼】力士沐浴乳1350mL，624活动价格？</p>
        </div>
        <img class="item-img" src="//h0.hucdn.com/open/201825/f387cc70724ed773_405x416.png">
        <p class="price-range">预期价格区间：<span class="strong">{{minPrice || '36.99'}}</span>元 至 <span class="strong">{{maxPrice || '38.99'}}</span>元之间</p>
        <div @click="guessNow(btnType)" class="btn-guess">
            <p class="i-guess">{{btnsText[btnType]}}</p>
        </div>
        
        <div class="left-chances">您当前有<span class="strong">{{count === undefined ? '5' : count }}</span>次机会</div>
        
        <div class="left-time" v-if="leftTime">还剩<span class="strong">{{leftTime}}</span>结束，快来猜价格吧~</div>
        <div class="left-time" v-else>
            <span v-if="isLogin">活动已结束，请下次再来吧~</span>
        </div>
    </section>
</template>

<style lang="less">
    @import "../assets/less/common.less";
    .main {
        padding-top: 30/@base;
        width: 16rem;
        height: 892/@base;
        text-align: center;
        background: url('//h0.hucdn.com/open/201825/dc6b84243f2b1e57_750x893.png') no-repeat;
        background-size: 100% 100%; 
        box-sizing: border-box;
        .title-wrapper {
            display: inline-block;
            margin-top: 20/@b;
            padding: 0 60/@base;
            height: 83/@base;
            color: #333;
            font-size: 24/@base;
            line-height: 82/@base;
            background: url('//h0.hucdn.com/open/201825/1e3b8c60ab686b39_690x82.png') no-repeat;
            background-size: 100% 100%;
            box-sizing: border-box;
            .pro-title {
                max-width: 620/@base;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
        }
        .price-range {
            margin: 16/@base 0;
            display: inline-block;
            padding-left: 38/@base;
            font-size: 24/@base;
            height: 30/@base;
            line-height: 30/@base;
            color: #333;
            background: url('//h0.hucdn.com/open/201824/03e67afb6fca939a_28x28.png') no-repeat;
            background-size: 28/@base 28/@base;
            background-position: 0 50%;
            box-sizing: border-box;
            .strong {
                margin: 0 2/@base;
                color: #f2001d;
                font-weight: 700;
            }
        }
        .item-img {
            display: block;
            margin: 16/@base auto auto;
            margin-bottom: 10px; 
            width: 400/@base;
        }
        .tianmao {
            width: 100%;
            margin-bottom: 4/@b;
            height: 24/@b;
            font-size: 22/@b;
            color: #753136;
        }
        .btn-guess {
            margin: 12/@base auto auto;
            width: 689/@base;
            height: 137/@base;
            font-size: 40/@base;
            line-height: 100/@base;
            color: #fff;
            background: url('//h0.hucdn.com/open/201824/3c8f501bf681a1bd_689x137.png') no-repeat;
            background-size: 100% 100%;
            animation: breath 1.5s linear infinite;
            .i-guess {
                display: inline-block;
                padding-left: 66/@base;
                background: url('//h0.hucdn.com/open/201824/55b0b50cf788d087_52x52.png') no-repeat;
                background-size: 52/@base 52/@base;
                background-position: 0% 50%;
                box-sizing: border-box;
            }
        }
        .left-chances {
            margin-bottom: 24/@base;
            font-size: 24/@base;
            line-height: 1;
            color: #333;
            letter-spacing: 1/@base;
            .strong {
                font-weight: 700;
                margin: 0 2/@base;
                font-size: 36/@base;
                color: #f2001d;
            }
        }
        .left-time {
            font-size: 24/@base;
            line-height: 1;
            color: #333;
            .strong {
                margin: 0 2/@base;
            }
        }
    }
    
    @-webkit-keyframes breath {
        0% {
            -webkit-transform: scale(0.8);
        }
        50% {
            -webkit-transform: scale(1);
        }
        100% {
            -webkit-transform: scale(0.8);
        }
    }
    @keyframes breath {
        0% {
            transform: scale(0.8);
        }
        50% {
            transform: scale(1);
        }
        100% {
            transform: scale(0.8);
        }
    }
</style>

<script>
import {parse} from '../assets/js/httpurl';

const params = parse().params;
import countDown from '../assets/js/countDown.js';

let timer;

export default {
    data() {
        return {
            inviteCode: params.invite_code,
            leftTime: '',
            btns: {
                NO_LOGIN: 4,   // 未登录
                ACTIVE_END: 3,  //结束
                IS_AWARD: 2,   // 已领奖
                AWARD: 1,      // 可领奖
                CONTUINE: 0    // 不可领奖，继续
            },
            btnsText: ['我要猜价格', '立即领取', '我已领过奖', '活动已结束', '我要帮忙助力'],
        }
    },
    props: [
        'guessNow',
        'count',
        'end',
        'minPrice',
        'maxPrice',
        'isaward',
        'award',
        'isLogin'
    ],
    created() {
    },
    computed: {
        btnType: function() {
            if (+this.end * 1000 < Date.now()) {
                return this.btns.ACTIVE_END;
            }
            if (this.isaward) {
                return this.btns.IS_AWARD;
            }
            if (this.award) {
                return this.btns.AWARD;
            }
            if (!this.isLogin && this.inviteCode) {
                return this.btns.NO_LOGIN;
            }
            return this.btns.CONTUINE;
        }
    },
    mounted() {
        let self = this;
        // 倒计时
        self.countDown();
        
        timer = setInterval(function () {
            self.countDown(function () {
                clearInterval(timer);
            });
        }, 1000)
    },
    methods: {
        countDown(cb) {
            let times = countDown(this.end, cb);
            
            let days = times.days;
            let hours = times.hours;
            let minutes = times.minutes;
            let seconds = times.seconds;
            
            if (typeof times === 'object' && !days && !hours && !minutes && !seconds) {
                this.leftTime = '';
            } else if (days == '00') {
                if (hours == '00') {
                    if (minutes == '00') {
                        this.leftTime = `${seconds}`;
                    } else {
                        this.leftTime = `${minutes}:${seconds}`;
                    }
                } else{
                    this.leftTime = `${hours}:${minutes}:${seconds}`;
                }
            } else {
                hours = +hours + days * 24;
                this.leftTime = `${hours}:${minutes}:${seconds}`;
            }
        }
    }
}
</script>
