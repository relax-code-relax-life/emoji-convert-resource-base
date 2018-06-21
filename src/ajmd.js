var classPrefix = 'ajmd-';
var list = [
    {
        text: "亲亲",
        class: "1", url: "1"
    },
    {
        text: "呵呵",
        class: "2", url: "2"
    },
    {
        text: "扭扭",
        class: "3", url: "3"
    },
    {
        text: "大汗",
        class: "4", url: "4"
    },
    {
        text: "惊吓",
        class: "5", url: "5"
    },
    {
        text: "撒欢",
        class: "6", url: "6"
    },
    {
        text: "卖萌",
        class: "7", url: "7"
    },
    {
        text: "冒火",
        class: "8", url: "8"
    },
    {
        text: "道歉",
        class: "9", url: "9"
    },
    {
        text: "砍人",
        class: "10", url: "10"
    },
    {
        text: "抽烟",
        class: "11", url: "11"
    },
    {
        text: "嘲笑",
        class: "12", url: "12"
    },
    {
        text: "健身",
        class: "13", url: "13"
    },
    {
        text: "大佬",
        class: "14", url: "14"
    },
    {
        text: "呵欠",
        class: "15", url: "15"
    },
    {
        text: "工作",
        class: "16", url: "16"
    },
    {
        text: "再见",
        class: "17", url: "17"
    },
    {
        text: "鬼脸",
        class: "18", url: "18"
    },
    {
        text: "呆住",
        class: "19", url: "19"
    },
    {
        text: "放光",
        class: "20", url: "20"
    },
    {
        text: "握拳",
        class: "21", url: "21"
    },
    {
        text: "狂吐",
        class: "22", url: "22"
    },
    {
        text: "不安",
        class: "23", url: "23"
    },
    {
        text: "跪求",
        class: "24", url: "24"
    },
    {
        text: "雷劈",
        class: "25", url: "25"
    },
    {
        text: "拍胸脯",
        class: "26", url: "26"
    },
    {
        text: "切",
        class: "27", url: "27"
    },
    {
        text: "膜拜",
        class: "28", url: "28"
    },
    {
        text: "哭泣",
        class: "29", url: "29"
    },
    {
        text: "散热",
        class: "30", url: "30"
    },
    {
        text: "便秘",
        class: "31", url: "31"
    },
    {
        text: "玩",
        class: "32", url: "32"
    },
    {
        text: "给跪",
        class: "33", url: "33"
    },
    {
        text: "打呼",
        class: "34", url: "34"
    },
    {
        text: "听歌",
        class: "35", url: "35"
    },
    {
        text: "PIA",
        class: "36", url: "36"
    },
    {
        text: "吐血",
        class: "37", url: "37"
    },
    {
        text: "熬夜",
        class: "38", url: "38"
    },
    {
        text: "凤姐",
        class: "39", url: "39"
    },
    {
        text: "掏心",
        class: "40", url: "40"
    },
    {
        text: "心碎",
        class: "41", url: "41"
    },
    {
        text: "求原谅",
        class: "42", url: "42"
    },
    {
        text: "疑问",
        class: "43", url: "43"
    },
    {
        text: "晕乎",
        class: "44", url: "44"
    },
    {
        text: "开车",
        class: "45", url: "45"
    },
    {
        text: "点赞",
        class: "46", url: "46"
    },
    {
        text: "撞墙",
        class: "47", url: "47"
    },
    {
        text: "做饭",
        class: "48", url: "48"
    }
]

var pathHost = 'https://static.ws.126.net/f2e/modules/emoji/lib/ajmd/';

module.exports = list.map(function (item) {
    item.class = classPrefix + item.class;
    item.url = pathHost + item.url + '.png';
    return item;
});