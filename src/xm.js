var list = [
    {
        text: "OK",
        class: "1", url: "1"
    },
    {
        text: "NO",
        class: "2", url: "2"
    },
    {
        text: "得意",
        class: "3", url: "3"
    },
    {
        text: "抽烟",
        class: "4", url: "4"
    },
    {
        text: "撒欢",
        class: "5", url: "5"
    },
    {
        text: "噎住",
        class: "6", url: "6"
    },
    {
        text: "傲娇",
        class: "7", url: "7"
    },
    {
        text: "大哭",
        class: "8", url: "8"
    },
    {
        text: "无语",
        class: "9", url: "9"
    },
    {
        text: "跪地",
        class: "10", url: "10"
    },
    {
        text: "色眯眯",
        class: "11", url: "11"
    },
    {
        text: "同床",
        class: "12", url: "12"
    },
    {
        text: "瑜伽",
        class: "13", url: "13"
    },
    {
        text: "挠墙",
        class: "14", url: "14"
    },
    {
        text: "电话",
        class: "15", url: "15"
    },
    {
        text: "短信",
        class: "16", url: "16"
    },
    {
        text: "献花",
        class: "17", url: "17"
    },
    {
        text: "狂笑",
        class: "18", url: "18"
    },
    {
        text: "排队",
        class: "19", url: "19"
    },
    {
        text: "蹲墙角",
        class: "20", url: "20"
    },
    {
        text: "摔手机",
        class: "21", url: "21"
    },
    {
        text: "口水",
        class: "22", url: "22"
    },
    {
        text: "石化",
        class: "23", url: "23"
    },
    {
        text: "心碎",
        class: "24", url: "24"
    }
];

var clsPrefix = 'xm-';

var path = 'https://static.ws.126.net/f2e/modules/emoji/lib/xm/';

module.exports = list.map(function (item) {
    item.class = clsPrefix + item.class;
    item.url = path + item.url + '.png';
    return item;
});
