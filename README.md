最近在做小程序的开发，需要一个验证码的输入框，UI如图![验证码输入页面UI][1]
<image src="http://obgw0poa4.bkt.clouddn.com/my-python-logo.png"  hight="350"></image>
最开始想到的是使用四个 **input**  输入框，可以解决界面的问题，安卓手机上完美解决，可是在iphone上测试的时候，发现每输入一个数字之后，会有一个键盘收起然后再弹出的过程，这样的用户体验是极差的，于是寻找更加好的解决方案。

结果一番努力之后终于找到了一个类似的 [解决方案][2]，这只是一个密码输入框的样式，但是已经实现了一个input分割成多个框框，于是就这个基础之上修改样式，来实现需要的输入框。


  [1]: http://obgw0poa4.bkt.clouddn.com/my-python-logo.png
  [2]: https://github.com/fiveTree/-_-