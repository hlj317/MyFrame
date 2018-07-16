<template>
    <div class="bb-container">
        <section class="bb-header">
            <img class="bb-logo" src="//h0.hucdn.com/images/201813/606a68c53691e850_64x64.png" />
            <span class="logo-title">贝贝</span>
            <span class="goto-download">前往下载</span>
        </section>
        <ul class="bb-nav">
            <li class="selected">推荐</li>
            <li>童装</li>
            <li>童鞋</li>
            <li>婴童用品</li>
            <li>女装</li>
            <li>鞋包</li>
            <li>居家</li>
            <li>美妆</li>
            <li>美食</li>
            <li>下期预告</li>
            <span class="bb-search">🔍</span>
        </ul>
        <section class="bb-ad">
            <div class="ad-left">
                <a href="ad-1">
                    <span class="title">限量秒杀</span>
                    <span class="description">女童华丽纱质连衣裙</span>
                    <img class="ad-img" src="http://h0.hucdn.com/images/201731/a520e33a564f8e4d_310x430.jpg"/>
                </a>
            </div>
            <div class="ad-right">
                <a href="ad-2">
                    <span class="title">天天拼团</span>
                    <span class="description">百香果1.1元/颗！</span>
                    <img class="ad-img" src="http://h0.hucdn.com/images/201731/20374f313f60fd41_220x215.jpg"/>
                </a>
                <a href="ad-3">
                    <span class="title">自营奶粉</span>
                    <span class="description">贝贝正品保证</span>
                    <img class="ad-img" src="http://h0.hucdn.com/images/201804/576c113bb1c2851a_220x215.jpg"/>
                </a>
                <a href="ad-4">
                    <span class="title">全球购</span>
                    <span class="description">进口爆款底价购</span>
                    <img class="ad-img" src="http://b2.hucdn.com/upload/hmp/1703/22/64874481497252_220x215.png!200.webp"/>
                </a>
                <a href="ad-5">
                    <span class="title">低价清仓</span>
                    <span class="description">印花T恤9.9秒</span>
                    <img class="ad-img" src="http://h0.hucdn.com/images/201731/2a59551786148d78_220x215.png"/>
                </a>
            </div>
        </section>
        <section class="bb-list">
            <div class="bb-title"></div>
            <div class="bb-container"></div>
        </section>
        <div class="bb-footer"></div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    import {getcaptchas} from '../../service/getData';
    export default {
        data(){
            return {
                loginWay: false, //登录方式，默认短信登录
                showPassword: false, // 是否显示密码
                phoneNumber: null, //电话号码
                mobileCode: null, //短信验证码
                validate_token: null, //获取短信时返回的验证值，登录时需要
                computedTime: 0, //倒数记时
                userInfo: null, //获取到的用户信息
                userAccount: null, //用户名
                passWord: null, //密码
                captchaCodeImg: null, //验证码地址
                codeNumber: null, //验证码
                showAlert: false, //显示提示组件
                alertText: null, //提示的内容
            }
        },
        created(){
            this.getCaptchaCode();
        },
        components: {
            // headTop,
            // alertTip,
        },
        computed: {
            //判断手机号码
            rightPhoneNumber: function (){
                return /^1\d{10}$/gi.test(this.phoneNumber)
            }
        },
        methods: {
            ...mapMutations([
                // 'RECORD_USERINFO',
            ]),
            //改变登录方式
            changeLoginWay(){
                this.loginWay = !this.loginWay;
            },
            //是否显示密码
            changePassWordType(){
                this.showPassword = !this.showPassword;
            },
            //获取验证吗，线上环境使用固定的图片，生产环境使用真实的验证码
            async getCaptchaCode(){
                let res = await getcaptchas();
                this.captchaCodeImg = res.code;
            },
            //获取短信验证码
            async getVerifyCode(){
                if (this.rightPhoneNumber) {
                    this.computedTime = 30;
                    this.timer = setInterval(() => {
                        this.computedTime --;
                        if (this.computedTime == 0) {
                            clearInterval(this.timer)
                        }
                    }, 1000)
                    //判读用户是否存在
                    let exsis = await checkExsis(this.phoneNumber, 'mobile');
                    if (exsis.message) {
                        this.showAlert = true;
                        this.alertText = exsis.message;
                        return
                    }else if(!exsis.is_exists) {
                        this.showAlert = true;
                        this.alertText = '您输入的手机号尚未绑定';
                        return
                    }
                    //发送短信验证码
                    let res = await mobileCode(this.phoneNumber);
                    if (res.message) {
                        this.showAlert = true;
                        this.alertText = res.message;
                        return
                    }
                    this.validate_token = res.validate_token;
                }
            },
            //发送登录信息
            async mobileLogin(){
                if (this.loginWay) {
                    if (!this.rightPhoneNumber) {
                        this.showAlert = true;
                        this.alertText = '手机号码不正确';
                        return
                    }else if(!(/^\d{6}$/gi.test(this.mobileCode))){
                        this.showAlert = true;
                        this.alertText = '短信验证码不正确';
                        return
                    }
                    //手机号登录
                    this.userInfo = await sendLogin(this.mobileCode, this.phoneNumber, this.validate_token);
                }else{
                    if (!this.userAccount) {
                        this.showAlert = true;
                        this.alertText = '请输入手机号/邮箱/用户名';
                        return
                    }else if(!this.passWord){
                        this.showAlert = true;
                        this.alertText = '请输入密码';
                        return
                    }else if(!this.codeNumber){
                        this.showAlert = true;
                        this.alertText = '请输入验证码';
                        return
                    }
                    //用户名登录
                    this.userInfo = await accountLogin(this.userAccount, this.passWord, this.codeNumber);
                }
                //如果返回的值不正确，则弹出提示框，返回的值正确则返回上一页
                if (!this.userInfo.user_id) {
                    this.showAlert = true;
                    this.alertText = this.userInfo.message;
                    if (!this.loginWay) this.getCaptchaCode();
                }else{
                    this.RECORD_USERINFO(this.userInfo);
                    this.$router.go(-1);

                }
            },
            closeTip(){
                this.showAlert = false;
            }
        }
    }

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';

    .bb-container{
        margin:0;
        padding:0;
        background: #ffffff;
        font-family: Helvetica Neue,Tahoma,Arial;
        .bb-header{
            @include wh(100%, 2.0rem);
            line-height: 2.0rem;
            background:$black;
            vertical-align: middle;
            font-size:12px;
            .bb-logo{
                @include wh(1.36rem, 1.36rem);
                margin:0.3rem 0 0 0.7rem;
                display: block;
                float: left;
            }
            .logo-title{
                @include sc(0.7rem,$fc);
                margin:0 0 0 0.5rem;
                display: block;
                float: left;
            }
            .goto-download{
                display: block;
                float: right;
                margin:0.4rem 0.5rem 0 0;
                @include sc(0.6rem,$fc);
                @include wh(3.0rem,1.2rem);
                @include borderRadius(3px);
                line-height: 1.2rem;
                background:#ff4848;
                text-align: center;
                vertical-align: middle;
            }
        }
        .bb-nav{
            margin:0;
            padding:0.6rem 1.0rem 0 1.0rem;
            list-style: none;
            width:100%;
            overflow-x: auto;
            overflow-y: hidden;
            white-space: nowrap;
            position: relative;
            @include sc(0.6rem,$fc);   
            li{
                margin:0 0.8rem 0 0;
                padding:0 0 0.4rem 0;
                display:inline-block;
                box-sizing: border-box;
            }  
            li:last-child{
                margin-right:4.0rem;
            }
            li.selected{
                color:#ff4848;
                border-bottom:0.1rem solid #ff4848;
            }
            .bb-search{
                position: fixed;
                top:2.3rem;
                right:0;
                display: block;
                @include sc(1.1rem,$fc);   
                background: #ffffff;
                @include wh(1.4rem,1.2rem);
            }
        }
        .bb-ad{
            background:#ffffff;
            border-top:0.4rem solid #eeeeee;
            border-bottom:0.4rem solid #eeeeee;
            @include wh(100%,12.0rem);
            .ad-left{
                .ad-1{

                }
            }
            .ad-right{
                .ad-2{
                    
                }
                .ad-3{
                    
                }
                .ad-4{
                    
                } 
                .ad-5{
                    
                }  
                .ad-2 .title,.ad-3 .title,.ad-4 .title,.ad-5 .title{

                }
                .ad-2 .description,.ad-3 .description,.ad-4 .description,.ad-5 .description{
                    
                }   
                .ad-2 .ad-img,.ad-3 .ad-img,.ad-4 .ad-img,.ad-5 .ad-img{
                    
                }          
            }
        }
    }

</style>
