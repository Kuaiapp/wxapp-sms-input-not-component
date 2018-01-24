---
title: 小程序验证码输入框
date: 2018-01-24 14:12:53
tags: ['小程序','js','验证码']
---

最近在做小程序的开发，需要一个验证码的输入框，UI如图
<image src="http://obgw0poa4.bkt.clouddn.com/my-python-logo.png" height = "380" alt="验证码输入页面UI" /> 
最开始想到的是使用四个 **input**  输入框，可以解决界面的问题，安卓手机上完美解决，可是在iphone上测试的时候，发现每输入一个数字之后，会有一个键盘收起然后再弹出的过程，这样的用户体验是极差的，于是寻找更加好的解决方案。

结果一番努力之后终于找到了一个类似的 [解决方案][1]，这只是一个密码输入框的样式，但是已经实现了一个input分割成多个框框，于是就这个基础之上修改样式，来实现需要的输入框。

  [1]: https://github.com/fiveTree/-_-
  
##### 代码如下
js
```js
var interval = null;
Page({
  /**
   * 页面的初始数据
   */
	data: {
		phoneNumber: "",
		time: 60,
		code: null,
		reget: false,
		topTips: false,
		code_isFocus: true,//控制input 聚焦
		code: [],
		focus_status: [],
		length: 0,//已经输入的长度
	},

  /**
   * 生命周期函数--监听页面加载
   */
	onLoad: function (options) {
		var that = this;
		//倒计时函数
		that.getCode();
		that.set_Focus();
		//...
	},
	//验证码输入时获取验证码
	get_code(e) {
		var that = this;
		that.setData({
			code: e.detail.value
		});
		if (that.data.code.length == 0) {
			that.setData({
				focus_status: "1000"
			});
		}
		if (that.data.code.length == 1) {
			that.setData({
				length: e.detail.value.length,
				focus_status: "0100"
			});
		}
		if (that.data.code.length == 2) {
			that.setData({
				length: e.detail.value.length,
				focus_status: "0010"
			});
		}
		if (that.data.code.length == 3) {
			that.setData({
				length: e.detail.value.length,
				focus_status: "0001"
			});
		}
		if (that.data.code.length == 4) {
			that.setData({
				length: e.detail.value.length
			})
			console.log(that.data.code)
			//...
		}
	},

	set_Focus() { //聚焦input
		var that = this
		that.setData({
			code_isFocus: true
		})
	},

	//倒计时函数
	getCode: function (options) {
		var that = this;
		var currentTime = that.data.time
		interval = setInterval(function () {
			currentTime--;
			that.setData({
				time: currentTime
			})
			if (currentTime <= 0) {
				clearInterval(interval)
				that.setData({
					time: "",
					currentTime: 11,
					disabled: false,
					reget: true,//改变字体样式颜色
					currentTime: 61,
					disabled: false
				})
			}
		}, 1000)
	},

	//重新获取验证码
	reGetCode:function(){
		//...
	}
})
```
wxss
```css
page{
	background: #fff;
  color: #000;
  font-size: 30rpx;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.verCodeView{
	padding: 164rpx 40rpx 32rpx 40rpx;
}
.verCodeSendView{
	padding: 0 40rpx 74rpx 40rpx;
}
.sendTime{
	text-align: center;
	padding-top: 54rpx;
}
.verCodeInputView{
	display: -webkit-flex;
	padding: 0 40rpx 0 40rpx;
}
.verCodeInput{
  margin: 0 58rpx 0 0;
	height: 150rpx;
  width: 124rpx;
	background-color: #fff;
	border:#DFDFDF solid 1rpx;
	font-size: 60rpx;
	text-align: center;
  justify-content: space-between;
}


/* 新验证码输入框样式 */
page .code .input-content-wrap .input-code-wrap {
  display: flex;
  align-items: center;
  justify-content: center1;
  height: 150rpx;
}
page .code .input-content-wrap .input-code-wrap .code_dot {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #000;
  background-color: #fff;
  box-sizing: border-box;
  width: 124rpx;
  height: 150rpx;
  border: #dfdfdf solid 1rpx;
  border-left: none 0;
  font-size: 60rpx;
}
page .code .input-content-wrap .input-code-wrap .code_dot:nth-child(1) {
  border-left: 2rpx solid #ddd;
}
page .code .input-content-wrap .input-code-wrap .code_dot i {
  /* background: #000; */
  border-radius: 50%;
  width: 20rpx;
  height: 20rpx;
  display: flex;
  align-items: center;
}
page .code .input-content {
  position: absolute;
  opacity: 0;
  left: -100%;
  top: 600rpx;
  background: #f56;
  z-index: -999;
  text-align: center;
}
page .code .input-content.active {
  z-index: -99;
}
.input {
  height: 150rpx;
  width: 124rpx;
	flex: 1;
  background-color: #fff;
  color: #262626;
  font-size: 64rpx;
	margin: 0 29rpx 0 29rpx;
	border: 1rpx #4287ff solid;
	position: relative;
}
.input_none{
  height: 150rpx;
  width: 124rpx;
	flex: 1;
  background-color: #fff;
  color: #262626;
  font-size: 64rpx;
	margin: 0 29rpx 0 29rpx;
	border: 1rpx #dfdfdf solid;
	position: relative;
}
.input text {
	display: flex;
	align-items: center;
	justify-content: center;
	align-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
}
.input_none text {
	display: flex;
	align-items: center;
	justify-content: center;
	align-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
}

```
wxml
```html
<view class='all'>
  <view class='verCodeView'>
    <text style='font-size:44rpx;color:#262626'>输入验证码</text>
  </view>
  <view class='verCodeSendView'>
    <text style='font-size:28rpx;color:#9b9b9b'>已向 {{phoneNumber}} 发送验证码</text>
  </view>
  <view class="code">
    <view class="input-content-wrap">
      <view catchtap="set_Focus" class="input-code-wrap">
         <view class="{{length==1||length==0?'input':'input_none'}}">
          <text>{{code[0]}}</text>
        </view> 
        <view class="{{length==2?'input':'input_none'}}">
          <text>{{code[1]}}</text>
        </view>
        <view class="{{length==3?'input':'input_none'}}">
          <text>{{code[2]}}</text>
        </view>
        <view class="{{length==4?'input':'input_none'}}">
          <text>{{code[3]}}</text>
        </view> 
      </view>
    </view>
    <input bindinput="get_code" class="input-content" type="number" focus="{{code_isFocus}}" maxlength="4" />
  </view>
  <view class='sendTime'>
    <text wx:if='{{!reget}}' style='font-size:28rpx;color:#9b9b9b'>{{time}}s 后可重新获取</text>
    <text wx:if='{{reget}}' style='font-size:28rpx;color:#4287ff' bindtap='reGetCode'>重新获取</text>
  </view>
</view>
```