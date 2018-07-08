配合`emoji-convert`，预定义表情资源。已预定义以下表情:

1. emoji
2. 熊小易表情
3. 阿鸡米德表情
4. 熊猫服少年表情
5. 好狗阿健表情

# 下载

## npm

`npm install -S emoji-convert-resource-base`

1. emoji: `require('emoji-convert-resource-base')`
2. 熊小易: `require('emoji-convert-resource-base/xxy')`
3. 阿鸡米德: `require('emoji-convert-resource-base/ajmd')`
4. 熊猫服少年: `require('emoji-convert-resource-base/xm')`
5. 好狗阿健: `require('emoji-convert-resource-base/hgaj')`

## 直接下载

1. `http://wangwl.net/static/demo/emoji-convert-resource-base/index.js`
2. `http://wangwl.net/static/demo/emoji-convert-resource-base/xxy.js`
3. `http://wangwl.net/static/demo/emoji-convert-resource-base/ajmd.js`
4. `http://wangwl.net/static/demo/emoji-convert-resource-base/xm.js`
5. `http://wangwl.net/static/demo/emoji-convert-resource-base/hgaj.js`


# 使用

```javascript
import sourceEmoji from 'emoji-convert-resource-base';
import sourceXxy from 'emoji-convert-resource-base/xxy';
import convert from 'emoji-convert';

convert.extend(sourceEmoji,sourceXxy);

```
