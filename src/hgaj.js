var list = [
    {
        text: "耍酷",
        class: "1", url: "1"
    },
    {
        text: "说不",
        class: "2", url: "2"
    },
    {
        text: "嗨皮",
        class: "3", url: "3"
    },
    {
        text: "大哭",
        class: "4", url: "4"
    },
    {
        text: "贪吃",
        class: "5", url: "5"
    },
    {
        text: "惊呀",
        class: "6", url: "6"
    },
    {
        text: "得意",
        class: "7", url: "7"
    },
    {
        text: "安慰",
        class: "8", url: "8"
    },
    {
        text: "顾盼",
        class: "9", url: "9"
    },
    {
        text: "留翔",
        class: "10", url: "10"
    },
    {
        text: "花心",
        class: "11", url: "11"
    },
    {
        text: "睡觉",
        class: "12", url: "12"
    },
    {
        text: "受惊",
        class: "13", url: "13"
    },
    {
        text: "愤懑",
        class: "14", url: "14"
    },
    {
        text: "张望",
        class: "15", url: "15"
    },
    {
        text: "捕鼠",
        class: "16", url: "16"
    },
    {
        text: "弱弱的",
        class: "17", url: "17"
    },
    {
        text: "疑问",
        class: "18", url: "18"
    },
    {
        text: "兜风",
        class: "19", url: "19"
    },
    {
        text: "摊手",
        class: "20", url: "20"
    },
    {
        text: "失落",
        class: "21", url: "21"
    },
    {
        text: "臭屁",
        class: "22", url: "22"
    }
];
var clsPrefix = 'hgaj-';

var path = 'https://static.ws.126.net/f2e/modules/emoji/lib/hgaj/';

module.exports = list.map(function (item) {
    item.url = path + item.url + '.png';
    item.class = clsPrefix + item.class;
    return item;
});
