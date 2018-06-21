/**
 * Created by wangweilin on 2016/11/1.
 */

var data = {
    classPrefix: 'emoji-',
    list: [
        //region row1
        {
            text: "笑脸",
            class: "xiaolian",
            url: "705",
            code: ["\uD83D\uDE04", "\uE415", "\uDBB8\uDF38"]
        },
        {
            text: "开心",
            class: "kaixin",
            url: "711",
            code: ["\uD83D\uDE0A", "\uE056", "\uDBB8\uDF35"]
        },
        {
            text: "大笑",
            class: "daxiao",
            url: "704",
            code: ["\uD83D\uDE03", "\uE057", "\uDBB8\uDF30", "\uD83D\uDE00"]
        },
        {
            text: "热情",
            class: "reqing",
            url: "50",
            code: ["\u263A\ufe0f", "\uE414", "\uDBB8\uDF36"]
        },
        {
            text: "眨眼",
            class: "zhayan",
            url: "710",
            code: ["\ud83d\ude09"]
        },
        {
            text: "色",
            class: "se",
            url: "714",
            code: ["\uD83D\uDE09", "\uE405", "\uDBB8\uDF47"]
        },
        {
            text: "接吻",
            class: "jiewen",
            url: "725",
            code: ["\uD83D\uDE18", "\uE418", "\uDBB8\uDF2C"]
        },
        {
            text: "亲吻",
            class: "qinwen",
            url: "727",
            code: ["\uD83D\uDE1A", "\uE417", "\uDBB8\uDF2D"]
        },
        //endregion row1

        //region row2
        {
            text: "脸红",
            class: "lianhong",
            url: "752",
            code: ["\uD83D\uDE33", "\uE40D", "\uDBB8\uDF2F"]
        },
        {
            text: "露齿笑",
            class: "louchixiao",
            url: "702",
            code: ["\uD83D\uDE3C", "\uE404", "\uDBB8\uDF4F"]
        },
        {
            text: "满意",
            class: "manyi",
            url: "713",
            code: ["\uD83D\uDE0C", "\uE40A", "\uDBB8\uDF3E"]
        },
        {
            text: "戏弄",
            class: "xinong",
            url: "729",
            code: ["\uD83D\uDE1C", "\uE105", "\uDBB8\uDF29"]
        },
        {
            text: "吐舌",
            class: "tushe",
            url: "730",
            code: ["\ud83d\ude1d"]  //\ud83d\udc45
        },
        {
            text: "无语",
            class: "wuyu",
            url: "719",
            code: ["\uD83D\uDC45", "\uE409", "\uDBB8\uDD94"]
        },
        {
            text: "得意",
            class: "deyi",
            url: "716",
            code: ["\uD83D\uDE0F", "\uE402", "\uDBB8\uDF43"]
        },
        {
            text: "汗",
            class: "han",
            url: "720",
            code: ["\uD83D\uDE13", "\uE108", "\uDBB8\uDF44"]
        },
        //endregion row2

        //region row3
        {
            text: "失望",
            class: "shiwang",
            url: "721",
            code: ["\uD83D\uDE40", "\uE403", "\uDBB8\uDF50"]
        },
        {
            text: "低落",
            class: "diluo",
            url: "731",
            code: ["\uD83D\uDE1E", "\uE058", "\uDBB8\uDF23"]
        },
        {
            text: "呸",
            class: "pei",
            url: "723",
            code: ["\uD83D\uDE16", "\uE407", "\uDBB8\uDF3F"]
        },
        {
            text: "焦虑",
            class: "jiaolv",
            url: "738",
            code: ["\uD83D\uDE25", "\uE401", "\uDBB8\uDF45"]
        },
        {
            text: "担心",
            class: "danxin",
            url: "749",
            code: ["\uD83D\uDE30", "\uE40F", "\uDBB8\uDF25"]
        },
        {
            text: "震惊",
            class: "zhenjing",
            url: "741",
            code: ["\uD83D\uDE28", "\uE40B", "\uDBB8\uDF3B"]
        },
        {
            text: "悔恨",
            class: "huihen",
            url: "736",
            code: ["\uD83D\uDE2B", "\uE406", "\uDBB8\uDF46"]
        },
        {
            text: "眼泪",
            class: "yanlei",
            url: "735",
            code: ["\uD83D\uDE22", "\uE413", "\uDBB8\uDF39"]
        },
        //endregion

        //region row4
        {
            text: "哭",
            class: "ku",
            url: "746",
            code: ["\uD83D\uDE2D", "\uE411", "\uDBB8\uDF3A"]
        },
        {
            text: "破涕为笑",
            class: "potiweixiao",
            url: "703",
            code: ["\uD83D\uDE02", "\uE412", "\uDBB8\uDF34"]
        },
        {
            text: "晕",
            class: "yun",
            url: "754",
            code: ["\uD83D\uDE32", "\uE410", "\uDBB8\uDF22"]
        },
        {
            text: "恐惧",
            class: "kongju",
            url: "750",
            code: ["\uD83D\uDE31", "\uE107", "\uDBB8\uDF41"]
        },
        {
            text: "心烦",
            class: "xinfan",
            url: "733",
            code: ["\uD83D\uDE20", "\uE059", "\uDBB8\uDF20"]
        },
        {
            text: "生气",
            class: "shengqi",
            url: "734",
            code: ["\uD83D\uDE21", "\uE416", "\uDBB8\uDF4E"]
        },
        {
            text: "睡觉",
            class: "shuijiao",
            url: "743",
            code: ["\uD83D\uDE2A", "\uE408", "\uDBB8\uDF42"]
        },
        {
            text: "生病",
            class: "shengbing",
            url: "756",
            code: ["\uD83D\uDE37", "\uE40C", "\uDBB8\uDF2E"]
        },
        //endregion

        //region row5
        {
            text: "恶魔",
            class: "emo",
            url: "485",
            code: ["\uD83D\uDC7F", "\uE11A", "\uDBB8\uDDB2"]
        },
        {
            text: "外星人",
            class: "waixingren",
            url: "483",
            code: ["\uD83D\uDC7D", "\uE10C", "\uDBB8\uDDB0"]
        },
        {
            text: "心",
            class: "xin",
            url: "109",
            code: ["\u2764", "\uE022", "\uDBBA\uDF0C"]
        },
        {
            text: "心碎",
            class: "xinsui",
            url: "506",
            code: ["\uD83D\uDC94", "\uE023", "\uDBBA\uDF0E"]
        },
        {
            text: "丘比特",
            class: "qiubite",
            url: "510",
            code: ["\uD83D\uDC98", "\uE329", "\uDBBA\uDF12"]
        },
        {
            text: "闪烁",
            class: "shanshuo",
            url: "98",
            code: ["\u2728", "\uE32E", "\uDBBA\uDF60"]
        },
        {
            text: "星星",
            class: "xingxing",
            url: "123",
            code: ["\uD83C\uDF1F", "\uE335", "\uDBBA\uDF69"]
        },
        {
            text: "叹号",
            class: "tanhao",
            url: "108",
            code: ["\u2755", "\uE337", "\uDBBA\uDF0B"]
        },
        //endregion

        //region row6
        {
            text: "问号",
            class: "wenhao",
            url: "105",
            code: ["\u2754", "\uE336", "\uDBBA\uDF0A"]
        },
        {
            text: "睡着",
            class: "shuizhao",
            url: "522",
            code: ["\uD83D\uDCA4", "\uE13C", "\uDBBA\uDF59"]
        },
        {
            text: "水滴",
            class: "shuidi",
            url: "524",
            code: ["\uD83D\uDCA6", "\uE331", "\uDBBA\uDF5B"]
        },
        {
            text: "音乐",
            class: "yinyue",
            url: "322",
            code: ["\uD83C\uDFB5", "\uE03E", "\uDBBA\uDC13"]
        },
        {
            text: "火",
            class: "huo",
            url: "647",
            code: ["\uD83D\uDD25", "\uE11D", "\uDBB9\uDCF6"]
        },
        {
            text: "便便",
            class: "bianbian",
            url: "527",
            code: ["\uD83D\uDCA9", "\uE05A", "\uDBB9\uDCF4"]
        },
        {
            text: "强",
            class: "qiang",
            url: "435",
            code: ["\uD83D\uDC4D", "\uE00E", "\uDBBA\uDF97"]
        },
        {
            text: "弱",
            class: "ruo",
            url: "436",
            code: ["\uD83D\uDC4E", "\uE421", "\uDBBA\uDFA0"]
        },
        //endregion

        //region row7
        {
            text: "拳头",
            class: "quantou",
            url: "432",
            code: ["\uD83D\uDC4A", "\uE00D", "\uDBBA\uDF96"]
        },
        {
            text: "胜利",
            class: "shengli",
            url: "93",
            code: ["\u270C", "\uE011", "\uDBBA\uDF94"]
        },
        {
            text: "上",
            class: "shang",
            url: "428",
            code: ["\uD83D\uDC46", "\uE22E", "\uDBBA\uDF99"]
        },
        {
            text: "下",
            class: "xia",
            url: "429",
            code: ["\uD83D\uDC47", "\uE22F", "\uDBBA\uDF9A"]
        },
        {
            text: "右",
            class: "you",
            url: "431",
            code: ["\uD83D\uDC49", "\uE231", "\uDBBA\uDF9C"]
        },
        {
            text: "左",
            class: "zuo",
            url: "430",
            code: ["\uD83D\uDC48", "\uE230", "\uDBBA\uDF9B"]
        },
        {
            text: "第一",
            class: "diyi",
            url: "49",
            code: ["\u261d\ufe0f", "\uE00F", "\uDBBA\uDF98"]
        },
        {
            text: "强壮",
            class: "qiangzhuang",
            url: "528",
            code: ["\uD83D\uDCAA", "\uE14C", "\uDBBA\uDF5E"]
        },
        //endregion

        //region row8
        {
            text: "吻",
            class: "wen",
            url: "501",
            code: ["\uD83D\uDC8F", "\uE111", "\uDBBA\uDC27"]
        },
        {
            text: "热恋",
            class: "relian",
            url: "503",
            code: ["\uD83D\uDC91", "\uE425", "\uDBBA\uDC29"]
        },
        {
            text: "男孩",
            class: "nanhai",
            url: "460",
            code: ["\uD83D\uDC66", "\uE001", "\uDBB8\uDD9B"]
        },
        {
            text: "女孩",
            class: "nvhai",
            url: "461",
            code: ["\uD83D\uDC67", "\uE002", "\uDBB8\uDD9C"]
        },
        {
            text: "女士",
            class: "nvshi",
            url: "463",
            code: ["\uD83D\uDC69", "\uE005", "\uDBB8\uDD9E"]
        },
        {
            text: "男士",
            class: "nanshi",
            url: "462",
            code: ["\uD83D\uDC68", "\uE004", "\uDBB8\uDD9D"]
        },
        {
            text: "天使",
            class: "tianshi",
            url: "482",
            code: ["\uD83D\uDC7C", "\uE04E", "\uDBB8\uDDAF"]
        },
        {
            text: "骷髅",
            class: "kulou",
            url: "486",
            code: ["\uD83D\uDC80", "\uE11C", "\uDBB8\uDDB3"]
        },
        //endregion

        //region row9
        {
            text: "红唇",
            class: "hongchun",
            url: "426",
            code: ["\uD83D\uDC8B", "\uE003", "\uDBBA\uDC23"]
        },
        {
            text: "太阳",
            class: "taiyang",
            url: "43",
            code: ["\u2600", "\uE04A", "\uDBB8\uDC00"]
        },
        {
            text: "下雨",
            class: "xiayu",
            url: "47",
            code: ["\u2614", "\uE04B", "\uDBB8\uDC02"]
        },
        {
            text: "多云",
            class: "duoyun",
            url: "44",
            code: ["\u2601", "\uE049", "\uDBB8\uDC01"]
        },
        {
            text: "雪人",
            class: "xueren",
            url: "77",
            code: ["\u26C4", "\uE048", "\uDBB8\uDC03"]
        },
        {
            text: "月亮",
            class: "yueliang",
            url: "197",
            code: ["\uD83C\uDF19", "\uE04C", "\uDBB8\uDC14"]
        },
        {
            text: "闪电",
            class: "shandian",
            url: "72",
            code: ["\u26A1", "\uE13D", "\uDBB8\uDC04"]
        },
        {
            text: "海浪",
            class: "hailang",
            url: "182",
            code: ["\uD83C\uDF0A", "\uE43E", "\uDBB8\uDC38"]
        },
        //endregion

        //region row10
        {
            text: "猫",
            class: "mao",
            url: "409",
            code: ["\uD83D\uDC31", "\uE04F", "\uDBB8\uDDB8"]
        },
        {
            text: "小狗",
            class: "xiaogou",
            url: "414",
            code: ["\uD83D\uDC29", "\uE052", "\uDBB8\uDDD8"]
        },
        {
            text: "老鼠",
            class: "laoshu",
            url: "405",
            code: ["\uD83D\uDC2D", "\uE053", "\uDBB8\uDDC2"]
        },
        {
            text: "仓鼠",
            class: "cangshu",
            url: "417",
            code: ["\uD83D\uDC39", "\uE524", "\uDBB8\uDDCA"]
        },
        {
            text: "兔子",
            class: "tuzi",
            url: "408",
            code: ["\uD83D\uDC30", "\uE52C", "\uDBB8\uDDD2"]
        },
        {
            text: "狗",
            class: "gou",
            url: "418",
            code: ["\uD83D\uDC3A", "\uE52A", "\uDBB8\uDDD0"]
        },
        {
            text: "青蛙",
            class: "qingwa",
            url: "416",
            code: ["\uD83D\uDC38", "\uE531", "\uDBB8\uDDD7"]
        },
        {
            text: "老虎",
            class: "laohu",
            url: "407",
            code: ["\uD83D\uDC2F", "\uE050", "\uDBB8\uDDC0"]
        },
        //endregion

        //region row11
        {
            text: "考拉",
            class: "kaola",
            url: "400",
            code: ["\uD83D\uDC28", "\uE527", "\uDBB8\uDDCD"]
        },
        {
            text: "熊",
            class: "xiong",
            url: "419",
            code: ["\uD83D\uDC3B", "\uE051", "\uDBB8\uDDC1"]
        },
        {
            text: "猪",
            class: "zhu",
            url: "415",
            code: ["\uD83D\uDC37", "\uE10B", "\uDBB8\uDDBF"]
        },
        {
            text: "牛",
            class: "niu",
            url: "406",
            code: ["\uD83D\uDC2E", "\uE52B", "\uDBB8\uDDD1"]
        },
        {
            text: "野猪",
            class: "yezhu",
            url: "383",
            code: ["\uD83D\uDC17", "\uE52F", "\uDBB8\uDDD5"]
        },
        {
            text: "猴子",
            class: "houzi",
            url: "413",
            code: ["\uD83D\uDC35", "\uE109", "\uDBB8\uDDC4"]
        },
        {
            text: "马",
            class: "ma",
            url: "412",
            code: ["\uD83D\uDC34", "\uE01A", "\uDBB8\uDDBE"]
        },
        {
            text: "蛇",
            class: "she",
            url: "373",
            code: ["\uD83D\uDC0D", "\uE52D", "\uDBB8\uDDD3"]
        },
        //endregion

        //region row12
        {
            text: "鸽子",
            class: "gezi",
            url: "398",
            code: ["\uD83D\uDC26", "\uE521", "\uDBB8\uDDC8"]
        },
        {
            text: "鸡",
            class: "ji",
            url: "380",
            code: ["\uD83D\uDC14", "\uE52E", "\uDBB8\uDDD4"]
        },
        {
            text: "企鹅",
            class: "qie",
            url: "399",
            code: ["\uD83D\uDC27", "\uE055", "\uDBB8\uDDBC"]
        },
        {
            text: "毛虫",
            class: "maochong",
            url: "387",
            code: ["\uD83D\uDC1B", "\uE525", "\uDBB8\uDDCB"]
        },
        {
            text: "章鱼",
            class: "zhangyu",
            url: "385",
            code: ["\uD83D\uDC19", "\uE10A", "\uDBB8\uDDC5"]
        },
        {
            text: "鱼",
            class: "yu",
            url: "392",
            code: ["\uD83D\uDC20", "\uE522", "\uDBB8\uDDC9"]
        },
        {
            text: "鲸鱼",
            class: "jingyu",
            url: "411",
            code: ["\uD83D\uDC33", "\uE054", "\uDBB8\uDDC3"]
        },
        {
            text: "海豚",
            class: "haitun",
            url: "404",
            code: ["\uD83D\uDC2C", "\uE520", "\uDBB8\uDDC7"]
        },
        //endregion

        //region row13
        {
            text: "玫瑰",
            class: "meigui",
            url: "213",
            code: ["\uD83C\uDF39", "\uE032", "\uDBB8\uDC41"]
        },
        {
            text: "花",
            class: "hua",
            url: "214",
            code: ["\uD83C\uDF3A", "\uE303", "\uDBB8\uDC45"]
        },
        {
            text: "棕榈树",
            class: "zonglvshu",
            url: "209",
            code: ["\uD83C\uDF34", "\uE307", "\uDBB8\uDC47"]
        },
        {
            text: "仙人掌",
            class: "xianrenzhang",
            url: "210",
            code: ["\uD83C\uDF35", "\uE308", "\uDBB8\uDC48"]
        },
        {
            text: "礼盒",
            class: "lihe",
            url: "515",
            code: ["\uD83D\uDC9D", "\uE437", "\uDBBA\uDF17"]
        },
        {
            text: "南瓜灯",
            class: "nanguadeng",
            url: "284",
            code: ["\uD83C\uDF83", "\uE445", "\uDBB9\uDD1F"]
        },
        {
            text: "鬼魂",
            class: "guihun",
            url: "481",
            code: ["\uD83D\uDC7B", "\uE11B", "\uDBB8\uDDAE"]
        },
        {
            text: "圣诞树",
            class: "shengdanshu",
            url: "285",
            code: ["\uD83C\uDF84", "\uE033", "\uDBB9\uDD12"]
        },
        //endregion

        //region row14
        {
            text: "礼物",
            class: "liwu",
            url: "282",
            code: ["\uD83C\uDF81", "\uE112", "\uDBB9\uDD10"]
        },
        {
            text: "铃",
            class: "ling",
            url: "630",
            code: ["\uD83D\uDD14", "\uE325", "\uDBB9\uDCF2"]
        },
        {
            text: "庆祝",
            class: "qingzhu",
            url: "290",
            code: ["\uD83C\uDF89", "\uE312", "\uDBB9\uDD17"]
        },
        {
            text: "气球",
            class: "qiqiu",
            url: "289",
            code: ["\uD83C\uDF88", "\uE310", "\uDBB9\uDD16"]
        },
        {
            text: "CD",
            class: "cd",
            url: "549",
            code: ["\uD83D\uDCBF", "\uE126", "\uDBBA\uDC1D"]
        },
        {
            text: "相机",
            class: "xiangji",
            url: "605",
            code: ["\uD83D\uDCF7", "\uE008", "\uDBB9\uDCEF"]
        },
        {
            text: "录像机",
            class: "luxiangji",
            url: "306",
            code: ["\uD83C\uDFA5", "\uE03D", "\uDBBA\uDC01"]
        },
        {
            text: "电脑",
            class: "diannao",
            url: "545",
            code: ["\uD83D\uDCBB", "\uE00C", "\uDBB9\uDD38"]
        },
        //endregion

        //region row15
        {
            text: "电视",
            class: "dianshi",
            url: "607",
            code: ["\uD83D\uDCFA", "\uE12A", "\uDBBA\uDC1C"]
        },
        {
            text: "电话",
            class: "dianhua",
            url: "45",
            code: ["\uD83D\uDCDE", "\uE009", "\uDBB9\uDD24"]
        },
        {
            text: "解锁",
            class: "jiesuo",
            url: "629",
            code: ["\uD83D\uDD13", "\uE145", "\uDBBA\uDF87"]
        },
        {
            text: "锁",
            class: "suo",
            url: "628",
            code: ["\uD83D\uDD12", "\uE144", "\uDBBA\uDF86"]
        },
        {
            text: "钥匙",
            class: "yaoshi",
            url: "627",
            code: ["\uD83D\uDD11", "\uE03F", "\uDBBA\uDF82"]
        },

        {
            text: "邮箱",
            class: "youxiang",
            url: "594",
            code: ["\uD83D\uDCEB", "\uE101", "\uDBB9\uDD2D"]
        },
        //endregion

        //region row16
        {
            text: "浴缸",
            class: "yugang",
            url: "841",
            code: ["\uD83D\uDEC0", "\uE13F", "\uDBB9\uDD05"]
        },
        {
            text: "钱",
            class: "qian",
            url: "534",
            code: ["\uD83D\uDCB2", "\uE12F", "\uDBB9\uDCE0"]
        },
        {
            text: "炸弹",
            class: "zhadan",
            url: "521",
            code: ["\uD83D\uDCA3", "\uE311", "\uDBBA\uDF58"]
        },
        {
            text: "手枪",
            class: "shouqiang",
            url: "653",
            code: ["\uD83D\uDD2B", "\uE113", "\uDBB9\uDCF5"]
        },
        {
            text: "药丸",
            class: "yaowan",
            url: "496",
            code: ["\uD83D\uDC8A", "\uE30F", "\uDBB9\uDD0A"]
        },
        {
            text: "橄榄球",
            class: "ganlanqiu",
            url: "340",
            code: ["\uD83C\uDFC8", "\uE42B", "\uDBB9\uDFDD"]
        },
        {
            text: "篮球",
            class: "lanqiu",
            url: "333",
            code: ["\uD83C\uDFC0", "\uE42A", "\uDBB9\uDFD6"]
        },
        {
            text: "足球",
            class: "zuqiu",
            url: "75",
            code: ["\u26BD", "\uE018", "\uDBB9\uDFD4"]
        },
        //endregion

        //region row17
        {
            text: "棒球",
            class: "bangqiu",
            url: "76",
            code: ["\u26BE", "\uE016", "\uDBB9\uDFD1"]
        },

        {
            text: "奖杯",
            class: "jiangbei",
            url: "338",
            code: ["\uD83C\uDFC6", "\uE131", "\uDBB9\uDFDB"]
        },
        {
            text: "入侵者",
            class: "ruqinzhe",
            url: "484",
            code: ["\uD83D\uDC7E", "\uE12B", "\uDBB8\uDDB1"]
        },
        {
            text: "唱歌",
            class: "changge",
            url: "305",
            code: ["\uD83C\uDFA4", "\uE03C", "\uDBBA\uDC00"]
        },
        {
            text: "吉他",
            class: "jita",
            url: "325",
            code: ["\uD83C\uDFB8", "\uE041", "\uDBBA\uDC16"]
        },
        {
            text: "比基尼",
            class: "bijini",
            url: "447",
            code: ["\uD83D\uDC59", "\uE322", "\uDBB9\uDCDA"]
        },
        {
            text: "皇冠",
            class: "huangguan",
            url: "439",
            code: ["\uD83D\uDC51", "\uE10E", "\uDBB9\uDCD1"]
        },
        //endregion

        //region row18
        {
            text: "雨伞",
            class: "yusan",
            url: "174",
            code: ["\uD83C\uDF02", "\uE43C", "\uDBB8\uDC07"]
        },
        {
            text: "手提包",
            class: "shoutibao",
            url: "450",
            code: ["\uD83D\uDC5C", "\uE323", "\uDBB9\uDCF0"]
        },
        {
            text: "口红",
            class: "kouhong",
            url: "490",
            code: ["\uD83D\uDC84", "\uE31C", "\uDBB8\uDD95"]
        },
        {
            text: "戒指",
            class: "jiezhi",
            url: "499",
            code: ["\uD83D\uDC8D", "\uE034", "\uDBBA\uDC25"]
        },
        {
            text: "钻石",
            class: "zuanshi",
            url: "500",
            code: ["\uD83D\uDC8E", "\uE035", "\uDBBA\uDC26"]
        },
        {
            text: "咖啡",
            class: "kafei",
            url: "48",
            code: ["\u2615", "\uE045", "\uDBBA\uDD81"]
        },
        {
            text: "啤酒",
            class: "pijiu",
            url: "278",
            code: ["\uD83C\uDF7A", "\uE047", "\uDBBA\uDD83"]
        },
        {
            text: "干杯",
            class: "ganbei",
            url: "279",
            code: ["\uD83C\uDF7B", "\uE30C", "\uDBBA\uDD87"]
        },
        //endregion

        //region row19
        {
            text: "鸡尾酒",
            class: "jiweijiu",
            url: "276",
            code: ["\uD83C\uDF77", "\uE044", "\uDBBA\uDD86"]
        },
        {
            text: "汉堡",
            class: "hanbao",
            url: "240",
            code: ["\uD83C\uDF54", "\uE120", "\uDBBA\uDD60"]
        },
        {
            text: "薯条",
            class: "shutiao",
            url: "251",
            code: ["\uD83C\uDF5F", "\uE33B", "\uDBBA\uDD67"]
        },
        {
            text: "意面",
            class: "yimian",
            url: "249",
            code: ["\uD83C\uDF5D", "\uE33F", "\uDBBA\uDD6B"]
        },
        {
            text: "寿司",
            class: "shousi",
            url: "255",
            code: ["\uD83C\uDF63", "\uE344", "\uDBBA\uDD6E"]
        },
        {
            text: "面条",
            class: "miantiao",
            url: "248",
            code: ["\uD83C\uDF5C", "\uE340", "\uDBBA\uDD63"]
        },
        {
            text: "冰激凌",
            class: "bingjiling",
            url: "528",
            code: ["\uD83C\uDF66", "\uE33A", "\uDBBA\uDD66"]
        },
        //endregion

        //region row20
        {
            text: "蛋糕",
            class: "dangao",
            url: "283",
            code: ["\uD83C\uDF82", "\uE34B", "\uDBB9\uDD11"]
        },
        {
            text: "苹果",
            class: "pingguo",
            url: "284",
            code: ["\uD83C\uDF4F", "\uE345", "\uDBB8\uDC5B"]
        },
        {
            text: "飞机",
            class: "feiji",
            url: "89",
            code: ["\u2708", "\uE01D", "\uDBB9\uDFE9"]
        },
        {
            text: "火箭",
            class: "huojian",
            url: "777",
            code: ["\uD83D\uDE80", "\uE10D", "\uDBB9\uDFED"]
        },
        {
            text: "自行车",
            class: "zixingche",
            url: "827",
            code: ["\uD83D\uDEB2", "\uE136", "\uDBB9\uDFEB"]
        },
        {
            text: "高铁",
            class: "gaotie",
            url: "782",
            code: ["\uD83D\uDE84", "\uE435", "\uDBB9\uDFE2"]
        },
        {
            text: "警告",
            class: "jinggao",
            url: "71",
            code: ["\u26A0", "\uE252", "\uDBBA\uDF23"]
        },
        {
            text: "旗",
            class: "qi",
            url: "334",
            code: ["\uD83C\uDFC1", "\uE132", "\uDBB9\uDFD7"]
        },
        //endregion

        //region row21
        {
            text: "男人",
            class: "nanren",
            url: "834",
            code: ["\uD83D\uDEB9", "\uE138", "\uDBBA\uDF33"]
        },
        {
            text: "女人",
            class: "nvren",
            url: "835",
            code: ["\uD83D\uDEBA", "\uE139", "\uDBBA\uDF34"]
        },
        {
            text: "O",
            class: "o",
            url: "124",
            code: ["\u2B55", "\uE332", "\uDBBA\uDF44"]
        },
        {
            text: "X",
            class: "x",
            url: "103",
            code: ["\u274E", "\uE333", "\uDBBA\uDF46"]
        },
        {
            text: "版权",
            class: "banquan",
            url: "12",
            code: ["\u00A9", "\uE24E", "\uDBBA\uDF29", "&#169;"] ////特殊处理: '©'  版权符号会被html转义
        },
        {
            text: "商标",
            class: "shangbiao",
            url: "16",
            code: ["\u2122", "\uE537", "\uDBBA\uDF2A"]
        }
        //endregion
    ]
}

var pathHost = 'https://static.ws.126.net/f2e/modules/emoji/lib/emoji/';

module.exports = data.list.map(function (item) {
    item.url = pathHost + item.url + '.png';
    item.class = data.classPrefix + item.class;
    item.code = item.code[0];
    return item;
});

