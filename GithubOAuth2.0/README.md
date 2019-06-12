# 获取client_id、client_secret
因为我们要使用GitHub作为第三方登录，所以肯定要先到官网上注册一个application。

网址： [https://github.com/settings/developers](https://github.com/settings/developers)

![https://s2.ax1x.com/2019/01/23/kA7Rbt.png](https://s2.ax1x.com/2019/01/23/kA7Rbt.png)

上面有两个数据很关键

- cliendt_id这是GitHub用来标识我们的APP的

  接下来我们需要通过这个字段来构建我们的登录url

- client Secret 这个很关键，等会我们就靠它来认证的，要好好保存。我这个只是演示教程，用完就销毁了，所以直接公开了。

# 总结

- 用户登录
- 用户登录后，GitHub会把用户重定向到我们预先设置好的URL，同时携带一个code
- 服务器拿到这个code，向GitHub申请token
- 拿到token后，我们就可以获取用户信息了