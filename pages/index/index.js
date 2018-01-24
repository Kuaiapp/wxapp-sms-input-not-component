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