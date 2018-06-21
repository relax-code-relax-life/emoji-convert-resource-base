var list = [
    {
        text: "你好",
        class: "1", url: "1"
    },
    {
        text: "泪奔",
        class: "2", url: "2"
    },
    {
        text: "可怜",
        class: "3", url: "3"
    },
    {
        text: "打嗝",
        class: "4", url: "4"
    },
    {
        text: "哈哈",
        class: "5", url: "5"
    },
    {
        text: "呵欠",
        class: "6", url: "6"
    },
    {
        text: "内裤",
        class: "7", url: "7"
    },
    {
        text: "我汗",
        class: "8", url: "8"
    },
    {
        text: "超人",
        class: "9", url: "9"
    },
    {
        text: "唱歌",
        class: "10", url: "10"
    },
    {
        text: "求饶",
        class: "11", url: "11"
    },
    {
        text: "怒火",
        class: "12", url: "12"
    },
    {
        text: "门牙",
        class: "13", url: "13"
    },
    {
        text: "掐脸",
        class: "14", url: "14"
    },
    {
        text: "棒棒糖",
        class: "15", url: "15"
    },
    {
        text: "害怕",
        class: "16", url: "16"
    },
    {
        text: "开花",
        class: "17", url: "17"
    },
    {
        text: "便秘",
        class: "18", url: "18"
    },
    {
        text: "指责",
        class: "19", url: "19"
    },
    {
        text: "猥琐",
        class: "20", url: "20"
    },
    {
        text: "窘迫",
        class: "21", url: "21"
    },
    {
        text: "睡觉",
        class: "22", url: "22"
    },
    {
        text: "加班",
        class: "23", url: "23"
    },
    {
        text: "嗨皮",
        class: "24", url: "24"
    },
    {
        text: "喝茶",
        class: "25", url: "25"
    },
    {
        text: "花哨",
        class: "26", url: "26"
    },
    {
        text: "弹晕",
        class: "27", url: "27"
    },
    {
        text: "挠痒",
        class: "28", url: "28"
    },
    {
        text: "阴暗",
        class: "29", url: "29"
    },
    {
        text: "射杀",
        class: "30", url: "30"
    },
    {
        text: "KO",
        class: "31", url: "31"
    },
    {
        text: "卖萌",
        class: "32", url: "32"
    },
    {
        text: "足球",
        class: "33", url: "33"
    },
    {
        text: "海盗",
        class: "34", url: "34"
    },
    {
        text: "剪刀",
        class: "35", url: "35"
    },
    {
        text: "背景",
        class: "36", url: "36"
    },
    {
        text: "吊丝",
        class: "37", url: "37"
    },
    {
        text: "擦地",
        class: "38", url: "38"
    },
    {
        text: "耍帅",
        class: "39", url: "39"
    },
    {
        text: "弹飞",
        class: "40", url: "40"
    }
]

var clsPrefix = 'xxy-';

var path = 'https://static.ws.126.net/f2e/modules/emoji/lib/xxy/';

module.exports = list.map(function (item) {
    item.class = clsPrefix + item.class;
    item.url = path + item.url + '.png';
    return item;
});