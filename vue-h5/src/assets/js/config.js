// 文案集合
const config  = {
    text1: (data) => `您猜的价格是<em>${data.price}</em>元，<em>${data.result}</em>！就差一点点了!`,
    text2: (data) => `您现在的预期价格区间：<em>${data.min}</em>元至<em>${data.max}</em>元之间。`,
    text3: (data) => '抱歉！您竞猜的次数已用完！',
    text4: (data) => `点击右上角，分享好友助力成功后，增加<em>1</em>次机会！`,
    text5: (data) => `助力成功！`,
    text6: (data) => `赠送您 <em>5次</em> 猜价格的机会！`,
    text7: (data) => `您猜的价格是<em>${data.price}</em>元，<em>${data.result}</em>！恭喜您！`,
    text8: (data) => `但可惜您来晚了一步，实物奖品已被抢完啦！`,
    text9: (data) => `赠送您3元现金券一张，可用于<em>624大牌洗护节</em>！`,
    text10: (data) => `很遗憾，您不是新用户，无法助力！`,
    text11: (data) => `您好，只有<em>新用户</em>才能在微信中参与猜价格游戏！`,
    text12: (data) => `<em>请打开贝贝APP<em>参加猜价格赢大礼包活动！`,
    text13: (data) => `您的朋友 <em>${data.user}</em> 正在玩猜价格赢大礼的游戏！`,
    text14: (data) => `您的助力可以帮助他多增加一次竞猜的机会！`,
    text15: (data) => `需要分享给微信好友，助力成功即可多增加<em>1</em>次机会！`,
    text18: (data) => `网络错误，请重试。`,
    text19: (data) => `现在您还有<em>${data.count}</em>次猜价格赢大礼的机会！`,
    text20: (data) => `助力成功！但您竞猜的次数已用完！`,
};
// 弹窗内容
const components = {
    // 价格低了
    lowPrice: {
        tips: ['text1', 'text2'],
        btnText: '继续猜',
        btnType: 'noAction',
    },
    // 价格高了
    highPrice: {
        tips: ['text1', 'text2'],
        btnText: '继续猜',
        btnType: 'noAction',
    },
    // 没有次数app
    noCountInApp: {
        tips: ['text3', 'text2', 'text15'],
        btnText: '邀请好友助力',
        btnType: 'share',
    },
    // 猜中但是没机会领奖,发券提示
    guessOkButNoBuy: {
        tips: ['text7', 'text9'],
        btnText: '立即使用',
        btnType: 'goOutLink',
    },
    // 猜中可领奖
    guessOk: {
        tips: ['text7'],
        btnText: '免费下单',
        btnType: 'createOrder',
    },
    // 助力提示
    helpToast: {
        tips: ['text13', 'text14'],
        btnText: '我要助力',
        btnType: 'helpThis',
    },
    // 助力成功提示
    helpOk: {
        tips: ['text5', 'text6'],
        btnText: '我也要玩',
        btnType: 'noAction',
    },
    // 助力成功后继续猜
    helpOkAndPlay: {
        tips: ['text5', 'text19'],
        btnText: '继续猜',
        btnType: 'noAction',
    },
    // 助力成功后无次数，分享
    helpOkAndShare: {
        tips: ['text20', 'text2', 'text4'],
        btnText: '去分享',
        btnType: 'noAction',
    },
    // h5里次数用完，分享提示
    noCountInH5: {
        tips: ['text3', 'text2', 'text4'],
        btnText: '确定',
        btnType: 'noAction',
    },
    netError: {
        tips: ['text18'],
        btnText: '确认',
        btnType: 'noAction',
    },
};

const getConfig = (type, data) => {
    const currConfig = components[type];
    if (!currConfig) {
        return false;
    }
    return {
        tips: currConfig.tips.map((key) => config[key](data)),
        btnText: currConfig.btnText,
        btnType: currConfig.btnType,
    };
};

export default getConfig;
