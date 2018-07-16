<template>
    <div id="guess" class="guess-page">
        <Banner :showrule="showRuleModel"></Banner>
        <Main :count="rspData.count"
            :end="rspData.end"
            :guessNow="guessNow"
            :award="rspData.award"
            :isaward="rspData.isAward"
            :minPrice="rspData.minPrice"
            :maxPrice="rspData.maxPrice"
            >
        </Main>
         <History
            :history="rspData.guessHistory"
            >
        </History>
        <award-list :items="rspData.toastList"></award-list>
        <InputModel v-if="showInput" 
            :tips="inputModelTip"
            :inputing="inputing"
            :onsubmit="submitPrice"
            :onclose="closeInputModel">
        </InputModel>
        <AlertModel v-if="showAlert" 
            :tips="alertTips"
            :btntext="alertModelBtnText"
            :onsubmit="handleAlertBtn"
            :onclose="closeAlertModel">
        </AlertModel>
        <RuleModel v-if="showRule"
            :onclose="closeRuleModel"
            >
        </RuleModel>
        <RuleModel v-if="showRule"
            :onclose="closeRuleModel"
            >
        </RuleModel>
        <div class="to-link-img" @click="goOutLink">
            <img src="//h0.hucdn.com/open/201825/a62b3cf61dc10af2_750x200.png" alt="">
        </div>
        <Ad :items="adData"></Ad>

    </div>
</template>

<style scoped lang="less">
    @import "../assets/less/common.less";
    .to-link-img {
        width: 750/@b;
        height: 200/@b;

        img {
            width: 100%;
            height: 100%;
        }
    }
</style>

<script>
import Banner from '../components/Banner.vue';
import RuleModel from '../components/RuleModel.vue';
import Main from '../components/Main.vue';
import History from '../components/History.vue';
import awardList from '../components/awardList.vue';
import InputModel from '../components/InputModel.vue';
import AlertModel from '../components/AlertModel.vue';
import Ad from '../components/Ad.vue';
import axios from 'axios';
import {resData,proData} from '../mock/guessData.js';
import {isSupportCopy, getFormatDate, getFormatPrice} from '../assets/js/utils.js';
const productImg = 'http://h0.hucdn.com/open/201825/d408f7cdf30594ed_405x416.png';

export default {
    data() {
        return {
            showRule: false,
            showAlert: false,
            showInput: false,
            rspData: {
            },
            adData: []
        }
    },
    components: {
        Banner,
        RuleModel,
        Main,
        History,
        awardList,
        InputModel,
        AlertModel,
        Ad
    },
    computed: {
        inputModelTip: function () {
            return `预期价格区间：<em>${this.rspData.minPrice}</em>元 至 <em>${this.rspData.maxPrice}</em>元之间`;
        }
    },
    created() {
        this.init(resData.data);
    },
    methods:{
        init(data) {
            const format = this.formatData(data);
            this.rspData = format;
            this.adData = this.getAdData(function(resData){
                return resData;
            });
        },
        // 查看规则弹窗
        showRuleModel() {
            this.showRule = true;
        },
        // 关闭规则弹窗
        closeRuleModel() {
            this.showRule = false;  
        },
        // 开始猜价格按钮
        guessNow(type) {
            if (type === 3) {
                return note('活动已结束', closeTime);
            }
            if (type === 2) {
                return note('已经领取过了', closeTime);
            }
            if (type === 1) {
                this.btnHandlers('createOrder')();
                return;
            }
            const {minPrice: min, maxPrice: max, award} = this.rspData;
            if (this.rspData.count) {
                this.showInput = true;
            } else {
                // 无竞猜次数
                const type = platform === 'app' ? 'noCountInApp': 'noCountInH5';
                this.updateAlertStatus({type, data: {
                    min,
                    max
                }});
            }
        },
        //获取广告数据
        getAdData(callback){
            let that = this;
            axios.get('https://dsapi.beibei.com/ads/h5.html',{
                params:{
                    ad_id:'7_28_246_9_236',
                    app:'sbeibei',
                    user_tag:'2147483646'
                },
                responseType: 'json'
            })
            .then(res =>{
                let adData = that.adData = res.request.response.promotion_pro_shortcuts;
                let adClass = ['second-kill','nine-mail','hot-list','new-pro','brand-clean'];
                for(let i = 0;i<adData.length;i++){
                    adData[i].class = adClass[i];
                }
                callback(adData);
            })
            .catch(function(err){
                console.log(err);
            });    
        },
        // 数据格式化
        formatData(data) {
            const guessStatus = {
                '99': '低了',
                '100': '猜中了',
                '101': '高了'
            };
            const {min, max} = data.price_section;

            const formatHistory = (item) => {
                
                return {
                    img: productImg,
                    title: item.title,
                    price: getFormatPrice(item.guess_price),
                    status: guessStatus[item.guess_result] || '低了',
                    time: item.gmt_create
                }
            }
            const toasts = data.award_list.map((item) => {
                return {
                    nick_name: item.nick_name,
                    avatar: item.avatar + '!60x60.jpg',
                    desc: item.award_desc,
                }
            });
            return {
                minPrice: getFormatPrice(min),
                maxPrice: getFormatPrice(max),
                guessHistory: data.guess_history.map(formatHistory),
                begin: data.gmt_begin,
                end: data.gmt_end,
                isValid: data.gmt_end * 1000 - Date.now() > 1000,
                count: data.left_chance,
                product: {
                    img: productImg,
                    title: data.title,
                },
                inviteCode: data.invite_code,
                inviter_nick: data.inviter_nick,
                award: data.award,
                isAward: data.is_award,
                isGuessOk: data.is_bingo,
                bcode: data.bcode,
                products: data.item_list.map((item) => {
                    return {
                        title: item.title,
                        desc: item.desc,
                        iid: item.iid,
                        img: item.img + '!320x320.jpg',
                        price: getFormatPrice(item.price),
                    }
                }),
                toastList: toasts.concat(toasts)
            }
        },
        goOutLink() {
            this.btnHandlers('goOutLink').call(this);
        },
        // 按钮行为集合
        btnHandlers: (type) => {
            const handlers = {
                share() {
                    // 去分享
                    this.shareConfig.template_prepare = false;
                    hybrid('share').share(this.shareConfig, () => {
                       statistics.sendLog({
                           et: 'click',
                           json: {
                               block_name: '分享成功'
                           }
                       }) 
                    });
                },
                createOrder() {
                    // 去免费下单
                    // if (isBeibei()) {
                    //     hybrid('openURL').openURL({
                    //         url: `http://m.beibei.com/n/invite_fans/confirm_address.html?iid=${iid}`,
                    //     });
                    // } else {
                    //     commander().show();
                    //     // window.location.href = `http://m.beibei.com/n/invite_fans/confirm_address.html?iid=${iid}`;
                    // }
                    
                },
                helpThis() {
                    if (isWeixin() && !this.isWxLogin) {
                        this.beforeInit();
                        return;
                    }
                    // 助力
                    handleHelp({
                        iid,
                        invite_code: inviteCode
                    }).then(resp => {
                        if (resp.success) {
                            let num = resp.data && resp.data.left_num;
                            if (+num === 5) {
                                this.updateAlertStatus({
                                    type: 'helpOk',
                                    data: {}
                                });
                            } else if(+num === 0) {
                                this.updateAlertStatus({
                                    type: 'helpOkAndShare',
                                    data: {
                                        min: this.rspData.minPrice,
                                        max: this.rspData.maxPrice,
                                    }
                                });
                            } else {
                                this.updateAlertStatus({
                                    type: 'helpOkAndPlay',
                                    data: {
                                        count: num,
                                        min: this.rspData.minPrice,
                                        max: this.rspData.maxPrice,
                                    }
                                });
                            }
                            
                        } else {
                            note(resp.message, closeTime);
                        }
                    })
                    
                },
                playGuess() {
                    // 我也要玩
                },
                goOutLink() {
                    let outLink = 'http://mp.beibei.com/hms2_page_n/ztplr/mzxhj.html';
                    // 去会场
                    // if (isBeibei()) {
                    //     hybrid('openURL').openURL({
                    //         url: outLink,
                    //     });
                    // } else {
                    //     window.location.href = outLink;
                    // }
                }
            }
            return handlers[type];
        }
    }
}
</script>

